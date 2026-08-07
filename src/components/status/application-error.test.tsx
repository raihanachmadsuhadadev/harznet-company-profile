import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ApplicationError } from "@/components/status/application-error";
describe("ApplicationError", () => {
  it("menampilkan pesan aman dan menjalankan reset", () => {
    const reset = vi.fn();
    render(<ApplicationError reset={reset} />);
    expect(screen.getByRole("heading", { name: "Terjadi kendala sementara" })).toBeInTheDocument();
    expect(screen.queryByText(/stack|digest/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Coba lagi" }));
    expect(reset).toHaveBeenCalledOnce();
  });
});
