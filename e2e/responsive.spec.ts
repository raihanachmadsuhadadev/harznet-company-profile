import { expect, test } from "@playwright/test";
test.use({ viewport: { width: 320, height: 720 } });
for (const path of [
  "/",
  "/tentang-kami/",
  "/informasi/",
  "/layanan/harznet-home/",
  "/layanan/corporate-bandwidth/",
  "/layanan/partner/",
  "/layanan/managed-service/",
  "/layanan/software-corporation/",
  "/informasi/mengenal-layanan-harznet",
  "/kuesioner/",
  "/kebijakan-privasi",
  "/halaman-yang-tidak-tersedia",
]) {
  test(`${path} tidak overflow horizontal`, async ({ page }) => {
    if (path === "/kuesioner/") {
      await page.route("https://docs.google.com/**", async (googleFormRoute) => {
        await googleFormRoute.fulfill({
          contentType: "text/html",
          body: "<!doctype html><title>Google Form</title>",
        });
      });
    }
    await page.goto(path);
    if (path === "/informasi/") {
      const gallery = page.getByRole("list", { name: "Gallery poster informasi HARZNET" });
      await expect(gallery.getByRole("img")).toHaveCount(2);
      await expect(gallery.getByRole("listitem")).toHaveCount(2);
      await page.getByRole("button", { name: "Buka halaman poster berikutnya" }).click();
      await expect(gallery.getByRole("img")).toHaveCount(2);
    }
    if (path === "/kuesioner/") {
      await expect(page.getByTitle("Kuesioner Kepuasan Pelanggan HARZNET")).toHaveAttribute(
        "width",
        "100%",
      );
    }
    if (path === "/") {
      const banner = page.getByRole("region", {
        name: "Konektivitas Tanpa Batas Bersama HARZNET",
      });
      await expect(banner).toBeVisible();
      await expect(banner.getByRole("link", { name: "Lihat Layanan Kami" })).toHaveAttribute(
        "href",
        "/#layanan",
      );

      const aboutSection = page.getByRole("region", {
        name: "Konektivitas yang tumbuh bersama kebutuhan Anda.",
      });
      await expect(aboutSection).toBeVisible();
      await expect(aboutSection.getByRole("listitem")).toHaveCount(6);
      await expect(
        aboutSection.getByRole("link", { name: "Selengkapnya tentang HARZNET" }),
      ).toHaveAttribute("href", "/tentang-kami");

      const promo = page.getByRole("region", {
        name: "Upgrade koneksi untuk aktivitas digital yang lebih optimal.",
      });
      await expect(promo).toBeVisible();
      await expect(promo.getByRole("link", { name: "Hubungi Kami Sekarang" })).toHaveAttribute(
        "href",
        "https://wa.me/6281378888410",
      );

      const serviceSection = page.getByRole("region", {
        name: "Satu ekosistem untuk beragam kebutuhan teknologi",
      });
      await expect(serviceSection).toBeVisible();
      await expect(serviceSection.getByRole("listitem")).toHaveCount(5);

      const whySection = page.getByRole("region", {
        name: "Dukungan konektivitas yang dirancang untuk kebutuhan digital Anda.",
      });
      await expect(whySection).toBeVisible();
      await expect(whySection.getByRole("listitem")).toHaveCount(3);

      const testimonialsSection = page.getByRole("region", {
        name: "Apa kata mereka tentang HARZNET?",
      });
      const testimonialsCarousel = testimonialsSection.getByRole("region", {
        name: "Carousel testimoni pelanggan",
      });
      await expect(testimonialsSection).toBeVisible();
      await expect(
        testimonialsCarousel.getByText("Mantaaap pelayanan HARZNET, langsung cusss."),
      ).toBeVisible();
      await expect(
        testimonialsCarousel.getByRole("button", { name: "Slide testimonial sebelumnya" }),
      ).toBeVisible();
      await expect(
        testimonialsCarousel.getByRole("button", { name: "Slide testimonial berikutnya" }),
      ).toBeVisible();

      const supportingLogosSection = page.getByRole("region", {
        name: "Terhubung dengan ekosistem industri dan infrastruktur digital.",
      });
      await expect(supportingLogosSection).toBeVisible();
      await expect(
        supportingLogosSection
          .getByRole("list", { name: "Logo ekosistem pendukung" })
          .getByRole("listitem"),
      ).toHaveCount(13);

      const contactHubSection = page.getByRole("region", {
        name: "Mari terhubung dengan tim HARZNET.",
      });
      await expect(contactHubSection).toBeVisible();
      await expect(
        contactHubSection.getByRole("textbox", { name: "Nama", exact: true }),
      ).toBeVisible();
      await expect(
        contactHubSection.getByRole("textbox", { name: "Email", exact: true }),
      ).toBeVisible();
      await expect(
        contactHubSection.getByRole("textbox", { name: "Pesan", exact: true }),
      ).toBeVisible();
      await expect(contactHubSection.getByRole("button", { name: "Kirim Pesan" })).toBeVisible();
      await expect(contactHubSection.getByText(/Perumahan Green Simangu 3/)).toBeVisible();

      const footer = page.getByRole("contentinfo");
      await expect(footer).toBeVisible();
      await expect(
        footer.getByRole("list", { name: "Media sosial HARZNET" }).getByRole("img"),
      ).toHaveCount(5);
      await expect(footer.getByRole("link", { name: "Kuesioner" })).toHaveCount(1);
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
      ),
    ).toBe(true);
  });
}
