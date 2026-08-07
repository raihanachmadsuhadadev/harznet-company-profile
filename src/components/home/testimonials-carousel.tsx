"use client";

import { useEffect, useState } from "react";

import type { TestimonialItem } from "@/types/content";

type TestimonialsCarouselProps = {
  items: readonly TestimonialItem[];
  autoplayDelay: number;
};

export function TestimonialsCarousel({ items, autoplayDelay }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPointerPaused, setIsPointerPaused] = useState(false);
  const [isFocusPaused, setIsFocusPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPointerPaused || isFocusPaused || prefersReducedMotion || items.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [autoplayDelay, isFocusPaused, isPointerPaused, items.length, prefersReducedMotion]);

  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % items.length);
  const activeItem = items[activeIndex];
  const visualPosition = `${String(activeIndex + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
  const progressWidth = `${((activeIndex + 1) / items.length) * 100}%`;

  if (!activeItem) return null;

  return (
    <div
      className="relative isolate w-full overflow-hidden rounded-[1.625rem] border border-white/65 bg-[linear-gradient(145deg,#ffffff_0%,#f4f9fd_100%)] p-6 shadow-[0_18px_44px_rgb(2_13_29_/_24%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)] sm:p-8 lg:p-9"
      role="region"
      aria-label="Carousel testimoni pelanggan"
      aria-roledescription="carousel"
      tabIndex={0}
      onPointerEnter={() => setIsPointerPaused(true)}
      onPointerLeave={() => setIsPointerPaused(false)}
      onFocusCapture={() => setIsFocusPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showPrevious();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          showNext();
        }
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-5 font-serif text-[7.5rem] leading-none text-[var(--cyan)]/12 select-none sm:right-8 sm:text-[9rem]"
      >
        “
      </span>

      <div
        key={activeItem.id}
        className="starting:translate-y-1 starting:opacity-0 relative transition-[opacity,transform] duration-300 motion-reduce:transition-none"
      >
        <blockquote className="max-w-[42rem] text-[1.3125rem] leading-[1.42] font-medium tracking-[-0.02em] text-balance text-[var(--foreground)] sm:text-[1.5625rem] lg:text-[1.8125rem]">
          {activeItem.quote}
        </blockquote>

        <footer className="mt-7 flex flex-col gap-5 border-t border-[#d8e5ee] pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-6">
          <div className="flex items-center gap-3.5">
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-sm font-semibold tracking-[0.08em] text-white shadow-[0_8px_20px_rgb(11_63_122_/_18%)] sm:text-base"
            >
              {activeItem.initials}
            </span>
            <cite className="text-lg font-semibold text-[var(--foreground)] not-italic">
              {activeItem.author}
            </cite>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span
              aria-hidden="true"
              className="text-sm font-semibold tracking-[0.14em] text-[#6d7f92]"
            >
              {visualPosition}
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[0.875rem] border border-[#c7dbea] bg-[#edf6fc] text-[var(--primary)] shadow-sm transition-colors hover:border-[#9fc5dc] hover:bg-[#dff0fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--secondary)]"
                aria-label="Slide testimonial sebelumnya"
                onClick={showPrevious}
              >
                <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 16 16">
                  <path
                    d="m10 3-5 5 5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[0.875rem] border border-[#c7dbea] bg-[#edf6fc] text-[var(--primary)] shadow-sm transition-colors hover:border-[#9fc5dc] hover:bg-[#dff0fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--secondary)]"
                aria-label="Slide testimonial berikutnya"
                onClick={showNext}
              >
                <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 16 16">
                  <path
                    d="m6 3 5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>

      <div
        aria-hidden="true"
        className="relative mt-6 h-[3px] overflow-hidden rounded-full bg-[#dbe7f0]"
      >
        <span
          className="block h-full rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--cyan)] transition-[width] duration-300 motion-reduce:transition-none"
          style={{ width: progressWidth }}
        />
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Testimoni {activeIndex + 1} dari {items.length}
      </p>
    </div>
  );
}
