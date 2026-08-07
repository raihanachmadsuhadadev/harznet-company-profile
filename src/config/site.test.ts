import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";
describe("siteConfig", () => {
  it("menggunakan origin resmi", () => {
    expect(siteConfig.url).toBe("https://harznet.com");
    expect(siteConfig.url.endsWith("/")).toBe(false);
    expect(siteConfig.locale).toBe("id_ID");
    expect(siteConfig.language).toBe("id");
  });
});
