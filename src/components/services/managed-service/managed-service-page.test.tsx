import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ManagedServicePage } from "@/components/services/managed-service/managed-service-page";
import { managedServicePageContent } from "@/content/managed-service";

describe("ManagedServicePage", () => {
  it("menampilkan hero dan CTA Managed Service", () => {
    render(<ManagedServicePage content={managedServicePageContent} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Kelola performa, keamanan, dan keberlanjutan jaringan secara lebih terarah.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Lihat Cakupan Layanan" })).toHaveAttribute(
      "href",
      "#cakupan-managed-service",
    );
    for (const label of ["Konsultasikan Kebutuhan", "Hubungi Tim HARZNET"]) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", "https://wa.me/6281378888410");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("menampilkan tepat delapan capability beserta seluruh judulnya", () => {
    const { container } = render(<ManagedServicePage content={managedServicePageContent} />);
    expect(container.querySelectorAll("[data-managed-capability]")).toHaveLength(8);

    for (const capability of managedServicePageContent.capabilities.items) {
      expect(screen.getByRole("heading", { level: 3, name: capability.title })).toBeInTheDocument();
      for (const item of capability.items) expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("menampilkan empat tahap siklus dan panel komitmen SLA", () => {
    render(<ManagedServicePage content={managedServicePageContent} />);
    const flow = screen.getByRole("list", { name: "Siklus Managed Service" });

    expect(within(flow).getAllByRole("listitem")).toHaveLength(4);
    for (const title of ["Monitor", "Prevent", "Resolve", "Improve"]) {
      expect(within(flow).getByRole("heading", { name: title })).toBeInTheDocument();
    }
    expect(
      screen.getByRole("heading", { name: "Komitmen layanan yang terukur dan transparan." }),
    ).toBeInTheDocument();
    expect(screen.getByText(/kesepakatan SLA pelanggan/)).toBeInTheDocument();
  });

  it("tidak membawa konten pricing atau DWDM dari layanan lain", () => {
    const { container } = render(<ManagedServicePage content={managedServicePageContent} />);

    expect(container).not.toHaveTextContent(/DWDM|Dense Wavelength|Rp\d|pilihan bandwidth/i);
    expect(managedServicePageContent.capabilities.items).toHaveLength(8);
  });
});
