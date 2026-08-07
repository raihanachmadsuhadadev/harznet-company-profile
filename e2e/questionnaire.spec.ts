import { expect, test } from "@playwright/test";

const embedUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdx18YH3xQi-P9ZxUFTRaPzxlb083mMhZI27ODEnYqFVcHkEg/viewform?embedded=true";
const fallbackUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdx18YH3xQi-P9ZxUFTRaPzxlb083mMhZI27ODEnYqFVcHkEg/viewform";

async function stubGoogleForm(page: import("@playwright/test").Page) {
  await page.route("https://docs.google.com/**", async (route) => {
    await route.fulfill({
      contentType: "text/html",
      body: "<!doctype html><title>Google Form</title>",
    });
  });
}

test("halaman Kuesioner menyematkan Google Form tanpa bergantung pada jaringan eksternal", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await stubGoogleForm(page);

  await page.goto("/kuesioner/");

  await expect(
    page.getByRole("heading", { level: 1, name: "Kuesioner Kepuasan Pelanggan HARZNET" }),
  ).toBeVisible();
  const iframe = page.getByTitle("Kuesioner Kepuasan Pelanggan HARZNET");
  await expect(iframe).toBeVisible();
  await expect(iframe).toHaveAttribute("src", embedUrl);
  await expect(iframe).toHaveAttribute("width", "100%");
  const fallback = page.getByRole("link", { name: "Buka formulir di tab baru" });
  await expect(fallback).toHaveAttribute("href", fallbackUrl);
  await expect(fallback).toHaveAttribute("target", "_blank");
  await expect(fallback).toHaveAttribute("rel", "noopener noreferrer");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("route Kuesioner aman saat direct refresh", async ({ page }) => {
  await stubGoogleForm(page);
  await page.goto("/kuesioner/");
  await page.reload();

  await expect(
    page.getByRole("heading", { level: 1, name: "Kuesioner Kepuasan Pelanggan HARZNET" }),
  ).toBeVisible();
  await expect(page.getByTitle("Kuesioner Kepuasan Pelanggan HARZNET")).toHaveAttribute(
    "src",
    embedUrl,
  );
});

test("navbar desktop, mobile, footer, dan breadcrumb memakai route Kuesioner final", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("banner").getByRole("link", { name: "Kuesioner", exact: true }),
  ).toHaveAttribute("href", "/kuesioner/");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Kuesioner", exact: true }),
  ).toHaveAttribute("href", "/kuesioner/");

  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  await expect(
    page
      .getByRole("navigation", { name: "Navigasi seluler" })
      .getByRole("link", { name: "Kuesioner", exact: true }),
  ).toHaveAttribute("href", "/kuesioner/");

  await stubGoogleForm(page);
  await page.goto("/kuesioner/");
  await expect(
    page.getByRole("navigation", { name: "Breadcrumb" }).getByRole("link", {
      name: "Kuesioner",
      exact: true,
    }),
  ).toHaveAttribute("href", "/kuesioner/");
});
