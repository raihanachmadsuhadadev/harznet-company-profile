"use client";

import Link from "next/link";
import { useState } from "react";

import { InternalRouteLink } from "@/components/ui/internal-route-link";
import { loginLink, primaryNavigation, serviceNavigation } from "@/content/site";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {isOpen ? "×" : "≡"}
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi seluler"
          className="absolute top-[calc(100%+0.5rem)] right-0 left-0 z-10 max-h-[calc(100dvh-7rem)] overflow-x-hidden overflow-y-auto rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-2 shadow-[var(--shadow-card)]"
        >
          <ul className="flex flex-col">
            <li>
              <Link
                className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--surface-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                href={primaryNavigation[0].href}
                onClick={closeMenu}
              >
                {primaryNavigation[0].label}
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex min-h-11 w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--surface-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                aria-controls="mobile-services-navigation"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((current) => !current)}
              >
                Layanan Kami
                <svg aria-hidden="true" className="size-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="m4 6 4 4 4-4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.75"
                  />
                </svg>
              </button>
              {isServicesOpen ? (
                <ul
                  id="mobile-services-navigation"
                  className="mt-0.5 space-y-0.5 border-l border-[var(--border)] pl-2"
                >
                  {serviceNavigation.map((service) => (
                    <li key={service.href}>
                      <InternalRouteLink
                        className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold text-[var(--muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                        href={service.href}
                        onClick={closeMenu}
                      >
                        {service.label}
                      </InternalRouteLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            {primaryNavigation.slice(1).map((item) => (
              <li key={item.href}>
                <InternalRouteLink
                  className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--surface-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </InternalRouteLink>
              </li>
            ))}
            <li className="mt-1.5 border-t border-[var(--border)] pt-2">
              <Link
                className="flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                href={loginLink.href}
                onClick={closeMenu}
              >
                {loginLink.label}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
