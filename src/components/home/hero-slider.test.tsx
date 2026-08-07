import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { HeroSlider } from "@/components/home/hero-slider";
import { heroSlides } from "@/content/home";

function mockMatchMedia(matches = false) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation(() => ({
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("HeroSlider", () => {
  it("menampilkan slide pertama dan status slide untuk screen reader", () => {
    mockMatchMedia();
    render(<HeroSlider slides={heroSlides} />);

    expect(screen.getByRole("img", { name: "Materi promosi Harznet Home" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      "Slide 1 dari 3: Materi promosi Harznet Home",
    );
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
  });

  it("menavigasi slide melalui tombol sebelumnya dan berikutnya", () => {
    mockMatchMedia();
    render(<HeroSlider slides={heroSlides} />);

    fireEvent.click(screen.getByRole("button", { name: "Slide berikutnya" }));
    expect(
      screen.getByRole("img", { name: "Materi promosi Corporate Bandwidth HARZNET" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      "Slide 2 dari 3: Materi promosi Corporate Bandwidth HARZNET",
    );

    fireEvent.click(screen.getByRole("button", { name: "Slide sebelumnya" }));
    expect(screen.getByRole("img", { name: "Materi promosi Harznet Home" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      "Slide 1 dari 3: Materi promosi Harznet Home",
    );
  });

  it("berpindah otomatis setelah 5,5 detik", () => {
    vi.useFakeTimers();
    mockMatchMedia();
    render(<HeroSlider slides={heroSlides} />);

    act(() => vi.advanceTimersByTime(5_500));

    expect(
      screen.getByRole("img", { name: "Materi promosi Corporate Bandwidth HARZNET" }),
    ).toBeInTheDocument();
  });

  it("menonaktifkan autoplay untuk preferensi reduced motion tanpa menghilangkan kontrol", () => {
    vi.useFakeTimers();
    mockMatchMedia(true);
    render(<HeroSlider slides={heroSlides} />);

    act(() => vi.advanceTimersByTime(5_500));
    expect(screen.getByRole("img", { name: "Materi promosi Harznet Home" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Slide berikutnya" }));
    expect(
      screen.getByRole("img", { name: "Materi promosi Corporate Bandwidth HARZNET" }),
    ).toBeInTheDocument();
  });
});
