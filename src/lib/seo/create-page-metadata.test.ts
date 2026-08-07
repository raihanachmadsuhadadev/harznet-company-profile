import { describe, expect, it } from "vitest";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
describe("createPageMetadata", () => {
  it("membuat metadata lengkap", () => {
    const m = createPageMetadata({ title: "Halaman", description: "Deskripsi", path: "/halaman" });
    expect(m.alternates?.canonical).toBe("https://harznet.com/halaman");
    expect(m.openGraph?.url).toBe("https://harznet.com/halaman");
    expect(m.twitter).toBeTruthy();
  });
  it("mendukung noIndex", () => {
    const m = createPageMetadata({
      title: "Portal",
      description: "Portal",
      path: "/portal",
      noIndex: true,
    });
    expect(m.robots).toMatchObject({ index: false, follow: true });
  });
});
