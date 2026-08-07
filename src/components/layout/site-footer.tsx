import Link from "next/link";

import { Container } from "@/components/ui/container";
import { InternalRouteLink } from "@/components/ui/internal-route-link";
import {
  footerInformationNavigation,
  footerLegalNavigation,
  footerNavigation,
  services,
  siteIdentity,
  socialLinks,
} from "@/content/site";
import type { SocialIconKey } from "@/types/content";

function SocialIcon({ icon }: { icon: SocialIconKey }) {
  const commonProps = {
    "aria-hidden": true,
    className: "size-5",
    viewBox: "0 0 24 24",
  } as const;

  if (icon === "instagram") {
    return (
      <svg {...commonProps} fill="none">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg {...commonProps} fill="currentColor">
        <path d="M13.7 21v-8h2.8l.4-3.1h-3.2V8c0-.9.3-1.6 1.6-1.6H17V3.6c-.7-.1-1.5-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.3H8V13h2.5v8h3.2Z" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg {...commonProps} fill="currentColor">
        <path d="M14.2 3h3.1c.2 1.7 1.2 3.1 2.7 3.9v3.2a8.2 8.2 0 0 1-2.8-1v5.6a6.3 6.3 0 1 1-6.3-6.3h.9v3.2a3.1 3.1 0 1 0 2.4 3V3Z" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg {...commonProps} fill="none">
        <rect x="3" y="5.5" width="18" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="m10.5 9 5 3-5 3V9Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} fill="currentColor">
      <path d="M6.1 8.1H3.2V21h2.9V8.1ZM4.6 3a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 4.6 3ZM13 8.1h-2.8V21H13v-6.4c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h2.9v-7c0-3.4-.7-6.1-4.8-6.1-1.9 0-3.2 1-3.7 2h-.1V8.1H13Z" />
    </svg>
  );
}

function isValidSocialHref(href: string | null): href is string {
  if (!href) return false;

  try {
    const url = new URL(href);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

const footerLinkClassName =
  "inline-flex min-h-10 items-center text-sm leading-5 text-white/68 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline-none";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--foreground)] text-white">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-8 pt-12 pb-9 md:grid-cols-3 md:gap-x-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(8.75rem,0.75fr)_minmax(11.25rem,0.95fr)_minmax(9.375rem,0.75fr)] lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
        <div className="col-span-2 max-w-[23rem] md:col-span-3 lg:col-span-1">
          <p className="text-xl font-extrabold tracking-[0.12em] sm:text-[1.375rem]">
            {siteIdentity.brand}
          </p>
          <p className="mt-2 text-sm font-semibold text-white/82">{siteIdentity.company}</p>
          <p className="mt-3 text-sm leading-6 text-white/64">{siteIdentity.description}</p>

          <p className="mt-5 text-xs font-bold tracking-[0.14em] text-white/52 uppercase">
            Ikuti HARZNET
          </p>
          <ul aria-label="Media sosial HARZNET" className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <li key={item.id}>
                {isValidSocialHref(item.href) ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka ${item.label} HARZNET`}
                    className="grid size-10 place-items-center rounded-xl border border-white/14 bg-white/8 text-white/78 transition-[background-color,color,transform] hover:-translate-y-px hover:bg-[var(--secondary)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]"
                  >
                    <SocialIcon icon={item.icon} />
                  </a>
                ) : (
                  <span
                    role="img"
                    aria-label={`${item.label} HARZNET — tautan belum tersedia`}
                    title="Tautan segera tersedia"
                    className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/6 text-white/70"
                  >
                    <SocialIcon icon={item.icon} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="text-sm font-bold tracking-[0.02em]">Navigasi</h2>
          <ul className="mt-3 space-y-0.5">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <InternalRouteLink className={footerLinkClassName} href={item.href}>
                  {item.label}
                </InternalRouteLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Layanan footer">
          <h2 className="text-sm font-bold tracking-[0.02em]">Layanan</h2>
          <ul className="mt-3 space-y-0.5">
            {services.map((service) => (
              <li key={service.name}>
                <InternalRouteLink className={footerLinkClassName} href={service.href}>
                  {service.name}
                </InternalRouteLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informasi footer">
          <h2 className="text-sm font-bold tracking-[0.02em]">Informasi</h2>
          <ul className="mt-3 space-y-0.5">
            {footerInformationNavigation.map((item) => (
              <li key={item.href}>
                <InternalRouteLink className={footerLinkClassName} href={item.href}>
                  {item.label}
                </InternalRouteLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs leading-5 text-white/56 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>
            © {new Date().getFullYear()} {siteIdentity.company}. Seluruh hak dilindungi.
          </p>
          <nav aria-label="Legal footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {footerLegalNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center text-white/64 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
