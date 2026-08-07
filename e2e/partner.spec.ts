import { expect, test } from "@playwright/test";

const partnerHeading = "Perluas jangkauan jaringan dan layanan bersama HARZNET.";

test("halaman HARZNET Partner menampilkan program lengkap tanpa error atau overflow", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto("/layanan/partner/");
  expect(response?.ok()).toBe(true);
  await expect(page.getByRole("heading", { level: 1, name: partnerHeading })).toBeVisible();
  await expect(page.getByText("Dedicated + Metro", { exact: true }).first()).toBeVisible();

  const program = page.getByRole("region", {
    name: "Pilihan kapasitas jaringan untuk kebutuhan mitra.",
  });
  await expect(program.locator("[data-bandwidth-option]")).toHaveCount(18);
  await expect(program.getByText("100 Mbps", { exact: true })).toBeVisible();
  await expect(program.getByText("1 Gbps", { exact: true })).toBeVisible();
  await expect(program.getByText("Rp4.500.000", { exact: true })).toBeVisible();
  await expect(program.getByText("Rp23.000.000", { exact: true })).toBeVisible();

  const terms = page.getByRole("list", { name: "Syarat program HARZNET Partner" });
  await expect(terms.getByRole("listitem")).toHaveCount(8);
  for (const label of [
    "Konsultasikan Program Mitra",
    "Konsultasikan Kapasitas Jaringan",
    "Hubungi Tim HARZNET",
  ]) {
    await expect(page.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      "https://wa.me/6281378888410",
    );
  }

  await page.reload();
  await expect(page.getByRole("heading", { level: 1, name: partnerHeading })).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("seluruh navigasi layanan membuka route HARZNET Partner yang sama", async ({ page }) => {
  const heading = page.getByRole("heading", { level: 1, name: partnerHeading });

  await page.goto("/#layanan");
  const homepageLink = page
    .getByRole("region", { name: "Satu ekosistem untuk beragam kebutuhan teknologi" })
    .getByRole("link", { name: "Pelajari Partner" });
  await expect(homepageLink).toHaveAttribute("href", "/layanan/partner/");
  await homepageLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const mainNavigation = page.getByRole("navigation", { name: "Navigasi utama" });
  await mainNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const desktopLink = page.getByRole("banner").getByRole("link", { name: /^Partner/ });
  await expect(desktopLink).toHaveAttribute("href", "/layanan/partner/");
  await desktopLink.click();
  await expect(heading).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  const mobileNavigation = page.getByRole("navigation", { name: "Navigasi seluler" });
  await mobileNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const mobileLink = mobileNavigation.getByRole("link", { name: "Partner", exact: true });
  await expect(mobileLink).toHaveAttribute("href", "/layanan/partner/");
  await mobileLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const footerLink = page
    .getByRole("contentinfo")
    .getByRole("navigation", { name: "Layanan footer" })
    .getByRole("link", { name: "Partner", exact: true });
  await expect(footerLink).toHaveAttribute("href", "/layanan/partner/");
  await footerLink.click();
  await expect(heading).toBeVisible();
});
