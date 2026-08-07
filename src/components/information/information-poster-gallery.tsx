"use client";

import Image from "next/image";
import { useState } from "react";

import { InternalRouteLink } from "@/components/ui/internal-route-link";
import type { InformationPosterItem } from "@/types/content";

type InformationPosterGalleryProps = {
  posters: readonly InformationPosterItem[];
};

export const POSTERS_PER_PAGE = 2;

export function InformationPosterGallery({ posters }: InformationPosterGalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posters.length / POSTERS_PER_PAGE);
  const pageStart = (currentPage - 1) * POSTERS_PER_PAGE;
  const visiblePosters = posters.slice(pageStart, pageStart + POSTERS_PER_PAGE);

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="mt-8 lg:mt-10">
      <p className="sr-only" aria-live="polite">
        Halaman poster {currentPage} dari {totalPages}
      </p>
      <ul
        className="grid items-stretch gap-5 md:grid-cols-2 lg:gap-7"
        aria-label="Gallery poster informasi HARZNET"
      >
        {visiblePosters.map((poster, index) => (
          <li key={poster.id} className="min-w-0">
            <InternalRouteLink
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.375rem] border border-[#cbdde9] bg-white p-3 shadow-[0_12px_34px_rgb(10_31_61_/_7%)] outline-none transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--secondary)]/55 hover:shadow-[0_18px_42px_rgb(10_31_61_/_10%)] focus-visible:border-[var(--secondary)] focus-visible:ring-4 focus-visible:ring-[var(--secondary)]/20 motion-reduce:transform-none motion-reduce:transition-none sm:p-4"
              href={poster.href}
            >
              <span className="relative block size-full">
                <Image
                  alt={poster.alt}
                  className="object-contain object-center"
                  fill
                  preload={currentPage === 1 && index === 0}
                  sizes="(max-width: 767px) calc(100vw - 3.5rem), (max-width: 1279px) calc(50vw - 4.5rem), 558px"
                  src={poster.src}
                />
              </span>
            </InternalRouteLink>
          </li>
        ))}
      </ul>

      <nav
        className="mt-6 grid grid-cols-[minmax(0,1fr)_2.75rem_2.75rem_minmax(0,1fr)] justify-center gap-1.5 sm:mt-7 sm:flex sm:gap-2"
        aria-label="Pagination poster"
      >
        <button
          type="button"
          aria-label="Buka halaman poster sebelumnya"
          className="min-h-11 min-w-11 rounded-xl border border-[#cbdde9] bg-white px-2 text-xs font-bold text-[var(--primary)] outline-none transition-colors hover:border-[var(--secondary)] hover:bg-[#f3f9fc] focus-visible:ring-4 focus-visible:ring-[var(--secondary)]/20 disabled:cursor-not-allowed disabled:bg-[#edf2f5] disabled:text-[var(--muted)] disabled:opacity-60 sm:shrink-0 sm:px-4 sm:text-sm"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          Sebelumnya
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const isCurrent = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              aria-current={isCurrent ? "page" : undefined}
              aria-label={`Buka halaman poster ${page}`}
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#cbdde9] bg-white text-sm font-bold text-[var(--primary)] outline-none transition-colors hover:border-[var(--secondary)] hover:bg-[#f3f9fc] focus-visible:ring-4 focus-visible:ring-[var(--secondary)]/20 aria-[current=page]:border-[var(--primary)] aria-[current=page]:bg-[var(--primary)] aria-[current=page]:text-white"
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          aria-label="Buka halaman poster berikutnya"
          className="min-h-11 min-w-11 rounded-xl border border-[#cbdde9] bg-white px-2 text-xs font-bold text-[var(--primary)] outline-none transition-colors hover:border-[var(--secondary)] hover:bg-[#f3f9fc] focus-visible:ring-4 focus-visible:ring-[var(--secondary)]/20 disabled:cursor-not-allowed disabled:bg-[#edf2f5] disabled:text-[var(--muted)] disabled:opacity-60 sm:shrink-0 sm:px-4 sm:text-sm"
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
        >
          Berikutnya
        </button>
      </nav>
    </div>
  );
}
