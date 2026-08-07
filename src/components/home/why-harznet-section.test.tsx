import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WhyHarznetSection } from "@/components/home/why-harznet-section";
import { whyHarznetContent } from "@/content/home";

describe("WhyHarznetSection", () => {
  it("menampilkan heading, deskripsi, dan tiga alasan secara semantik", () => {
    render(<WhyHarznetSection />);

    const section = screen.getByRole("region", { name: whyHarznetContent.title });
    expect(section).toHaveAttribute("id", "mengapa-harznet");
    expect(within(section).getByText(whyHarznetContent.eyebrow)).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", { level: 2, name: whyHarznetContent.title }),
    ).toHaveAttribute("id", "why-harznet-heading");
    expect(within(section).getByText(whyHarznetContent.description)).toBeInTheDocument();

    const list = within(section).getByRole("list", { name: "Alasan memilih HARZNET" });
    const items = within(list).getAllByRole("listitem");
    expect(items).toHaveLength(3);
    for (const [index, item] of whyHarznetContent.items.entries()) {
      expect(within(items[index]).getByRole("heading", { name: item.title })).toBeInTheDocument();
      expect(within(items[index]).getByText(item.description)).toBeInTheDocument();
    }

    expect(within(section).queryAllByRole("img")).toHaveLength(0);
  });

  it("tidak menampilkan klaim yang belum dikonfirmasi", () => {
    const { container } = render(<WhyHarznetSection />);

    expect(container).not.toHaveTextContent(/1\s*Gbps|24\/7|kompetitor/i);
  });
});
