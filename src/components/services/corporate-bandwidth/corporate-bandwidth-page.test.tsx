import { readFileSync } from "node:fs";
import path from "node:path";

import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ServiceOverview } from "@/components/home/service-overview";
import { CorporateBandwidthPage } from "@/components/services/corporate-bandwidth/corporate-bandwidth-page";
import { corporateBandwidthPageContent } from "@/content/corporate-bandwidth";

describe("CorporateBandwidthPage", () => {
  it("menampilkan hero bisnis, DWDM, registrasi, dan CTA resmi", () => {
    render(<CorporateBandwidthPage content={corporateBandwidthPageContent} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Konektivitas berkapasitas tinggi untuk operasional bisnis yang terus berkembang.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/memenuhi kebutuhan konektivitas antar lokasi/)).toBeInTheDocument();
    expect(screen.getAllByText(/DWDM|Dense Wavelength Division Multiplexing/)).not.toHaveLength(0);
    expect(screen.getByRole("heading", { name: "Biaya registrasi satu kali" })).toBeInTheDocument();
    expect(screen.getByText("OTC — One Time Connection")).toBeInTheDocument();
    expect(screen.getByText("Rp5.000.000")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Lihat Pilihan Bandwidth" })).toHaveAttribute(
      "href",
      "#pilihan-corporate-bandwidth",
    );
    for (const label of [
      "Konsultasikan Kebutuhan Bisnis",
      "Konsultasikan Layanan Ini",
      "Hubungi Tim HARZNET",
    ]) {
      for (const link of screen.getAllByRole("link", { name: label })) {
        expect(link).toHaveAttribute("href", "https://wa.me/6281378888410");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      }
    }
  });

  it("menampilkan dua kategori dengan seluruh 14 bandwidth dan harga", () => {
    render(<CorporateBandwidthPage content={corporateBandwidthPageContent} />);

    const packagesSection = screen.getByRole("region", {
      name: "Pilih kapasitas koneksi sesuai kebutuhan operasional.",
    });
    const categories = within(packagesSection).getAllByRole("article");
    expect(categories).toHaveLength(2);

    for (const category of corporateBandwidthPageContent.serviceCategories) {
      const panel = within(packagesSection)
        .getByRole("heading", { level: 3, name: category.name })
        .closest("article");
      expect(panel).not.toBeNull();
      expect(within(panel!).getAllByRole("listitem")).toHaveLength(category.packages.length);

      for (const packageItem of category.packages) {
        expect(within(panel!).getByText(packageItem.bandwidth)).toBeInTheDocument();
        expect(within(panel!).getByText(packageItem.price)).toBeInTheDocument();
        expect(
          within(panel!).getByLabelText(`Harga ${packageItem.price} ${packageItem.billingPeriod}`),
        ).toBeInTheDocument();
      }
    }

    expect(categories[0]).toHaveTextContent("25 Mbps");
    expect(categories[0]).toHaveTextContent("200 Mbps");
    expect(categories[1]).toHaveTextContent("100 Mbps");
    expect(categories[1]).toHaveTextContent("500 Mbps");
  });

  it("tidak menambahkan klaim terlarang, promosi, atau implementasi any", () => {
    const { container } = render(
      <CorporateBandwidthPage content={corporateBandwidthPageContent} />,
    );
    expect(container.textContent ?? "").not.toMatch(
      /SLA|uptime|dedicated 1:1|latency dijamin|instalasi gratis|paling populer|unlimited bandwidth/i,
    );

    const implementationSource = readFileSync(
      path.join(
        process.cwd(),
        "src",
        "components",
        "services",
        "corporate-bandwidth",
        "corporate-bandwidth-page.tsx",
      ),
      "utf8",
    );
    const contentSource = readFileSync(
      path.join(process.cwd(), "src", "content", "corporate-bandwidth.ts"),
      "utf8",
    );
    expect(`${implementationSource}\n${contentSource}`).not.toMatch(/:\s*any\b|as\s+any\b/);
  });

  it("mengintegrasikan kartu homepage ke route Corporate Bandwidth yang benar", () => {
    render(<ServiceOverview />);

    expect(screen.getByRole("link", { name: "Pelajari Corporate Bandwidth" })).toHaveAttribute(
      "href",
      "/layanan/corporate-bandwidth/",
    );
  });
});
