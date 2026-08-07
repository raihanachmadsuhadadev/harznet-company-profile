import Link from "next/link";

import { Container } from "@/components/ui/container";
import { InternalRouteLink } from "@/components/ui/internal-route-link";
import type { QuestionnairePageContent } from "@/types/content";

type QuestionnairePageProps = {
  content: QuestionnairePageContent;
};

export function QuestionnairePage({ content }: QuestionnairePageProps) {
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
                href="/kuesioner/"
              >
                Kuesioner
              </InternalRouteLink>
            </li>
          </ol>
        </nav>
      </Container>

      <section className="pt-8 pb-12 sm:pt-10 sm:pb-16" aria-labelledby="questionnaire-heading">
        <Container>
          <header className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.eyebrow}
            </p>
            <h1
              id="questionnaire-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.04em] text-balance sm:text-[2.75rem] lg:text-5xl"
            >
              {content.title}
            </h1>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.description}
            </p>
            <ul
              className="mt-6 grid max-w-[48rem] gap-3 sm:grid-cols-2"
              aria-label="Informasi pengisian"
            >
              {content.notes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 rounded-2xl border border-[#d4e2eb] bg-[var(--surface-subtle)] px-4 py-3.5 text-sm leading-6 text-[var(--foreground)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--secondary)] text-xs font-bold text-white"
                  >
                    ✓
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </header>

          <div className="mx-auto mt-8 max-w-[62rem] sm:mt-10">
            <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-[#d4e2eb] bg-[#f4f9fc] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5">
              <p className="text-sm leading-6 text-[var(--muted)]">{content.fallbackText}</p>
              <a
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 text-sm font-bold text-white outline-none transition-colors hover:bg-[var(--secondary)] focus-visible:ring-4 focus-visible:ring-[var(--secondary)]/25"
                href={content.fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.fallbackLabel}
                <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M14 5h5v5m0-5-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#cbdde9] bg-white p-2 shadow-[0_16px_44px_rgb(10_31_61_/_8%)] sm:p-3">
              <iframe
                allowFullScreen
                className="block h-[2800px] w-full border-0 sm:h-[2700px] md:h-[2460px] lg:h-[2380px] xl:h-[2280px]"
                frameBorder="0"
                loading="lazy"
                marginHeight={0}
                marginWidth={0}
                src={content.embedUrl}
                title={content.iframeTitle}
                width="100%"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
