import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SoftwareCorporationPage } from "@/components/services/software-corporation/software-corporation-page";
import { softwareCorporationPageContent } from "@/content/software-corporation";

describe("SoftwareCorporationPage", () => {
  it("menampilkan hero dan CTA Software Corporation", () => {
    render(<SoftwareCorporationPage content={softwareCorporationPageContent} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Bangun solusi digital yang sesuai dengan kebutuhan bisnis Anda.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Jelajahi Layanan" })).toHaveAttribute(
      "href",
      "#layanan-software-corporation",
    );
    for (const label of ["Konsultasikan Kebutuhan", "Hubungi Tim HARZNET"]) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", "https://wa.me/6281378888410");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("menampilkan tepat empat capability Web, Mobile, Enterprise, AI, dan IoT", () => {
    const { container } = render(
      <SoftwareCorporationPage content={softwareCorporationPageContent} />,
    );
    expect(container.querySelectorAll("[data-software-capability]")).toHaveLength(4);

    for (const title of [
      "Web Application",
      "Mobile Application",
      "Enterprise System",
      "AI & IoT Integration",
    ]) {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    }
    expect(container).toHaveTextContent("AI");
    expect(container).toHaveTextContent("IoT");
  });

  it("menampilkan tiga fokus hasil dan tiga prinsip pendekatan", () => {
    render(<SoftwareCorporationPage content={softwareCorporationPageContent} />);
    const focus = screen.getByRole("list", {
      name: "Fokus pengembangan Software Corporation",
    });
    const approach = screen.getByRole("list", { name: "Pendekatan Software Corporation" });

    expect(within(focus).getAllByRole("listitem")).toHaveLength(3);
    expect(within(focus).getByText("Efisiensi proses")).toBeInTheDocument();
    expect(within(focus).getByText("Produktivitas kerja")).toBeInTheDocument();
    expect(within(focus).getByText("Solusi yang disesuaikan dengan kebutuhan")).toBeInTheDocument();
    expect(within(approach).getAllByRole("listitem")).toHaveLength(3);
  });

  it("tidak menampilkan klaim yang dilarang", () => {
    const { container } = render(
      <SoftwareCorporationPage content={softwareCorporationPageContent} />,
    );

    expect(container).not.toHaveTextContent(/24\/7|bebas bug|tercepat|termurah|terbaik/i);
    expect(softwareCorporationPageContent.capabilities.items).toHaveLength(4);
  });
});
