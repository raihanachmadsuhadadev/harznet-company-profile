import { describe, expect, it } from "vitest";
import { informationArticles } from "@/content/information";
describe("informationArticles", () => {
  it("memiliki artikel typed yang aman", () => {
    expect(informationArticles.length).toBeGreaterThanOrEqual(3);
    expect(new Set(informationArticles.map((a) => a.slug)).size).toBe(informationArticles.length);
    for (const a of informationArticles) {
      expect(a.metadata.title).not.toHaveLength(0);
      expect(a.metadata.description).not.toHaveLength(0);
      for (const s of a.sections) {
        expect(s.heading).not.toHaveLength(0);
        expect(s.paragraphs.length).toBeGreaterThan(0);
      }
    }
  });
});
