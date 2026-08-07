import { expect, test } from "@playwright/test";

test("halaman Tentang Kami menampilkan profil perusahaan tanpa error atau overflow", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/tentang-kami/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Membangun konektivitas untuk mendukung kebutuhan digital masyarakat dan bisnis.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("region", {
      name: "Konektivitas yang dirancang untuk berbagai kebutuhan digital.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("region", {
      name: "Visi dan misi untuk pertumbuhan konektivitas digital.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("region", {
      name: "Bertumbuh dari Cirebon untuk mendukung kebutuhan konektivitas.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("region", {
      name: "Fokus pada layanan, inovasi, dan perkembangan kebutuhan pelanggan.",
    }),
  ).toBeVisible();
  await expect(page.getByText("1 Februari 2021", { exact: false })).toBeVisible();
  await expect(
    page.getByRole("list", { name: "Enam misi perusahaan" }).getByRole("listitem"),
  ).toHaveCount(6);
  await expect(
    page.getByRole("list", { name: "Empat komitmen perusahaan" }).getByRole("listitem"),
  ).toHaveCount(4);
  await expect(page.getByRole("link", { name: "Hubungi Tim HARZNET" }).last()).toHaveAttribute(
    "href",
    "https://wa.me/6281378888410",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("route Tentang Kami aman saat direct refresh", async ({ page }) => {
  await page.goto("/tentang-kami/");
  await page.reload();
  await expect(
    page.getByText("PT Cemerlang Internet Indonesia", { exact: true }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Visi dan misi untuk pertumbuhan konektivitas digital." }),
  ).toBeVisible();
});

test("navbar desktop, mobile, footer, dan breadcrumb memakai route Tentang Kami final", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("banner").getByRole("link", { name: "Tentang Kami", exact: true }),
  ).toHaveAttribute("href", "/tentang-kami/");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Tentang Kami", exact: true }),
  ).toHaveAttribute("href", "/tentang-kami/");

  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  await expect(
    page
      .getByRole("navigation", { name: "Navigasi seluler" })
      .getByRole("link", { name: "Tentang Kami", exact: true }),
  ).toHaveAttribute("href", "/tentang-kami/");

  await page.goto("/tentang-kami/");
  await expect(
    page.getByRole("navigation", { name: "Breadcrumb" }).getByRole("link", {
      name: "Tentang Kami",
      exact: true,
    }),
  ).toHaveAttribute("href", "/tentang-kami/");
});
