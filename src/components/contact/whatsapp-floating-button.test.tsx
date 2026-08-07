import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WhatsAppFloatingButton } from "@/components/contact/whatsapp-floating-button";
import { whatsappContact } from "@/config/contact";

describe("WhatsAppFloatingButton", () => {
  it("renders an accessible link to the official WhatsApp number", () => {
    render(<WhatsAppFloatingButton />);

    const link = screen.getByRole("link", { name: "Hubungi HARZNET melalui WhatsApp" });

    expect(link).toHaveAttribute("href", whatsappContact.url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("title", "Hubungi HARZNET melalui WhatsApp");
    expect(link.getAttribute("href")).not.toContain("0813");
  });
});
