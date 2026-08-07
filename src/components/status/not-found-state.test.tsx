import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NotFoundState } from "@/components/status/not-found-state";
describe("NotFoundState", () => {
  it("menampilkan navigasi pemulihan", () => {
    render(<NotFoundState />);
    expect(screen.getByRole("heading", { name: "Halaman tidak ditemukan" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Kembali ke beranda" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Lihat layanan" })).toBeInTheDocument();
  });
});
