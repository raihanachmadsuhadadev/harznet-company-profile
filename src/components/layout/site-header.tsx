import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ServicesDropdown } from "@/components/layout/services-dropdown";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InternalRouteLink } from "@/components/ui/internal-route-link";
import { loginLink, primaryNavigation, serviceNavigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--primary)]/25 bg-white/96 shadow-sm backdrop-blur-sm">
      <Container className="relative flex min-h-[6.5rem] items-center justify-between gap-4 py-2 lg:min-h-[5.25rem]">
        <Link
          href="/"
          className="inline-flex w-[12.5rem] shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:w-[13.5rem] lg:w-64"
          aria-label="HARZNET Group - Powered by Cemerlang Internet Indonesia"
        >
          <Image
            src="/images/harznet-logo.png"
            alt="HARZNET Group - Powered by Cemerlang Internet Indonesia"
            width={7795}
            height={2023}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            <li>
              <Link
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-[var(--muted)] transition-colors hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                href={primaryNavigation[0].href}
              >
                {primaryNavigation[0].label}
              </Link>
            </li>
            <li>
              <ServicesDropdown services={serviceNavigation} />
            </li>
            {primaryNavigation.slice(1).map((item) => (
              <li key={item.href}>
                <InternalRouteLink
                  className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-[var(--muted)] transition-colors hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  href={item.href}
                >
                  {item.label}
                </InternalRouteLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={loginLink.href}>{loginLink.label}</ButtonLink>
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}
