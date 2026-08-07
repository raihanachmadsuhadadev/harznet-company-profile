import { expect, test } from "@playwright/test";

const posters = [
  {
    alt: "Poster paket Dedicated Internet HARZNET",
    href: "/layanan/corporate-bandwidth/",
  },
  {
    alt: "Poster paket Dedicated Kemitraan HARZNET",
    href: "/layanan/partner/",
  },
  {
    alt: "Poster layanan Corporate Bandwidth HARZNET",
    href: "/layanan/corporate-bandwidth/",
  },
  {
    alt: "Poster promo Kemerdekaan HARZNET Home",
    href: "/layanan/harznet-home/",
  },
] as const;

const articles = [
  ["Mengenal layanan HARZNET", "/informasi/mengenal-layanan-harznet/"],
  [
    "Mempertimbangkan kebutuhan konektivitas rumah dan bisnis",
    "/informasi/mempertimbangkan-kebutuhan-konektivitas/",
  ],
  [
    "Peran solusi digital dalam mendukung operasional",
    "/informasi/peran-solusi-digital-operasional/",
  ],
] as const;

test("halaman Informasi hanya memuat dua poster aktif tanpa error atau overflow", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/informasi/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Informasi layanan dan program HARZNET.",
    }),
  ).toBeVisible();
  const gallery = page.getByRole("list", { name: "Gallery poster informasi HARZNET" });
  await expect(gallery.getByRole("img")).toHaveCount(2);
  for (const poster of posters.slice(0, 2)) {
    const image = gallery.getByRole("img", { name: poster.alt });
    await expect(image).toBeVisible();
    await expect(image.locator("xpath=ancestor::a")).toHaveAttribute("href", poster.href);
  }
  for (const poster of posters.slice(2)) {
    await expect(gallery.getByRole("img", { name: poster.alt })).toHaveCount(0);
  }
  await expect(page.getByRole("button", { name: "Buka halaman poster sebelumnya" })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Buka halaman poster 1" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(page.getByText("Informasi Unggulan")).toHaveCount(0);
  await expect(page.getByText("Artikel dan Panduan")).toHaveCount(0);
  await expect(page.getByText("Baca Selengkapnya")).toHaveCount(0);
  await expect(page.getByText("Hubungi Tim HARZNET")).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("pagination berpindah antara dua kelompok poster", async ({ page }) => {
  await page.goto("/informasi/");

  const gallery = page.getByRole("list", { name: "Gallery poster informasi HARZNET" });
  const previous = page.getByRole("button", { name: "Buka halaman poster sebelumnya" });
  const next = page.getByRole("button", { name: "Buka halaman poster berikutnya" });

  await next.click();
  await expect(gallery.getByRole("img")).toHaveCount(2);
  for (const poster of posters.slice(2)) {
    await expect(gallery.getByRole("img", { name: poster.alt })).toBeVisible();
  }
  for (const poster of posters.slice(0, 2)) {
    await expect(gallery.getByRole("img", { name: poster.alt })).toHaveCount(0);
  }
  await expect(next).toBeDisabled();
  await expect(previous).toBeEnabled();
  await expect(page.getByRole("button", { name: "Buka halaman poster 2" })).toHaveAttribute(
    "aria-current",
    "page",
  );

  await previous.click();
  await expect(gallery.getByRole("img", { name: posters[0].alt })).toBeVisible();
  await expect(page.getByRole("button", { name: "Buka halaman poster 1" })).toHaveAttribute(
    "aria-current",
    "page",
  );
});

test("setiap poster membuka route layanan yang benar", async ({ page }) => {
  for (const [index, poster] of posters.entries()) {
    await page.goto("/informasi/");
    if (index >= 2) {
      await page.getByRole("button", { name: "Buka halaman poster 2" }).click();
    }
    const link = page.getByRole("link", { name: poster.alt });
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${poster.href.replace(/\/$/, "")}/?$`));
  }
});

test("route artikel detail existing tetap dapat dibuka", async ({ page }) => {
  for (const [title, href] of articles) {
    await page.goto(href);
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
  }
});

test("route Informasi aman saat direct refresh", async ({ page }) => {
  await page.goto("/informasi/");
  await page.reload();
  await expect(
    page.getByRole("heading", { level: 1, name: "Informasi layanan dan program HARZNET." }),
  ).toBeVisible();
  const gallery = page.getByRole("list", { name: "Gallery poster informasi HARZNET" });
  await expect(gallery).toBeVisible();
  await expect(gallery.getByRole("img")).toHaveCount(2);
  await expect(page.getByRole("button", { name: "Buka halaman poster 1" })).toHaveAttribute(
    "aria-current",
    "page",
  );
});

test("gallery satu kolom pada 320px dan tidak overflow horizontal", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/informasi/");

  const items = page
    .getByRole("list", { name: "Gallery poster informasi HARZNET" })
    .getByRole("listitem");
  await expect(items).toHaveCount(2);
  const boxes = await items.evaluateAll((elements) =>
    elements.map((element) => element.getBoundingClientRect()),
  );
  expect(new Set(boxes.map((box) => Math.round(box.left))).size).toBe(1);
  await page.getByRole("button", { name: "Buka halaman poster berikutnya" }).click();
  await expect(items).toHaveCount(2);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
});

test("navbar desktop, mobile, footer, dan breadcrumb memakai route Informasi final", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("banner").getByRole("link", { name: "Informasi", exact: true }),
  ).toHaveAttribute("href", "/informasi/");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Informasi", exact: true }),
  ).toHaveAttribute("href", "/informasi/");

  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  await expect(
    page
      .getByRole("navigation", { name: "Navigasi seluler" })
      .getByRole("link", { name: "Informasi", exact: true }),
  ).toHaveAttribute("href", "/informasi/");

  await page.goto("/informasi/");
  await expect(
    page.getByRole("navigation", { name: "Breadcrumb" }).getByRole("link", {
      name: "Informasi",
      exact: true,
    }),
  ).toHaveAttribute("href", "/informasi/");
});
