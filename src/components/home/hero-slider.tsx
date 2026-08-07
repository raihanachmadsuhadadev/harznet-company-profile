"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { HeroSlide } from "@/types/content";

const autoplayInterval = 5_500;

type HeroSliderProps = {
  slides: readonly HeroSlide[];
};

export function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
    if (isPaused || prefersReducedMotion || slides.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, autoplayInterval);

    return () => window.clearInterval(intervalId);
  }, [isPaused, prefersReducedMotion, slides.length]);

  const goToSlide = (index: number) => setActiveIndex(index);
  const showPrevious = () => goToSlide((activeIndex - 1 + slides.length) % slides.length);
  const showNext = () => goToSlide((activeIndex + 1) % slides.length);

  return (
    <section
      className="relative isolate aspect-[2/1] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-subtle)] shadow-[var(--shadow-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
      aria-label="Slider foto HARZNET"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
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
      tabIndex={0}
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={3780}
            height={1890}
            priority={index === 0}
            sizes="(max-width: 1023px) calc(100vw - 2rem), (max-width: 1280px) 52vw, 38rem"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 motion-reduce:transition-none ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}
            aria-hidden={!isActive}
          />
        );
      })}

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Slide {activeIndex + 1} dari {slides.length}: {slides[activeIndex]?.alt}
      </p>

      <button
        type="button"
        className="absolute top-1/2 left-3 z-10 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[rgb(10_31_61_/_72%)] text-white shadow-md backdrop-blur-sm transition-colors hover:bg-[rgb(10_31_61_/_88%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4"
        aria-label="Slide sebelumnya"
        onClick={showPrevious}
      >
        <svg aria-hidden="true" className="size-5" viewBox="0 0 16 16" fill="none">
          <path d="m10 3-5 5 5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
        </svg>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-3 z-10 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[rgb(10_31_61_/_72%)] text-white shadow-md backdrop-blur-sm transition-colors hover:bg-[rgb(10_31_61_/_88%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4"
        aria-label="Slide berikutnya"
        onClick={showNext}
      >
        <svg aria-hidden="true" className="size-5" viewBox="0 0 16 16" fill="none">
          <path d="m6 3 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
        </svg>
      </button>
    </section>
  );
}
