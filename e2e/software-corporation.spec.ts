import { expect, test } from "@playwright/test";

const softwareHeading = "Bangun solusi digital yang sesuai dengan kebutuhan bisnis Anda.";

test("halaman Software Corporation menampilkan layanan tanpa error atau overflow", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto("/layanan/software-corporation/");
  expect(response?.ok()).toBe(true);
  await expect(page.getByRole("heading", { level: 1, name: softwareHeading })).toBeVisible();
  await expect(page.locator("[data-software-capability]")).toHaveCount(4);
  for (const title of [
    "Web Application",
    "Mobile Application",
    "Enterprise System",
    "AI & IoT Integration",
  ]) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  }
  for (const label of ["Konsultasikan Kebutuhan", "Hubungi Tim HARZNET"]) {
    await expect(page.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      "https://wa.me/6281378888410",
    );
  }

  await page.reload();
  await expect(page.getByRole("heading", { level: 1, name: softwareHeading })).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("seluruh navigasi membuka route Software Corporation yang sama", async ({ page }) => {
  const heading = page.getByRole("heading", { level: 1, name: softwareHeading });

  await page.goto("/#layanan");
  const homepageLink = page
    .getByRole("region", { name: "Satu ekosistem untuk beragam kebutuhan teknologi" })
    .getByRole("link", { name: "Pelajari Software Corporation" });
  await expect(homepageLink).toHaveAttribute("href", "/layanan/software-corporation/");
  await homepageLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const mainNavigation = page.getByRole("navigation", { name: "Navigasi utama" });
  await mainNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const desktopLink = page.getByRole("banner").getByRole("link", { name: /^Software Corporation/ });
  await expect(desktopLink).toHaveAttribute("href", "/layanan/software-corporation/");
  await desktopLink.click();
  await expect(heading).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  const mobileNavigation = page.getByRole("navigation", { name: "Navigasi seluler" });
  await mobileNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const mobileLink = mobileNavigation.getByRole("link", {
    name: "Software Corporation",
    exact: true,
  });
  await expect(mobileLink).toHaveAttribute("href", "/layanan/software-corporation/");
  await mobileLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const footerLink = page
    .getByRole("contentinfo")
    .getByRole("navigation", { name: "Layanan footer" })
    .getByRole("link", { name: "Software Corporation", exact: true });
  await expect(footerLink).toHaveAttribute("href", "/layanan/software-corporation/");
  await footerLink.click();
  await expect(heading).toBeVisible();
});
