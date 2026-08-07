import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AboutCompanyPage } from "@/components/about/about-company-page";
import { aboutCompanyPageContent } from "@/content/about-company";

describe("AboutCompanyPage", () => {
  it("menampilkan identitas perusahaan, satu H1, dan CTA Contact Hub", () => {
    const { container } = render(<AboutCompanyPage content={aboutCompanyPageContent} />);

    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Membangun konektivitas untuk mendukung kebutuhan digital masyarakat dan bisnis.",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("PT Cemerlang Internet Indonesia").length).toBeGreaterThan(0);
    expect(screen.getAllByText("HARZNET").length).toBeGreaterThan(0);
    expect(screen.getByText("1 Februari 2021", { exact: false })).toBeInTheDocument();
    expect(screen.getAllByText("2021", { exact: true }).length).toBeGreaterThan(0);

    for (const link of screen.getAllByRole("link", { name: "Hubungi Tim HARZNET" })) {
      expect(link).toHaveAttribute("href", "https://wa.me/6281378888410");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(container.textContent).not.toMatch(/whatsapp/i);
  });

  it("menampilkan satu visi dan tepat enam misi", () => {
    const { container } = render(<AboutCompanyPage content={aboutCompanyPageContent} />);
    const missionList = screen.getByRole("list", { name: "Enam misi perusahaan" });

    expect(
      screen.getByText(
        "Menjadi penyedia layanan internet yang terus berkembang dalam menghubungkan masyarakat dan bisnis dengan teknologi untuk mendukung masa depan digital yang lebih baik.",
      ),
    ).toBeInTheDocument();
    expect(within(missionList).getAllByRole("listitem")).toHaveLength(6);
    expect(container.querySelectorAll("[data-about-mission]")).toHaveLength(6);
  });

  it("menampilkan tepat empat komitmen perusahaan", () => {
    const { container } = render(<AboutCompanyPage content={aboutCompanyPageContent} />);
    const commitmentList = screen.getByRole("list", { name: "Empat komitmen perusahaan" });

    expect(within(commitmentList).getAllByRole("listitem")).toHaveLength(4);
    expect(container.querySelectorAll("[data-about-commitment]")).toHaveLength(4);
    for (const title of [
      "Kualitas layanan",
      "Inovasi teknologi",
      "Kepuasan pelanggan",
      "Dukungan transformasi digital",
    ]) {
      expect(within(commitmentList).getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("tidak memuat klaim kepemimpinan atau kerja sama resmi yang belum diverifikasi", () => {
    const { container } = render(<AboutCompanyPage content={aboutCompanyPageContent} />);
    const text = container.textContent ?? "";

    expect(text).not.toMatch(/terdepan di Indonesia/i);
    expect(text).not.toMatch(/kerja sama resmi/i);
    expect(text).not.toMatch(/Komdigi|APJII/i);
    expect(text).not.toMatch(/melayani seluruh Indonesia|pilihan utama|tanpa batas/i);
    expect(text).not.toMatch(/teknologi paling mutakhir|jaringan terbaik|layanan tanpa gangguan/i);
  });
});
