import { expect, test, type Locator, type Page } from "@playwright/test";

const whatsappUrl = "https://wa.me/6281378888410";
const bubbleName = "Hubungi HARZNET melalui WhatsApp";

const publicRoutes = [
  "/",
  "/layanan/harznet-home/",
  "/layanan/corporate-bandwidth/",
  "/layanan/partner/",
  "/layanan/managed-service/",
  "/layanan/software-corporation/",
  "/tentang-kami/",
  "/informasi/",
  "/kuesioner/",
] as const;

async function expectWhatsAppLink(link: Locator) {
  await expect(link).toHaveAttribute("href", whatsappUrl);
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", "noopener noreferrer");
}

async function expectNoHorizontalOverflow(page: Page) {
  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
}

test("global WhatsApp bubble is accessible on every public page", async ({ page }) => {
  const pageErrors: Error[] = [];
  page.on("pageerror", (error) => pageErrors.push(error));

  for (const route of publicRoutes) {
    await page.goto(route);
    const bubble = page.getByRole("link", { name: bubbleName });
    await expect(bubble).toBeVisible();
    await expectWhatsAppLink(bubble);
  }

  expect(pageErrors).toEqual([]);
});

test("contact CTAs share the official WhatsApp destination while other actions stay internal", async ({
  page,
}) => {
  const contactCtas = [
    ["/", "Hubungi HARZNET"],
    ["/", "Hubungi Kami Sekarang"],
    ["/layanan/harznet-home/", "Konsultasikan Kebutuhan"],
    ["/layanan/corporate-bandwidth/", "Konsultasikan Kebutuhan Bisnis"],
    ["/layanan/partner/", "Konsultasikan Program Mitra"],
    ["/layanan/managed-service/", "Konsultasikan Kebutuhan"],
    ["/layanan/software-corporation/", "Konsultasikan Kebutuhan"],
    ["/tentang-kami/", "Hubungi Tim HARZNET"],
  ] as const;

  for (const [route, label] of contactCtas) {
    await page.goto(route);
    await expectWhatsAppLink(page.getByRole("link", { name: label }).first());
  }

  await page.goto("/");
  await expect(page.getByRole("link", { name: "Jelajahi layanan" })).toHaveAttribute(
    "href",
    "/#layanan",
  );
  await expect(page.locator("#contact-hub")).toBeVisible();
  await expect(page.locator("#contact-hub button[type='submit']")).toBeVisible();
});

test("bubble remains focusable and does not create mobile overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/kuesioner/");

  const bubble = page.getByRole("link", { name: bubbleName });
  await bubble.focus();
  await expect(bubble).toBeFocused();
  await expectNoHorizontalOverflow(page);

  const fallback = page.getByRole("link", { name: /Buka formulir di tab baru/i });
  await fallback.scrollIntoViewIfNeeded();
  await expect(fallback).toBeVisible();
  await expect(fallback).not.toHaveAttribute("href", whatsappUrl);
});

test("information pagination stays unobstructed by the fixed bubble", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/informasi/");

  const pagination = page.getByRole("navigation", { name: /pagination/i });
  await pagination.scrollIntoViewIfNeeded();
  await expect(pagination).toBeVisible();

  const overlaps = await page.evaluate(() => {
    const bubble = document.querySelector<HTMLAnchorElement>(
      'a[aria-label="Hubungi HARZNET melalui WhatsApp"]',
    );
    const paginationElement = document.querySelector<HTMLElement>('nav[aria-label*="agination"]');
    if (!bubble || !paginationElement) return true;
    const a = bubble.getBoundingClientRect();
    const b = paginationElement.getBoundingClientRect();
    return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
  });

  expect(overlaps).toBe(false);
  await expectNoHorizontalOverflow(page);
});
