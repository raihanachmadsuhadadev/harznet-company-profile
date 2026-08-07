import Link from "next/link";

import { InformationPosterGallery } from "@/components/information/information-poster-gallery";
import { Container } from "@/components/ui/container";
import { InternalRouteLink } from "@/components/ui/internal-route-link";
import type { InformationPageContent } from "@/types/content";

type InformationPageProps = {
  content: InformationPageContent;
};

export function InformationPage({ content }: InformationPageProps) {
  return (
    <>
      <Container>
        <nav aria-label="Breadcrumb" className="pt-7 text-sm text-[var(--muted)] sm:pt-9">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link className="rounded-sm hover:text-[var(--primary)]" href="/">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <InternalRouteLink
                aria-current="page"
                className="rounded-sm font-semibold text-[var(--foreground)]"
                href="/informasi/"
              >
                Informasi
              </InternalRouteLink>
            </li>
          </ol>
        </nav>
      </Container>

      <section className="pt-8 pb-12 sm:pt-10 sm:pb-16" aria-labelledby="information-heading">
        <Container>
          <header className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.eyebrow}
            </p>
            <h1
              id="information-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.04em] text-balance sm:text-[2.75rem] lg:text-5xl"
            >
              {content.title}
            </h1>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.description}
            </p>
          </header>

          <InformationPosterGallery posters={content.posters} />
        </Container>
      </section>
    </>
  );
}
