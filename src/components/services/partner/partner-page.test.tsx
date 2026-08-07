import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PartnerPage } from "@/components/services/partner/partner-page";
import { partnerPageContent } from "@/content/partner";

describe("PartnerPage", () => {
  it("menampilkan identitas program, target mitra, dan teknologi yang sesuai", () => {
    render(<PartnerPage content={partnerPageContent} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Perluas jangkauan jaringan dan layanan bersama HARZNET.",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/operator RT\/RW Net/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ISP/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText("Dedicated + Metro").length).toBeGreaterThan(0);
    expect(screen.getByText(/Dense Wavelength Division Multiplexing/)).toBeInTheDocument();
    expect(screen.getByText("Kapasitas hingga 1 Gbps")).toBeInTheDocument();
  });

  it("menampilkan tepat 18 bandwidth beserta harga sumber secara berurutan", () => {
    const { container } = render(<PartnerPage content={partnerPageContent} />);
    const options = Array.from(container.querySelectorAll("[data-bandwidth-option]"));

    expect(options).toHaveLength(18);
    expect(options[0]).toHaveTextContent("100 Mbps");
    expect(options[17]).toHaveTextContent("1 Gbps");

    const expectedPrices = [
      "Rp4.500.000",
      "Rp5.000.000",
      "Rp6.000.000",
      "Rp6.500.000",
      "Rp7.000.000",
      "Rp7.500.000",
      "Rp8.000.000",
      "Rp9.000.000",
      "Rp13.000.000",
      "Rp14.300.000",
      "Rp15.000.000",
      "Rp15.600.000",
      "Rp16.100.000",
      "Rp17.250.000",
      "Rp18.400.000",
      "Rp19.550.000",
      "Rp20.700.000",
      "Rp23.000.000",
    ];
    expectedPrices.forEach((price, index) => expect(options[index]).toHaveTextContent(price));
  });

  it("menampilkan tepat delapan syarat tanpa mengubah substansinya", () => {
    render(<PartnerPage content={partnerPageContent} />);
    const terms = screen.getByRole("list", { name: "Syarat program HARZNET Partner" });

    expect(within(terms).getAllByRole("listitem")).toHaveLength(8);
    expect(terms).toHaveTextContent("PPN 11%");
    expect(terms).toHaveTextContent("300 meter");
    expect(terms).toHaveTextContent("Rp10.000 per meter");
    expect(terms).toHaveTextContent(/prepaid.*tanggal 10/i);
    expect(terms).toHaveTextContent("Minimum kontrak adalah 2 tahun");
    expect(terms).toHaveTextContent("maksimal 25 hari kerja");
    expect(terms).toHaveTextContent("IP Public");
    expect(terms).toHaveTextContent("Routerboard");
  });

  it("memakai CTA dan route Partner yang benar tanpa klaim terlarang", () => {
    const { container } = render(<PartnerPage content={partnerPageContent} />);

    expect(screen.getByRole("link", { name: "Lihat Pilihan Bandwidth" })).toHaveAttribute(
      "href",
      "#program-partner",
    );
    for (const label of [
      "Konsultasikan Program Mitra",
      "Konsultasikan Kapasitas Jaringan",
      "Hubungi Tim HARZNET",
    ]) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", "https://wa.me/6281378888410");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(container).not.toHaveTextContent(/paling populer/i);
    expect(container).not.toHaveTextContent(/instalasi gratis/i);
    expect(partnerPageContent.program.bandwidthOptions).toHaveLength(18);
  });
});
