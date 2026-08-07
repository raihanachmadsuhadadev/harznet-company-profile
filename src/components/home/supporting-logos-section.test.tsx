import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SupportingLogosSection } from "@/components/home/supporting-logos-section";
import { supportingLogosContent } from "@/content/home";

describe("SupportingLogosSection", () => {
  it("menampilkan intro dan tepat 13 logo lokal dalam satu daftar aksesibel", () => {
    const { container } = render(<SupportingLogosSection />);

    const section = screen.getByRole("region", { name: supportingLogosContent.title });
    expect(section).toHaveAttribute("id", "ekosistem-pendukung");
    expect(within(section).getByText(supportingLogosContent.eyebrow)).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", { level: 2, name: supportingLogosContent.title }),
    ).toHaveAttribute("id", "supporting-logos-heading");
    expect(within(section).getByText(supportingLogosContent.description)).toBeInTheDocument();

    const lists = within(section).getAllByRole("list");
    expect(lists).toHaveLength(1);
    expect(lists[0]).toHaveAccessibleName("Logo ekosistem pendukung");
    expect(within(lists[0]).getAllByRole("listitem")).toHaveLength(13);

    const images = within(lists[0]).getAllByRole("img");
    expect(images).toHaveLength(13);
    for (const [index, item] of supportingLogosContent.items.entries()) {
      expect(images[index]).toHaveAttribute("alt", item.alt);
      const optimizedSource = new URL(images[index].getAttribute("src") ?? "", "http://localhost");
      expect(optimizedSource.searchParams.get("url")).toBe(item.src);
      expect(item.src).toMatch(/^\/images\/home\/supporting-logos\//);
    }

    expect(container.querySelectorAll("ul")).toHaveLength(2);
    expect(container.querySelectorAll('ul[aria-hidden="true"]')).toHaveLength(1);
  });

  it("tidak menambahkan logo, tautan, atau klaim hubungan resmi", () => {
    const { container } = render(<SupportingLogosSection />);
    const accessibleList = screen.getByRole("list", { name: "Logo ekosistem pendukung" });

    expect(within(accessibleList).getAllByRole("listitem")).toHaveLength(
      supportingLogosContent.items.length,
    );
    expect(within(accessibleList).queryAllByRole("link")).toHaveLength(0);
    expect(container).not.toHaveTextContent(/mitra resmi|partner resmi/i);
    expect(supportingLogosContent.items).toHaveLength(13);
  });
});
