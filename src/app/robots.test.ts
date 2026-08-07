import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
describe("robots", () => {
  it("mengizinkan publik dan menunjuk sitemap", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://harznet.com/sitemap.xml",
    });
  });
});
