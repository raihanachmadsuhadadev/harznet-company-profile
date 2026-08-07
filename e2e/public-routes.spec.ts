import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/tentang-kami/",
  "/informasi/",
  "/media-unduhan",
  "/kontak",
  "/kuesioner/",
  "/kebijakan-privasi",
  "/syarat-ketentuan",
  "/portal-pelanggan",
  "/layanan/harznet-home/",
  "/layanan/corporate-bandwidth/",
  "/layanan/partner/",
  "/layanan/managed-service/",
  "/layanan/software-corporation/",
  "/informasi/mengenal-layanan-harznet/",
  "/informasi/mempertimbangkan-kebutuhan-konektivitas/",
  "/informasi/peran-solusi-digital-operasional/",
];

for (const route of routes) {
  test(`${route} dapat dibuka tanpa error browser`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    if (route === "/kuesioner/") {
      await page.route("https://docs.google.com/**", async (googleFormRoute) => {
        await googleFormRoute.fulfill({
          contentType: "text/html",
          body: "<!doctype html><title>Google Form</title>",
        });
      });
    }
    const response = await page.goto(route);
    expect(response?.ok()).toBe(true);
    await expect(page.locator("h1:visible")).toHaveCount(1);
    await expect(page.getByText(/application error|internal server error/i)).toHaveCount(0);
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });
}

test("halaman HARZNET Home menampilkan paket dan CTA tanpa error atau overflow", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto("/layanan/harznet-home/");
  expect(response?.ok()).toBe(true);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Internet rumah cepat dan nyaman untuk kebutuhan seluruh keluarga.",
    }),
  ).toBeVisible();
  await expect(page.getByText("Biaya pemasangan Rp300.000")).toBeVisible();

  const packagesSection = page.getByRole("region", {
    name: "Pilih koneksi yang sesuai dengan aktivitas di rumah.",
  });
  await expect(packagesSection.getByRole("article")).toHaveCount(4);
  for (const packageName of [
    "Harznet Home",
    "Harznet Speed",
    "Harznet Velocity",
    "Harznet Hyper",
  ]) {
    await expect(packagesSection.getByRole("heading", { name: packageName })).toBeVisible();
  }
  for (const price of ["Rp140.000", "Rp195.000", "Rp225.000", "Rp350.000"]) {
    await expect(packagesSection.getByText(price)).toBeVisible();
  }
  for (const cta of await page.getByRole("link", { name: "Konsultasikan Paket" }).all()) {
    await expect(cta).toHaveAttribute("href", "https://wa.me/6281378888410");
  }
  await expect(page.getByRole("link", { name: "Hubungi Tim HARZNET" })).toHaveAttribute(
    "href",
    "https://wa.me/6281378888410",
  );
  await expect(page.getByText(/paling populer|instalasi gratis|unlimited bandwidth/i)).toHaveCount(
    0,
  );

  await page.reload();
  await expect(page.locator("h1:visible")).toHaveCount(1);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("link HARZNET Home dari homepage, dropdown, dan footer membuka route yang sama", async ({
  page,
}) => {
  const heading = page.getByRole("heading", {
    level: 1,
    name: "Internet rumah cepat dan nyaman untuk kebutuhan seluruh keluarga.",
  });

  await page.goto("/");
  const serviceSection = page.getByRole("region", {
    name: "Satu ekosistem untuk beragam kebutuhan teknologi",
  });
  const homepageLink = serviceSection.getByRole("link", { name: "Pelajari Harznet Home" });
  await expect(homepageLink).toHaveAttribute("href", "/layanan/harznet-home/");
  await homepageLink.click();
  await expect(page).toHaveURL(/\/layanan\/harznet-home\/?$/);
  await expect(heading).toBeVisible();

  await page.goto("/");
  const mainNavigation = page.getByRole("navigation", { name: "Navigasi utama" });
  await mainNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const dropdownLink = page.getByRole("banner").getByRole("link", { name: /^Harznet Home/ });
  await expect(dropdownLink).toHaveAttribute("href", "/layanan/harznet-home/");
  await dropdownLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const footerLink = page
    .getByRole("contentinfo")
    .getByRole("navigation", { name: "Layanan footer" })
    .getByRole("link", { name: "Harznet Home" });
  await expect(footerLink).toHaveAttribute("href", "/layanan/harznet-home/");
  await footerLink.click();
  await expect(heading).toBeVisible();
});

test("halaman Corporate Bandwidth menampilkan registrasi dan 14 pilihan tanpa error", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto("/layanan/corporate-bandwidth/");
  expect(response?.ok()).toBe(true);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Konektivitas berkapasitas tinggi untuk operasional bisnis yang terus berkembang.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Biaya registrasi satu kali" })).toBeVisible();
  await expect(page.getByText("Rp5.000.000")).toBeVisible();

  const packagesSection = page.getByRole("region", {
    name: "Pilih kapasitas koneksi sesuai kebutuhan operasional.",
  });
  const categories = packagesSection.getByRole("article");
  await expect(categories).toHaveCount(2);
  const innercity = categories.nth(0);
  const metro = categories.nth(1);
  await expect(innercity.getByRole("heading", { name: "Internet Innercity SOHO" })).toBeVisible();
  await expect(metro.getByRole("heading", { name: "Internet Broadband + Metro" })).toBeVisible();
  await expect(innercity.getByRole("listitem")).toHaveCount(5);
  await expect(metro.getByRole("listitem")).toHaveCount(9);
  await expect(innercity.getByText("25 Mbps", { exact: true })).toBeVisible();
  await expect(metro.getByText("500 Mbps", { exact: true })).toBeVisible();
  await expect(innercity.getByText("Rp450.000", { exact: true })).toBeVisible();
  await expect(metro.getByText("Rp8.000.000", { exact: true })).toBeVisible();

  for (const cta of await page.getByRole("link", { name: "Konsultasikan Layanan Ini" }).all()) {
    await expect(cta).toHaveAttribute("href", "https://wa.me/6281378888410");
  }
  await expect(page.getByRole("link", { name: "Hubungi Tim HARZNET" })).toHaveAttribute(
    "href",
    "https://wa.me/6281378888410",
  );
  await page.reload();
  await expect(page.locator("h1:visible")).toHaveCount(1);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("link Corporate Bandwidth dari homepage, dropdown, mobile, dan footer membuka route yang sama", async ({
  page,
}) => {
  const heading = page.getByRole("heading", {
    level: 1,
    name: "Konektivitas berkapasitas tinggi untuk operasional bisnis yang terus berkembang.",
  });

  await page.goto("/");
  const serviceSection = page.getByRole("region", {
    name: "Satu ekosistem untuk beragam kebutuhan teknologi",
  });
  const homepageLink = serviceSection.getByRole("link", {
    name: "Pelajari Corporate Bandwidth",
  });
  await expect(homepageLink).toHaveAttribute("href", "/layanan/corporate-bandwidth/");
  await homepageLink.click();
  await expect(page).toHaveURL(/\/layanan\/corporate-bandwidth\/?$/);
  await expect(heading).toBeVisible();

  await page.goto("/");
  const mainNavigation = page.getByRole("navigation", { name: "Navigasi utama" });
  await mainNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const dropdownLink = page.getByRole("banner").getByRole("link", { name: /^Corporate Bandwidth/ });
  await expect(dropdownLink).toHaveAttribute("href", "/layanan/corporate-bandwidth/");
  await dropdownLink.click();
  await expect(heading).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Buka menu navigasi" }).click();
  const mobileNavigation = page.getByRole("navigation", { name: "Navigasi seluler" });
  await mobileNavigation.getByRole("button", { name: "Layanan Kami" }).click();
  const mobileLink = mobileNavigation.getByRole("link", {
    name: "Corporate Bandwidth",
    exact: true,
  });
  await expect(mobileLink).toHaveAttribute("href", "/layanan/corporate-bandwidth/");
  await mobileLink.click();
  await expect(heading).toBeVisible();

  await page.goto("/");
  const footerLink = page
    .getByRole("contentinfo")
    .getByRole("navigation", { name: "Layanan footer" })
    .getByRole("link", { name: "Corporate Bandwidth" });
  await expect(footerLink).toHaveAttribute("href", "/layanan/corporate-bandwidth/");
  await footerLink.click();
  await expect(heading).toBeVisible();
});

test("route tidak tersedia menampilkan halaman 404 yang aman", async ({ page }) => {
  const response = await page.goto("/halaman-yang-tidak-tersedia");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Halaman tidak ditemukan" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Kembali ke beranda", exact: true })).toHaveAttribute(
    "href",
    "/",
  );
  await expect(page.getByText(/stack trace|digest/i)).toHaveCount(0);
});

test("slider hero dapat dikendalikan tanpa error atau overflow pada desktop", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const slider = page.getByRole("region", { name: "Slider foto HARZNET" });
  await expect(slider).toBeVisible();
  await expect(slider.getByRole("img", { name: "Materi promosi Harznet Home" })).toBeVisible();
  await expect(slider.getByRole("status")).toContainText("Slide 1 dari 3");

  await slider.getByRole("button", { name: "Slide berikutnya" }).click();
  await expect(
    slider.getByRole("img", { name: "Materi promosi Corporate Bandwidth HARZNET" }),
  ).toBeVisible();
  await expect(slider.getByRole("status")).toContainText("Slide 2 dari 3");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("homepage menampilkan banner konektivitas tanpa error atau overflow", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const banner = page.getByRole("region", {
    name: "Konektivitas Tanpa Batas Bersama HARZNET",
  });
  await expect(banner).toBeVisible();
  await expect(
    banner.getByRole("heading", { name: "Konektivitas Tanpa Batas Bersama HARZNET" }),
  ).toBeVisible();
  await expect(banner.getByRole("link", { name: "Lihat Layanan Kami" })).toHaveAttribute(
    "href",
    "/#layanan",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("homepage menampilkan bagian Tentang HARZNET tanpa error atau overflow", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const aboutSection = page.getByRole("region", {
    name: "Konektivitas yang tumbuh bersama kebutuhan Anda.",
  });
  await expect(aboutSection).toBeVisible();
  await expect(
    aboutSection.getByRole("heading", {
      name: "Konektivitas yang tumbuh bersama kebutuhan Anda.",
    }),
  ).toBeVisible();
  await expect(
    aboutSection.getByRole("link", { name: "Selengkapnya tentang HARZNET" }),
  ).toHaveAttribute("href", "/tentang-kami");
  await expect(aboutSection.getByRole("listitem")).toHaveCount(6);
  await expect(
    page.getByRole("heading", {
      name: "HARZNET, bagian dari PT Cemerlang Internet Indonesia",
    }),
  ).toHaveCount(0);
  await expect(page.getByText("Identitas", { exact: true })).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("homepage menampilkan promo koneksi tanpa error atau overflow", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const promo = page.getByRole("region", {
    name: "Upgrade koneksi untuk aktivitas digital yang lebih optimal.",
  });
  await expect(promo).toBeVisible();
  await expect(
    promo.getByRole("heading", {
      name: "Upgrade koneksi untuk aktivitas digital yang lebih optimal.",
    }),
  ).toBeVisible();
  await expect(promo.getByRole("link", { name: "Hubungi Kami Sekarang" })).toHaveAttribute(
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

test("homepage menampilkan lima layanan dan anchor layanan tetap berfungsi", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/#layanan");

  const serviceSection = page.getByRole("region", {
    name: "Satu ekosistem untuk beragam kebutuhan teknologi",
  });
  await expect(serviceSection).toBeVisible();
  await expect(
    serviceSection.getByRole("heading", {
      name: "Satu ekosistem untuk beragam kebutuhan teknologi",
    }),
  ).toBeVisible();

  const services = [
    ["Harznet Home", "/layanan/harznet-home/"],
    ["Corporate Bandwidth", "/layanan/corporate-bandwidth/"],
    ["Partner", "/layanan/partner/"],
    ["Managed Service", "/layanan/managed-service/"],
    ["Software Corporation", "/layanan/software-corporation/"],
  ];
  await expect(serviceSection.getByRole("listitem")).toHaveCount(5);
  for (const [name, href] of services) {
    await expect(serviceSection.getByRole("link", { name: `Pelajari ${name}` })).toHaveAttribute(
      "href",
      href,
    );
  }

  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("homepage menampilkan alasan memilih HARZNET dalam urutan section yang benar", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const whySection = page.getByRole("region", {
    name: "Dukungan konektivitas yang dirancang untuk kebutuhan digital Anda.",
  });
  await expect(whySection).toBeVisible();
  await expect(
    whySection.getByRole("heading", {
      name: "Dukungan konektivitas yang dirancang untuk kebutuhan digital Anda.",
    }),
  ).toBeVisible();
  await expect(whySection.getByRole("listitem")).toHaveCount(3);
  for (const title of ["Kecepatan dan stabilitas", "Dukungan responsif", "Keamanan jaringan"]) {
    await expect(whySection.getByRole("heading", { name: title })).toBeVisible();
  }

  const sectionOrder = await page
    .locator("main section")
    .evaluateAll((sections) =>
      sections
        .filter((section) => ["keunggulan", "mengapa-harznet", "testimoni"].includes(section.id))
        .map((section) => section.id),
    );
  expect(sectionOrder).toEqual(["keunggulan", "mengapa-harznet", "testimoni"]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("homepage carousel testimoni dapat dinavigasi tanpa error atau overflow", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const section = page.getByRole("region", { name: "Apa kata mereka tentang HARZNET?" });
  const carousel = section.getByRole("region", { name: "Carousel testimoni pelanggan" });
  await expect(section).toBeVisible();
  await expect(carousel.getByText("Mantaaap pelayanan HARZNET, langsung cusss.")).toBeVisible();
  await expect(carousel.getByText("Nurman", { exact: true })).toBeVisible();
  await expect(carousel.getByRole("status")).toContainText("Testimoni 1 dari 3");

  await carousel.getByRole("button", { name: "Slide testimonial berikutnya" }).click();
  await expect(
    carousel.getByText("Sinyalnya cepat banget. Buat game dan streaming lancar!"),
  ).toBeVisible();
  await expect(carousel.getByRole("status")).toContainText("Testimoni 2 dari 3");

  await carousel.getByRole("button", { name: "Slide testimonial sebelumnya" }).click();
  await expect(carousel.getByText("Mantaaap pelayanan HARZNET, langsung cusss.")).toBeVisible();
  await expect(carousel.getByRole("status")).toContainText("Testimoni 1 dari 3");

  const sectionOrder = await page
    .locator("main section")
    .evaluateAll((sections) =>
      sections
        .filter((currentSection) =>
          ["mengapa-harznet", "testimoni", "ekosistem-pendukung"].includes(currentSection.id),
        )
        .map((currentSection) => currentSection.id),
    );
  expect(sectionOrder).toEqual(["mengapa-harznet", "testimoni", "ekosistem-pendukung"]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("homepage menampilkan slider logo ekosistem pendukung dalam urutan yang benar", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const section = page.getByRole("region", {
    name: "Terhubung dengan ekosistem industri dan infrastruktur digital.",
  });
  await expect(section).toBeVisible();
  await expect(
    section.getByRole("heading", {
      name: "Terhubung dengan ekosistem industri dan infrastruktur digital.",
    }),
  ).toBeVisible();

  const logoList = section.getByRole("list", { name: "Logo ekosistem pendukung" });
  await expect(logoList.getByRole("listitem")).toHaveCount(13);
  for (const name of ["Logo APJII", "Logo CBN", "Logo Telkom Indonesia", "Logo Indosat"]) {
    await expect(logoList.getByRole("img", { name })).toBeAttached();
  }

  const sectionOrder = await page
    .locator("main section")
    .evaluateAll((sections) =>
      sections
        .filter((currentSection) =>
          ["testimoni", "ekosistem-pendukung", "contact-hub"].includes(currentSection.id),
        )
        .map((currentSection) => currentSection.id),
    );
  expect(sectionOrder).toEqual(["testimoni", "ekosistem-pendukung", "contact-hub"]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("homepage menampilkan Contact Hub tanpa mengirim pesan nyata", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const section = page.getByRole("region", { name: "Mari terhubung dengan tim HARZNET." });
  await expect(section).toBeVisible();
  await expect(
    section.getByRole("heading", { name: "Mari terhubung dengan tim HARZNET." }),
  ).toBeVisible();
  await section.getByRole("textbox", { name: "Nama", exact: true }).fill("Pengunjung HARZNET");
  await section.getByRole("textbox", { name: "Email", exact: true }).fill("visitor@example.test");
  await section
    .getByRole("textbox", { name: "Pesan", exact: true })
    .fill("Saya ingin berkonsultasi mengenai layanan HARZNET.");
  await expect(section.getByRole("button", { name: "Kirim Pesan" })).toBeEnabled();

  await expect(section.getByText(/Perumahan Green Simangu 3/)).toBeVisible();
  await expect(section.getByRole("link", { name: /Email:/ })).toHaveAttribute(
    "href",
    "mailto:customer_service@harznet.com",
  );
  await expect(section.getByRole("link", { name: /Telepon:/ })).toHaveAttribute(
    "href",
    "tel:+6281378888410",
  );
  await expect(
    section
      .getByTitle("Lokasi HARZNET di Google Maps")
      .or(section.getByText("Peta lokasi belum dikonfigurasi.")),
  ).toBeVisible();

  const sectionOrder = await page
    .locator("main section")
    .evaluateAll((sections) =>
      sections
        .filter((currentSection) =>
          ["ekosistem-pendukung", "contact-hub"].includes(currentSection.id),
        )
        .map((currentSection) => currentSection.id),
    );
  expect(sectionOrder).toEqual(["ekosistem-pendukung", "contact-hub"]);
  const lastHomepageSectionId = await page
    .locator("main section")
    .evaluateAll((sections) => sections[sections.length - 1]?.id);
  expect(lastHomepageSectionId).toBe("contact-hub");
  await expect(page.getByRole("contentinfo")).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Mari mulai percakapan tentang kebutuhan digital Anda",
    }),
  ).toHaveCount(0);
  await expect(page.locator("section#kontak")).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("footer global menampilkan navigasi compact dan placeholder sosial tanpa URL dummy", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  const footer = page.getByRole("contentinfo");
  await expect(footer).toBeVisible();
  await expect(page.locator("main + footer")).toBeVisible();
  await expect(footer.getByText("HARZNET", { exact: true })).toBeVisible();
  await expect(footer.getByText("PT Cemerlang Internet Indonesia", { exact: true })).toBeVisible();

  for (const navigationName of ["Navigasi footer", "Layanan footer", "Informasi footer"]) {
    await expect(footer.getByRole("navigation", { name: navigationName })).toBeVisible();
  }

  const socialList = footer.getByRole("list", { name: "Media sosial HARZNET" });
  for (const label of ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn"]) {
    await expect(
      socialList.getByRole("img", { name: `${label} HARZNET — tautan belum tersedia` }),
    ).toBeVisible();
    await expect(socialList.getByRole("link", { name: `Buka ${label} HARZNET` })).toHaveCount(0);
  }

  await expect(footer.getByRole("link", { name: "Kuesioner" })).toHaveCount(1);
  await expect(footer.getByRole("link", { name: "Kebijakan Privasi" })).toHaveAttribute(
    "href",
    "/kebijakan-privasi",
  );
  await expect(footer.getByRole("link", { name: "Syarat & Ketentuan" })).toHaveAttribute(
    "href",
    "/syarat-ketentuan",
  );
  await expect(footer.locator('a[href="#"], a[href^="javascript:"]')).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});
