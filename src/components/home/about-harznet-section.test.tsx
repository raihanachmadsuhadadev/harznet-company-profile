import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AboutHarznetSection } from "@/components/home/about-harznet-section";
import { aboutHarznetContent } from "@/content/home";

describe("AboutHarznetSection", () => {
  it("menampilkan heading, dua paragraf, enam keunggulan, dan CTA yang benar", () => {
    render(<AboutHarznetSection />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: aboutHarznetContent.title,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "about-harznet-heading");

    for (const paragraph of aboutHarznetContent.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }

    const featureList = screen.getByRole("list", { name: "Keunggulan HARZNET" });
    expect(featureList).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(6);
    for (const feature of aboutHarznetContent.features) {
      expect(screen.getByText(feature)).toBeInTheDocument();
    }

    expect(
      screen.getByRole("link", { name: aboutHarznetContent.primaryAction.label }),
    ).toHaveAttribute("href", "/tentang-kami");
  });

  it("tidak menampilkan klaim statistik atau ketersediaan yang tidak disetujui", () => {
    const { container } = render(<AboutHarznetSection />);

    expect(container).not.toHaveTextContent(
      /24\/7|uptime|\d+\s+pelanggan|seluruh wilayah|SLA|harga/i,
    );
  });
});
