import { expect, test } from "@playwright/test";
test("homepage memiliki metadata SEO", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/\S+/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /HARZNET/i);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /^https:\/\/harznet\.com\/?$/,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /\S+/);
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    /^https:\/\/harznet\.com\/?$/,
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary");
});
test("Tentang Kami memiliki metadata perusahaan yang spesifik", async ({ page }) => {
  await page.goto("/tentang-kami/");
  await expect(page).toHaveTitle("Tentang PT Cemerlang Internet Indonesia | HARZNET");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Kenali PT Cemerlang Internet Indonesia, perusahaan penyedia layanan HARZNET yang mendukung kebutuhan konektivitas rumah, bisnis, organisasi, dan perusahaan.",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://harznet.com/tentang-kami",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://harznet.com/tentang-kami",
  );
});
test("Informasi memiliki metadata gallery poster yang spesifik", async ({ page }) => {
  await page.goto("/informasi/");
  await expect(page).toHaveTitle("Informasi HARZNET | Layanan dan Program");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Lihat poster informasi layanan internet rumah, konektivitas bisnis, Dedicated Internet, dan program kemitraan HARZNET.",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://harznet.com/informasi",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://harznet.com/informasi",
  );
});
test("Kuesioner memiliki metadata kepuasan pelanggan yang spesifik", async ({ page }) => {
  await page.route("https://docs.google.com/**", async (googleFormRoute) => {
    await googleFormRoute.fulfill({
      contentType: "text/html",
      body: "<!doctype html><title>Google Form</title>",
    });
  });
  await page.goto("/kuesioner/");
  await expect(page).toHaveTitle("Kuesioner Kepuasan Pelanggan HARZNET");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Isi kuesioner kepuasan pelanggan HARZNET dan berikan penilaian mengenai kualitas layanan internet serta pelayanan yang diterima.",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://harznet.com/kuesioner",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://harznet.com/kuesioner",
  );
});
test("detail memiliki canonical unik", async ({ page }) => {
  for (const path of [
    "/layanan/harznet-home",
    "/layanan/corporate-bandwidth",
    "/layanan/partner",
    "/layanan/managed-service",
    "/layanan/software-corporation",
    "/informasi/mengenal-layanan-harznet",
  ]) {
    await page.goto(path);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://harznet.com${path}`,
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      `https://harznet.com${path}`,
    );
  }
});
test("HARZNET Home memiliki metadata layanan rumah yang spesifik", async ({ page }) => {
  await page.goto("/layanan/harznet-home/");
  await expect(page).toHaveTitle("HARZNET Home | Internet Rumah Fiber HARZNET");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Temukan pilihan paket HARZNET Home berbasis Fiber To The Home untuk kebutuhan internet keluarga, streaming, belajar, bekerja, dan aktivitas digital di rumah.",
  );
});
test("Corporate Bandwidth memiliki metadata layanan bisnis yang spesifik", async ({ page }) => {
  await page.goto("/layanan/corporate-bandwidth/");
  await expect(page).toHaveTitle("Corporate Bandwidth | Koneksi Bisnis HARZNET");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Temukan pilihan HARZNET Corporate Bandwidth untuk kebutuhan konektivitas perusahaan, komunikasi data antar lokasi, layanan cloud, dan operasional bisnis.",
  );
});
test("HARZNET Partner memiliki metadata program kemitraan yang spesifik", async ({ page }) => {
  await page.goto("/layanan/partner/");
  await expect(page).toHaveTitle("HARZNET Partner | Program Kemitraan Jaringan");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Temukan program HARZNET Partner dengan pilihan Dedicated dan Metro untuk operator RT/RW Net serta penyedia layanan internet yang membutuhkan kapasitas jaringan hingga 1 Gbps.",
  );
});
test("Managed Service memiliki metadata pengelolaan jaringan yang spesifik", async ({ page }) => {
  await page.goto("/layanan/managed-service/");
  await expect(page).toHaveTitle("Managed Service | Pengelolaan Jaringan HARZNET");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Kenali HARZNET Managed Service untuk pemantauan, pemeliharaan, keamanan, pengelolaan infrastruktur, dan pengembangan operasional jaringan.",
  );
});
test("Software Corporation memiliki metadata solusi digital yang spesifik", async ({ page }) => {
  await page.goto("/layanan/software-corporation/");
  await expect(page).toHaveTitle("Software Corporation | Solusi Digital HARZNET");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Kenali layanan HARZNET Software Corporation untuk pengembangan aplikasi web, mobile, sistem enterprise, serta integrasi AI dan IoT sesuai kebutuhan bisnis.",
  );
});
test("portal memakai noindex", async ({ page }) => {
  await page.goto("/portal-pelanggan");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});
test("sitemap dan robots valid", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const xml = await sitemap.text();
  expect(xml).toContain("https://harznet.com/layanan/harznet-home");
  expect(xml).toContain("https://harznet.com/tentang-kami");
  expect(xml).toContain("https://harznet.com/layanan/partner");
  expect(xml).toContain("https://harznet.com/layanan/managed-service");
  expect(xml).toContain("https://harznet.com/layanan/software-corporation");
  expect(xml).toContain("https://harznet.com/informasi/mengenal-layanan-harznet");
  expect(xml).toContain("https://harznet.com/kuesioner");
  expect(xml).not.toContain("/portal-pelanggan");
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap: https://harznet.com/sitemap.xml");
});
