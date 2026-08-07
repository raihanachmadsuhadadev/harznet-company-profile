import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { TestimonialsSection } from "@/components/home/testimonials-section";
import { testimonialsContent } from "@/content/home";

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

describe("TestimonialsSection", () => {
  it("menampilkan header, testimoni pertama, author, dan status aksesibel", () => {
    mockMatchMedia();
    render(<TestimonialsSection />);

    const section = screen.getByRole("region", { name: testimonialsContent.title });
    expect(section).toHaveAttribute("id", "testimoni");
    expect(screen.getByText(testimonialsContent.eyebrow)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: testimonialsContent.title }),
    ).toHaveAttribute("id", "testimonials-heading");
    expect(screen.getByText(testimonialsContent.description)).toBeInTheDocument();
    expect(screen.getByText(testimonialsContent.items[0].quote)).toBeInTheDocument();
    expect(screen.getByText(testimonialsContent.items[0].author)).toBeInTheDocument();
    expect(screen.queryByText(testimonialsContent.items[1].quote)).not.toBeInTheDocument();

    const status = screen.getByRole("status");
    expect(status).toHaveTextContent("Testimoni 1 dari 3");
    expect(status).toHaveAttribute("aria-live", "polite");
  });

  it("tombol previous dan next bekerja serta melakukan looping", () => {
    mockMatchMedia();
    render(<TestimonialsSection />);

    fireEvent.click(screen.getByRole("button", { name: "Slide testimonial sebelumnya" }));
    expect(screen.getByText(testimonialsContent.items[2].quote)).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Testimoni 3 dari 3");

    fireEvent.click(screen.getByRole("button", { name: "Slide testimonial berikutnya" }));
    expect(screen.getByText(testimonialsContent.items[0].quote)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Slide testimonial berikutnya" }));
    expect(screen.getByText(testimonialsContent.items[1].quote)).toBeInTheDocument();
    expect(screen.queryByText(testimonialsContent.items[0].quote)).not.toBeInTheDocument();
  });

  it("ArrowLeft dan ArrowRight menavigasi testimonial saat carousel memiliki fokus", () => {
    mockMatchMedia();
    render(<TestimonialsSection />);

    const carousel = screen.getByRole("region", { name: "Carousel testimoni pelanggan" });
    carousel.focus();
    fireEvent.keyDown(carousel, { key: "ArrowRight" });
    expect(screen.getByText(testimonialsContent.items[1].quote)).toBeInTheDocument();

    fireEvent.keyDown(carousel, { key: "ArrowLeft" });
    expect(screen.getByText(testimonialsContent.items[0].quote)).toBeInTheDocument();
  });

  it("berpindah otomatis sesuai delay content", () => {
    vi.useFakeTimers();
    mockMatchMedia();
    render(<TestimonialsSection />);

    act(() => vi.advanceTimersByTime(testimonialsContent.autoplayDelay));

    expect(screen.getByText(testimonialsContent.items[1].quote)).toBeInTheDocument();
  });

  it("pause saat pointer atau focus berada di panel lalu melanjutkan kembali", () => {
    vi.useFakeTimers();
    mockMatchMedia();
    render(<TestimonialsSection />);

    const carousel = screen.getByRole("region", { name: "Carousel testimoni pelanggan" });
    fireEvent.pointerEnter(carousel);
    act(() => vi.advanceTimersByTime(testimonialsContent.autoplayDelay));
    expect(screen.getByText(testimonialsContent.items[0].quote)).toBeInTheDocument();

    fireEvent.pointerLeave(carousel);
    act(() => vi.advanceTimersByTime(testimonialsContent.autoplayDelay));
    expect(screen.getByText(testimonialsContent.items[1].quote)).toBeInTheDocument();

    fireEvent.focus(carousel);
    act(() => vi.advanceTimersByTime(testimonialsContent.autoplayDelay));
    expect(screen.getByText(testimonialsContent.items[1].quote)).toBeInTheDocument();

    fireEvent.blur(carousel, { relatedTarget: null });
    act(() => vi.advanceTimersByTime(testimonialsContent.autoplayDelay));
    expect(screen.getByText(testimonialsContent.items[2].quote)).toBeInTheDocument();
  });

  it("reduced motion mematikan autoplay tanpa menghilangkan kontrol manual", () => {
    vi.useFakeTimers();
    mockMatchMedia(true);
    render(<TestimonialsSection />);

    act(() => vi.advanceTimersByTime(testimonialsContent.autoplayDelay));
    expect(screen.getByText(testimonialsContent.items[0].quote)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Slide testimonial berikutnya" }));
    expect(screen.getByText(testimonialsContent.items[1].quote)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Slide testimonial sebelumnya" })).toBeEnabled();
  });

  it("tidak menambahkan rating, lokasi, atau paket yang tidak diberikan", () => {
    mockMatchMedia();
    const { container } = render(<TestimonialsSection />);

    expect(container).not.toHaveTextContent(/rating|bintang|lokasi|paket/i);
  });
});
