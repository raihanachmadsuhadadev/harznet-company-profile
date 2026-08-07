import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ConnectivityBannerSection } from "@/components/home/connectivity-banner-section";

describe("ConnectivityBannerSection", () => {
  it("menampilkan konten, CTA layanan, dan gambar lokal dekoratif", () => {
    const { container } = render(<ConnectivityBannerSection />);

    expect(
      screen.getByRole("heading", { name: "Konektivitas Tanpa Batas Bersama HARZNET" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Solusi internet cepat melesat untuk kebutuhan rumah, bisnis, dan ekosistem digital Anda.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Lihat Layanan Kami" })).toHaveAttribute(
      "href",
      "/#layanan",
    );

    const decorativeImage = container.querySelector("img");
    expect(decodeURIComponent(decorativeImage?.getAttribute("src") ?? "")).toContain(
      "/images/home/section-2/harznet-section-2-main.png",
    );
    expect(decorativeImage).toHaveAttribute("alt", "");
    expect(decorativeImage).toHaveAttribute("aria-hidden", "true");
  });
});
