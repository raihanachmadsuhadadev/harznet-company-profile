import { describe, expect, it } from "vitest";

import { serviceDetails } from "@/content/services";

describe("serviceDetails", () => {
  it("menyediakan lima layanan dengan slug, href, dan metadata yang unik", () => {
    expect(serviceDetails).toHaveLength(5);

    const slugs = serviceDetails.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(serviceDetails.length);

    for (const service of serviceDetails) {
      const usesDedicatedPage = [
        "harznet-home",
        "corporate-bandwidth",
        "partner",
        "managed-service",
        "software-corporation",
      ].includes(service.slug);
      expect(service.href).toBe(`/layanan/${service.slug}${usesDedicatedPage ? "/" : ""}`);
      expect(service.metadata.title).not.toHaveLength(0);
      expect(service.metadata.description).not.toHaveLength(0);
    }
  });
});
