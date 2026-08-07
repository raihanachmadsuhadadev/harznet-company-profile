import { expect, test } from "@playwright/test";

test("navigasi desktop membuka halaman publik utama", async ({ page }) => {
  await page.goto("/");
  const siteHeader = page.getByRole("banner");
  const navigation = page.getByRole("navigation", { name: "Navigasi utama" });
  await expect(
    page.getByRole("link", { name: "HARZNET Group - Powered by Cemerlang Internet Indonesia" }),
  ).toBeVisible();
  for (const label of ["Beranda", "Tentang Kami", "Informasi", "Kuesioner", "Kontak"])
    await expect(navigation.getByRole("link", { name: label })).toBeVisible();
  const services = navigation.getByRole("button", { name: "Layanan Kami" });
  await expect(services).toHaveAttribute("aria-expanded", "false");
  await services.click();
  await expect(services).toHaveAttribute("aria-expanded", "true");
  await expect(siteHeader.getByRole("link", { name: /^Harznet Home/ })).toHaveAttribute(
    "href",
    "/layanan/harznet-home/",
  );
  await expect(siteHeader.getByRole("link", { name: /^Corporate Bandwidth/ })).toHaveAttribute(
    "href",
    "/layanan/corporate-bandwidth/",
  );
  await expect(siteHeader.getByRole("link", { name: /^Partner/ })).toHaveAttribute(
    "href",
    "/layanan/partner/",
  );
  await expect(siteHeader.getByRole("link", { name: /^Managed Service/ })).toHaveAttribute(
    "href",
    "/layanan/managed-service/",
  );
  await expect(siteHeader.getByRole("link", { name: /^Software Corporation/ })).toHaveAttribute(
    "href",
    "/layanan/software-corporation/",
  );
  await page.keyboard.press("Escape");
  await expect(services).toHaveAttribute("aria-expanded", "false");
  await expect(siteHeader.getByRole("link", { name: "Login", exact: true })).toHaveAttribute(
    "href",
    "/portal-pelanggan",
  );
  for (const [label, path] of [
    ["Tentang Kami", "/tentang-kami/"],
    ["Informasi", "/informasi/"],
    ["Kuesioner", "/kuesioner/"],
    ["Kontak", "/#contact-hub"],
  ] as const) {
    await navigation.getByRole("link", { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`${path.replace(/\/$/, "")}/?$`));
    await page
      .getByRole("link", { name: "HARZNET Group - Powered by Cemerlang Internet Indonesia" })
      .click();
  }
});

test("menu mobile dapat dibuka, dinavigasi, dan ditutup", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const open = page.getByRole("button", { name: "Buka menu navigasi" });
  await expect(open).toHaveAttribute("aria-expanded", "false");
  await open.click();
  const close = page.getByRole("button", { name: "Tutup menu navigasi" });
  await expect(close).toHaveAttribute("aria-expanded", "true");
  await close.click();
  await open.click();
  const mobileNavigation = page.getByRole("navigation", { name: "Navigasi seluler" });
  const services = mobileNavigation.getByRole("button", { name: "Layanan Kami" });
  await expect(services).toHaveAttribute("aria-expanded", "false");
  await services.click();
  await expect(services).toHaveAttribute("aria-expanded", "true");
  const harznetHome = mobileNavigation.getByRole("link", {
    name: "Harznet Home",
    exact: true,
  });
  await expect(harznetHome).toHaveAttribute("href", "/layanan/harznet-home/");
  await expect(
    mobileNavigation.getByRole("link", { name: "Corporate Bandwidth", exact: true }),
  ).toHaveAttribute("href", "/layanan/corporate-bandwidth/");
  await expect(
    mobileNavigation.getByRole("link", { name: "Partner", exact: true }),
  ).toHaveAttribute("href", "/layanan/partner/");
  await expect(
    mobileNavigation.getByRole("link", { name: "Managed Service", exact: true }),
  ).toHaveAttribute("href", "/layanan/managed-service/");
  await expect(
    mobileNavigation.getByRole("link", { name: "Software Corporation", exact: true }),
  ).toHaveAttribute("href", "/layanan/software-corporation/");
  await expect(
    mobileNavigation.getByRole("link", { name: "Tentang Kami", exact: true }),
  ).toHaveAttribute("href", "/tentang-kami/");
  await expect(
    mobileNavigation.getByRole("link", { name: "Informasi", exact: true }),
  ).toHaveAttribute("href", "/informasi/");
  await expect(
    mobileNavigation.getByRole("link", { name: "Kuesioner", exact: true }),
  ).toHaveAttribute("href", "/kuesioner/");
  await harznetHome.click();
  await expect(page).toHaveURL(/\/layanan\/harznet-home\/?$/);
  await expect(page.getByRole("navigation", { name: "Navigasi seluler" })).toHaveCount(0);
});
