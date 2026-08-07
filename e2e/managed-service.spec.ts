import { expect, test } from "@playwright/test";

const managedServiceHeading =
  "Kelola performa, keamanan, dan keberlanjutan jaringan secara lebih terarah.";

test("halaman Managed Service menampilkan cakupan lengkap tanpa error atau overflow", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto("/layanan/managed-service/");
  expect(response?.ok()).toBe(true);
  await expect(page.getByRole("heading", { level: 1, name: managedServiceHeading })).toBeVisible();
  await expect(page.locator("[data-managed-capability]")).toHaveCount(8);

  const flow = page.getByRole("list", { name: "Siklus Managed Service" });
  await expect(flow.getByRole("listitem")).toHaveCount(4);
  await expect(
    page.getByRole("heading", { name: "Komitmen layanan yang terukur dan transparan." }),
  ).toBeVisible();
  for (const label of ["Konsultasikan Kebutuhan", "Hubungi Tim HARZNET"]) {
    await expect(page.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      "https://wa.me/6281378888410",
    );
  }

  await page.reload();
  await expect(page.getByRole("heading", { level: 1, name: managedServiceHeading })).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("seluruh navigasi membuka route Managed Service yang sama", async ({ page }) => {
  const heading = page.getByRole("heading", { level: 1, name: managedServiceHeading });

  await page.goto("/#layanan");
  const homepageLink = page
    .getByRole("region", { name: "Satu ekosistem untuk beragam kebutuhan teknologi" })
    .getByRole("link", { name: "Pelajari Managed Service" });
  await expect(homepageLink).toHaveAttribute("href", "/layanan/managed-service/");
  await homepageLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const mainNavigation = page.getByRole("navigation", { name: "Navigasi utama" });
  await mainNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const desktopLink = page.getByRole("banner").getByRole("link", { name: /^Managed Service/ });
  await expect(desktopLink).toHaveAttribute("href", "/layanan/managed-service/");
  await desktopLink.click();
  await expect(heading).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  const mobileNavigation = page.getByRole("navigation", { name: "Navigasi seluler" });
  await mobileNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const mobileLink = mobileNavigation.getByRole("link", {
    name: "Managed Service",
    exact: true,
  });
  await expect(mobileLink).toHaveAttribute("href", "/layanan/managed-service/");
  await mobileLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const footerLink = page
    .getByRole("contentinfo")
    .getByRole("navigation", { name: "Layanan footer" })
    .getByRole("link", { name: "Managed Service", exact: true });
  await expect(footerLink).toHaveAttribute("href", "/layanan/managed-service/");
  await footerLink.click();
  await expect(heading).toBeVisible();
});
