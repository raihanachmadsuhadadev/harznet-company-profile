import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MobileNavigation } from "@/components/layout/mobile-navigation";

describe("MobileNavigation", () => {
  it("membuka menu, submenu layanan, dan menutup menu", () => {
    render(<MobileNavigation />);

    const toggle = screen.getByRole("button", { name: "Buka menu navigasi" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Navigasi seluler" })).not.toBeInTheDocument();

    fireEvent.click(toggle);

    expect(screen.getByRole("button", { name: "Tutup menu navigasi" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("navigation", { name: "Navigasi seluler" })).toBeInTheDocument();
    const servicesToggle = screen.getByRole("button", { name: "Layanan Kami" });
    expect(servicesToggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(servicesToggle);
    expect(servicesToggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Harznet Home" })).toHaveAttribute(
      "href",
      "/layanan/harznet-home/",
    );
    expect(screen.getByRole("link", { name: "Corporate Bandwidth" })).toHaveAttribute(
      "href",
      "/layanan/corporate-bandwidth/",
    );
    expect(screen.getByRole("link", { name: "Kuesioner" })).toHaveAttribute("href", "/kuesioner/");
    expect(screen.getByRole("link", { name: "Login" })).toHaveAttribute(
      "href",
      "/portal-pelanggan",
    );

    fireEvent.click(screen.getByRole("button", { name: "Tutup menu navigasi" }));
    expect(screen.queryByRole("navigation", { name: "Navigasi seluler" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Buka menu navigasi" }));

    const homeLink = screen.getByRole("link", { name: "Harznet Home" });
    homeLink.addEventListener("click", (event) => event.preventDefault(), { once: true });
    fireEvent.click(homeLink);

    expect(screen.queryByRole("navigation", { name: "Navigasi seluler" })).not.toBeInTheDocument();
  });
});
