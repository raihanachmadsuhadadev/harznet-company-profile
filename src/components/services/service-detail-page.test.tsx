import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ServiceDetailPage } from "@/components/services/service-detail-page";
import { serviceDetails } from "@/content/services";

describe("ServiceDetailPage", () => {
  it("menampilkan nama layanan, manfaat, proses, dan CTA kontak", () => {
    const service = serviceDetails[0];
    render(<ServiceDetailPage service={service} />);

    expect(screen.getByRole("heading", { level: 1, name: service.title })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Pembahasan layanan yang berangkat dari kebutuhan" }),
    ).toBeInTheDocument();
    expect(screen.getByText(service.benefits[0])).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Langkah yang dibahas secara terkoordinasi" }),
    ).toBeInTheDocument();
    expect(screen.getByText(service.process[0].title)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Lihat informasi kontak" })[0]).toHaveAttribute(
      "href",
      "https://wa.me/6281378888410",
    );
  });
});
