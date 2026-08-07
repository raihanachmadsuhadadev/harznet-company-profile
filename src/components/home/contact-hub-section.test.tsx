import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactHubForm } from "@/components/home/contact-hub-form";
import { ContactHubSection } from "@/components/home/contact-hub-section";
import { contactHubContent } from "@/content/home";
import type { ContactFormState } from "@/lib/validation/contact-message";

describe("ContactHubSection", () => {
  it("menampilkan form, data kontak resmi, dan Google Maps yang aksesibel", () => {
    const { container } = render(
      <ContactHubSection mapEmbedUrl="https://www.google.com/maps/embed?pb=official-test-configuration" />,
    );

    const section = screen.getByRole("region", { name: contactHubContent.title });
    expect(section).toHaveAttribute("id", "contact-hub");
    expect(within(section).getByText(contactHubContent.eyebrow)).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", { level: 2, name: contactHubContent.title }),
    ).toBeInTheDocument();
    expect(within(section).getByText(contactHubContent.description)).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", { level: 3, name: contactHubContent.form.title }),
    ).toBeInTheDocument();

    for (const field of contactHubContent.form.fields) {
      expect(within(section).getByLabelText(field.label)).toHaveAttribute(
        "id",
        `contact-${field.id}`,
      );
    }
    expect(within(section).getByRole("button", { name: "Kirim Pesan" })).toBeInTheDocument();

    expect(within(section).getByText(contactHubContent.contactItems[0].value)).toBeInTheDocument();
    expect(within(section).getByRole("link", { name: /Email:/ })).toHaveAttribute(
      "href",
      "mailto:customer_service@harznet.com",
    );
    expect(within(section).getByRole("link", { name: /Telepon:/ })).toHaveAttribute(
      "href",
      "tel:+6281378888410",
    );
    expect(within(section).getByTitle(contactHubContent.map.iframeTitle)).toHaveAttribute(
      "src",
      "https://www.google.com/maps/embed?pb=official-test-configuration",
    );

    expect(container).not.toHaveTextContent(/WhatsApp|24\/7|pesan berhasil dikirim/i);
    expect(container.querySelector('[href*="wa.me"]')).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /kembali ke atas|back to top/i }),
    ).not.toBeInTheDocument();
  });

  it("menampilkan fallback aman ketika map belum dikonfigurasi", () => {
    render(<ContactHubSection />);

    expect(screen.getByRole("status", { name: "" })).toHaveTextContent(
      contactHubContent.map.fallback,
    );
    expect(screen.queryByTitle(contactHubContent.map.iframeTitle)).not.toBeInTheDocument();
  });
});

describe("ContactHubForm", () => {
  it("menampilkan pending lalu error validasi dari action", async () => {
    let resolveAction: ((state: ContactFormState) => void) | undefined;
    const action = vi.fn(
      () =>
        new Promise<ContactFormState>((resolve) => {
          resolveAction = resolve;
        }),
    );
    render(<ContactHubForm content={contactHubContent.form} action={action} />);

    fireEvent.change(screen.getByLabelText("Nama"), { target: { value: "A" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "invalid" } });
    fireEvent.change(screen.getByLabelText("Pesan"), { target: { value: "singkat" } });
    fireEvent.submit(screen.getByRole("button", { name: "Kirim Pesan" }).closest("form")!);

    expect(await screen.findByRole("button", { name: "Mengirim Pesan..." })).toBeDisabled();

    resolveAction?.({
      status: "error",
      message: "Periksa kembali informasi pada form.",
      fieldErrors: { name: "Nama harus terdiri dari minimal 2 karakter." },
      values: { name: "A", email: "invalid", message: "singkat" },
    });

    await waitFor(() =>
      expect(screen.getByText("Nama harus terdiri dari minimal 2 karakter.")).toBeInTheDocument(),
    );
    expect(screen.getByLabelText("Nama")).toHaveAttribute("aria-invalid", "true");
  });
});
