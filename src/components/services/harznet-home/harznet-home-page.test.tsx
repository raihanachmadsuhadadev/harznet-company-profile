import { readFileSync } from "node:fs";
import path from "node:path";

import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ServiceOverview } from "@/components/home/service-overview";
import { HarznetHomePage } from "@/components/services/harznet-home/harznet-home-page";
import { harznetHomePageContent } from "@/content/harznet-home";

describe("HarznetHomePage", () => {
  it("menampilkan hero FTTH, informasi pemasangan, dan CTA resmi", () => {
    render(<HarznetHomePage content={harznetHomePageContent} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Internet rumah cepat dan nyaman untuk kebutuhan seluruh keluarga.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/koneksi berbasis Fiber To The Home/)).toBeInTheDocument();
    expect(screen.getByText("Biaya pemasangan Rp300.000")).toBeInTheDocument();
    expect(
      screen.getByText("Berlaku untuk seluruh pilihan paket HARZNET Home."),
    ).toBeInTheDocument();

    for (const label of ["Konsultasikan Kebutuhan", "Konsultasikan Paket", "Hubungi Tim HARZNET"]) {
      for (const link of screen.getAllByRole("link", { name: label })) {
        expect(link).toHaveAttribute("href", "https://wa.me/6281378888410");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      }
    }
    expect(screen.getByRole("link", { name: "Lihat Pilihan Paket" })).toHaveAttribute(
      "href",
      "#paket-harznet-home",
    );
  });

  it("menampilkan tepat empat paket dengan speed, harga, dan benefit sesuai content", () => {
    render(<HarznetHomePage content={harznetHomePageContent} />);

    const packagesSection = screen.getByRole("region", {
      name: "Pilih koneksi yang sesuai dengan aktivitas di rumah.",
    });
    const packageCards = within(packagesSection).getAllByRole("article");
    expect(packageCards).toHaveLength(4);

    for (const packageItem of harznetHomePageContent.packages) {
      const card = within(packagesSection)
        .getByRole("heading", { level: 3, name: packageItem.name })
        .closest("article");
      expect(card).not.toBeNull();
      expect(within(card!).getByText(packageItem.speed.replace("Hingga ", ""))).toBeInTheDocument();
      expect(within(card!).getByText(packageItem.deviceRange)).toBeInTheDocument();
      expect(within(card!).getByText(packageItem.price)).toBeInTheDocument();
      expect(
        within(card!).getByLabelText(`Harga ${packageItem.price} per bulan`),
      ).toBeInTheDocument();
    }

    expect(within(packagesSection).getByText("41 Mbps")).toBeInTheDocument();
    expect(within(packagesSection).getByText("53 Mbps")).toBeInTheDocument();
    expect(within(packagesSection).getByText("63 Mbps")).toBeInTheDocument();
    expect(within(packagesSection).getByText("100 Mbps")).toBeInTheDocument();
  });

  it("tidak menambahkan klaim, label promosi, atau implementasi tanpa tipe", () => {
    const { container } = render(<HarznetHomePage content={harznetHomePageContent} />);
    const renderedText = container.textContent ?? "";
    expect(renderedText).not.toMatch(/paling populer|instalasi gratis|unlimited bandwidth/i);

    const implementationSource = readFileSync(
      path.join(
        process.cwd(),
        "src",
        "components",
        "services",
        "harznet-home",
        "harznet-home-page.tsx",
      ),
      "utf8",
    );
    const contentSource = readFileSync(
      path.join(process.cwd(), "src", "content", "harznet-home.ts"),
      "utf8",
    );
    expect(`${implementationSource}\n${contentSource}`).not.toMatch(/\bany\b/);
  });

  it("mengintegrasikan kartu homepage ke satu route HARZNET Home yang benar", () => {
    render(<ServiceOverview />);

    expect(screen.getByRole("link", { name: "Pelajari Harznet Home" })).toHaveAttribute(
      "href",
      "/layanan/harznet-home/",
    );
  });
});
