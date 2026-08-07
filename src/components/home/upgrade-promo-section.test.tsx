import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { UpgradePromoSection } from "@/components/home/upgrade-promo-section";
import { upgradePromoContent } from "@/content/home";

describe("UpgradePromoSection", () => {
  it("menampilkan eyebrow, heading, deskripsi, dan CTA kontak yang benar", () => {
    render(<UpgradePromoSection />);

    expect(screen.getByText(upgradePromoContent.eyebrow)).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: upgradePromoContent.title,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "upgrade-promo-heading");
    expect(screen.getByText(upgradePromoContent.description)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: upgradePromoContent.primaryAction.label }),
    ).toHaveAttribute("href", "https://wa.me/6281378888410");
  });

  it("tidak menampilkan klaim promo yang belum dikonfirmasi atau tombol WhatsApp", () => {
    const { container } = render(<UpgradePromoSection />);

    expect(container).not.toHaveTextContent(/13 Mbps|41 Mbps|tanpa biaya tambahan/i);
    expect(screen.queryByRole("button", { name: /whatsapp/i })).not.toBeInTheDocument();
  });
});
