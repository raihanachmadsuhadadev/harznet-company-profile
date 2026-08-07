"use client";

import { useState } from "react";

import { InternalRouteLink } from "@/components/ui/internal-route-link";

type ServiceNavigationItem = {
  href: string;
  label: string;
  summary: string;
};

type ServicesDropdownProps = {
  services: readonly ServiceNavigationItem[];
};

export function ServicesDropdown({ services }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
          event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-[var(--muted)] transition-colors hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        aria-controls="services-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        Layanan Kami
        <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16" fill="none">
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
        </svg>
      </button>

      {isOpen ? (
        <div
          id="services-navigation"
          aria-label="Menu layanan"
          className="absolute top-[calc(100%+0.5rem)] left-0 z-10 max-h-[calc(100dvh-7rem)] w-[22rem] overflow-y-auto rounded-2xl border border-[var(--border)] bg-white p-2 shadow-[var(--shadow-card)]"
        >
          <ul className="space-y-1">
            {services.map((service) => (
              <li key={service.href}>
                <InternalRouteLink
                  className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-[var(--surface-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  href={service.href}
                  onClick={closeMenu}
                >
                  <span className="block font-bold text-[var(--foreground)]">{service.label}</span>
                  <span className="mt-1 line-clamp-2 block text-xs leading-4 text-[var(--muted)]">
                    {service.summary}
                  </span>
                </InternalRouteLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
