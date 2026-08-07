import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ServiceOverview } from "@/components/home/service-overview";

describe("ServiceOverview", () => {
  it("menampilkan section layanan semantik dengan urutan dan tautan yang benar", () => {
    const { container } = render(<ServiceOverview />);

    expect(screen.getByText("Layanan")).toBeInTheDocument();
    const section = screen.getByRole("region", {
      name: "Satu ekosistem untuk beragam kebutuhan teknologi",
    });
    expect(section).toHaveAttribute("id", "layanan");
    expect(
      within(section).getByRole("heading", {
        level: 2,
        name: "Satu ekosistem untuk beragam kebutuhan teknologi",
      }),
    ).toBeInTheDocument();

    const services = [
      ["01", "Harznet Home", "/layanan/harznet-home/"],
      ["02", "Corporate Bandwidth", "/layanan/corporate-bandwidth/"],
      ["03", "Partner", "/layanan/partner/"],
      ["04", "Managed Service", "/layanan/managed-service/"],
      ["05", "Software Corporation", "/layanan/software-corporation/"],
    ];

    const cards = within(section).getAllByRole("listitem");
    expect(cards).toHaveLength(5);
    for (const [index, [marker, name, href]] of services.entries()) {
      expect(within(cards[index]).getByText(marker)).toBeInTheDocument();
      expect(within(cards[index]).getByRole("heading", { name })).toBeInTheDocument();
      expect(within(cards[index]).getByRole("link", { name: `Pelajari ${name}` })).toHaveAttribute(
        "href",
        href,
      );
    }

    expect(container).not.toHaveTextContent(/06|Upgrade koneksi|PILIHAN KONEKSI HARZNET/i);
  });
});
