import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
describe("sitemap", () => {
  it("memuat URL publik unik pada origin resmi", () => {
    const urls = sitemap().map((x) => x.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls).not.toContain("https://harznet.com/portal-pelanggan");
    expect(urls).toContain("https://harznet.com/tentang-kami");
    expect(urls.filter((x) => x.includes("/layanan/")).length).toBe(5);
    expect(urls.filter((x) => x.includes("/informasi/")).length).toBe(3);
    for (const url of urls) expect(url.startsWith("https://harznet.com")).toBe(true);
  });
});
