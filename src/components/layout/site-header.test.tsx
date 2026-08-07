import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/layout/site-header";

describe("SiteHeader", () => {
  it("menampilkan logo, navigasi utama, dan Login", () => {
    render(<SiteHeader />);

    expect(
      screen.getByRole("img", {
        name: "HARZNET Group - Powered by Cemerlang Internet Indonesia",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "HARZNET Group - Powered by Cemerlang Internet Indonesia",
      }),
    ).toHaveAttribute("href", "/");

    const navigation = screen.getByRole("navigation", { name: "Navigasi utama" });
    for (const label of ["Beranda", "Tentang Kami", "Informasi", "Kuesioner", "Kontak"])
      expect(within(navigation).getByRole("link", { name: label })).toBeInTheDocument();

    expect(within(navigation).getByRole("link", { name: "Tentang Kami" })).toHaveAttribute(
      "href",
      "/tentang-kami/",
    );
    expect(within(navigation).getByRole("link", { name: "Informasi" })).toHaveAttribute(
      "href",
      "/informasi/",
    );
    expect(within(navigation).getByRole("link", { name: "Kuesioner" })).toHaveAttribute(
      "href",
      "/kuesioner/",
    );

    expect(within(navigation).getByRole("button", { name: "Layanan Kami" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByRole("link", { name: "Login" })).toHaveAttribute(
      "href",
      "/portal-pelanggan",
    );
  });

  it("membuka dan menutup dropdown layanan melalui Escape", () => {
    render(<SiteHeader />);

    const navigation = screen.getByRole("navigation", { name: "Navigasi utama" });
    const trigger = within(navigation).getByRole("button", { name: "Layanan Kami" });
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    for (const [label, href] of [
      ["Harznet Home", "/layanan/harznet-home/"],
      ["Corporate Bandwidth", "/layanan/corporate-bandwidth/"],
      ["Partner", "/layanan/partner/"],
      ["Managed Service", "/layanan/managed-service/"],
      ["Software Corporation", "/layanan/software-corporation/"],
    ])
      expect(screen.getByRole("link", { name: new RegExp(`^${label}`) })).toHaveAttribute(
        "href",
        href,
      );

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
