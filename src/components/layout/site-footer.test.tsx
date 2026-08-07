import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "@/components/layout/site-footer";

describe("SiteFooter", () => {
  it("menampilkan struktur, link, dan placeholder sosial yang aksesibel", () => {
    render(<SiteFooter />);

    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByText("HARZNET", { exact: true })).toBeInTheDocument();
    expect(within(footer).getByText("PT Cemerlang Internet Indonesia")).toBeInTheDocument();

    const primaryNavigation = within(footer).getByRole("navigation", {
      name: "Navigasi footer",
    });
    const servicesNavigation = screen.getByRole("navigation", { name: "Layanan footer" });
    const informationNavigation = screen.getByRole("navigation", { name: "Informasi footer" });
    const legalNavigation = screen.getByRole("navigation", { name: "Legal footer" });

    const primaryLinks = [
      ["Beranda", "/"],
      ["Layanan Kami", "/#layanan"],
      ["Tentang Kami", "/tentang-kami/"],
      ["Informasi", "/informasi/"],
      ["Kontak", "/kontak"],
      ["Portal Pelanggan", "/portal-pelanggan"],
    ];
    for (const [label, href] of primaryLinks) {
      expect(within(primaryNavigation).getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    }

    expect(within(servicesNavigation).getByRole("link", { name: "Harznet Home" })).toHaveAttribute(
      "href",
      "/layanan/harznet-home/",
    );
    expect(
      within(servicesNavigation).getByRole("link", { name: "Corporate Bandwidth" }),
    ).toHaveAttribute("href", "/layanan/corporate-bandwidth/");
    expect(
      within(servicesNavigation).getByRole("link", { name: "Software Corporation" }),
    ).toHaveAttribute("href", "/layanan/software-corporation/");

    expect(
      within(informationNavigation).getByRole("link", { name: "Media & Unduhan" }),
    ).toHaveAttribute("href", "/media-unduhan");
    expect(within(informationNavigation).getByRole("link", { name: "Kuesioner" })).toHaveAttribute(
      "href",
      "/kuesioner/",
    );
    expect(within(footer).getAllByRole("link", { name: "Kuesioner" })).toHaveLength(1);

    expect(
      within(legalNavigation).getByRole("link", { name: "Kebijakan Privasi" }),
    ).toHaveAttribute("href", "/kebijakan-privasi");
    expect(
      within(legalNavigation).getByRole("link", { name: "Syarat & Ketentuan" }),
    ).toHaveAttribute("href", "/syarat-ketentuan");

    const socialList = within(footer).getByRole("list", { name: "Media sosial HARZNET" });
    for (const label of ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn"]) {
      const placeholder = within(socialList).getByRole("img", {
        name: `${label} HARZNET — tautan belum tersedia`,
      });
      expect(placeholder).not.toHaveAttribute("tabindex");
      expect(within(socialList).queryByRole("link", { name: `Buka ${label} HARZNET` })).toBeNull();
    }

    for (const link of within(footer).getAllByRole("link")) {
      expect(link.getAttribute("href")).not.toBe("#");
      expect(link.getAttribute("href")).not.toMatch(/^javascript:/i);
    }
    expect(
      within(footer).getByText(new RegExp(`© ${new Date().getFullYear()}`)),
    ).toBeInTheDocument();
  });
});
