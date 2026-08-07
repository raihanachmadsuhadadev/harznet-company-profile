import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { InternalRouteLink } from "@/components/ui/internal-route-link";
import type { AboutCompanyCommitment, AboutCompanyPageContent } from "@/types/content";

type AboutCompanyPageProps = {
  content: AboutCompanyPageContent;
};

function CompanyNetworkVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)] sm:p-7"
    >
      <div className="absolute -top-16 -right-14 size-52 rounded-full bg-[var(--cyan)]/16 blur-3xl" />
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
            Cirebon, Indonesia
          </p>
          <p className="mt-2 text-2xl leading-none font-semibold tracking-[-0.035em] text-white sm:text-3xl">
            Connected community
          </p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/14 bg-white/8 text-[var(--cyan)]">
          <svg className="size-6" fill="none" viewBox="0 0 24 24">
            <path
              d="M4 20V8.5L12 4l8 4.5V20M8 20v-4h8v4M8 10h1m6 0h1m-8 3h1m6 0h1"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        </span>
      </div>

      <svg className="relative mt-7 h-auto w-full" fill="none" viewBox="0 0 440 250">
        <defs>
          <linearGradient id="about-network-line" x1="52" y1="208" x2="386" y2="38">
            <stop stopColor="#5BD9F4" stopOpacity=".2" />
            <stop offset=".5" stopColor="#7DE8FF" />
            <stop offset="1" stopColor="#5BD9F4" stopOpacity=".25" />
          </linearGradient>
        </defs>
        <path
          d="M55 198 143 144l78 33 85-101 80 51"
          stroke="url(#about-network-line)"
          strokeDasharray="5 7"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M168 202v-77l53-28 54 28v77m-81 0v-40h54v40M186 136h13m43 0h13m-69 14h13m43 0h13"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity=".76"
          strokeWidth="3"
        />
        <g fill="#091f3b" stroke="#83e7ff" strokeWidth="3">
          <circle cx="55" cy="198" r="18" />
          <circle cx="143" cy="144" r="15" />
          <circle cx="306" cy="76" r="16" />
          <circle cx="386" cy="127" r="18" />
        </g>
        <g stroke="#83e7ff" strokeLinecap="round" strokeWidth="2.4">
          <path d="M47 202c3-6 13-6 16 0m-8-14a5 5 0 1 1 0 10" />
          <path d="M136 148c2-5 11-5 14 0m-7-12a4 4 0 1 1 0 8" />
          <path d="M299 80c3-5 11-5 14 0m-7-13a4 4 0 1 1 0 8" />
          <path d="M378 131c3-6 13-6 16 0m-8-14a5 5 0 1 1 0 10" />
        </g>
        <path d="M34 219h372" stroke="white" strokeOpacity=".1" />
      </svg>

      <div className="relative grid grid-cols-3 gap-2.5 border-t border-white/12 pt-5 text-sm">
        {[
          ["Rumah", "Konektivitas"],
          ["Usaha", "Produktivitas"],
          ["Perusahaan", "Operasional"],
        ].map(([title, label]) => (
          <div key={title} className="min-w-0">
            <p className="truncate text-xs text-white/48">{label}</p>
            <p className="mt-1 truncate font-semibold text-white">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MissionIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="m7.5 12 3 3 6-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CommitmentIcon({ id }: { id: AboutCompanyCommitment["id"] }) {
  const paths = {
    quality: (
      <>
        <path d="m12 3 2.3 2.2 3.2-.2.5 3.2 2.4 2.1-1.7 2.7.8 3.1-3 1.2-1.4 2.9-2.8-1.5-2.8 1.5-1.4-2.9-3-1.2.8-3.1-1.7-2.7L6 8.2 6.5 5l3.2.2L12 3Z" />
        <path d="m9.3 12 1.8 1.8 3.7-3.9" />
      </>
    ),
    innovation: (
      <path d="M9 18h6m-5 3h4m-6.5-7.5A6 6 0 1 1 16.5 13.5C15.5 14.3 15 15 15 16H9c0-1-.5-1.7-1.5-2.5Z" />
    ),
    satisfaction: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 10h.01M15.5 10h.01M8.5 14c1.9 2 5.1 2 7 0" />
      </>
    ),
    transformation: (
      <>
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="m8.2 10.8 7.5-3.6m-7.5 6 7.5 3.6" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
        {paths[id]}
      </g>
    </svg>
  );
}

export function AboutCompanyPage({ content }: AboutCompanyPageProps) {
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
                href="/tentang-kami/"
              >
                Tentang Kami
              </InternalRouteLink>
            </li>
          </ol>
        </nav>
      </Container>

      <section className="pt-7 pb-10 sm:pt-9 sm:pb-12" aria-labelledby="about-company-heading">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#06172f_0%,#092d56_54%,#0a5a84_100%)] px-6 py-9 text-white shadow-[0_22px_64px_rgb(7_27_54_/_20%)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="absolute -top-44 -right-28 size-[28rem] rounded-full border-[5rem] border-white/4"
            />
            <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)] lg:gap-11">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                  {content.eyebrow}
                </p>
                <h1
                  id="about-company-heading"
                  className="mt-4 max-w-[46rem] text-[2rem] leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3.25rem]"
                >
                  {content.title}
                </h1>
                <p className="mt-5 max-w-[44rem] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                  {content.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Ringkasan perusahaan">
                  {content.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-white/14 bg-white/8 px-3.5 py-2 text-sm font-semibold text-white/88"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ButtonLink
                    href={content.primaryAction.href}
                    className="border-white bg-white !text-[var(--primary)] hover:border-[var(--cyan)] hover:bg-[#eefbff]"
                    size="large"
                  >
                    {content.primaryAction.label}
                  </ButtonLink>
                  <ButtonLink
                    href={content.secondaryAction.href}
                    variant="ghost"
                    className="border-white/18 text-white hover:bg-white/10"
                    size="large"
                  >
                    {content.secondaryAction.label}
                  </ButtonLink>
                </div>
              </div>
              <CompanyNetworkVisual />
            </div>
          </div>
        </Container>
      </section>

      <section
        id={content.overview.id}
        className="scroll-mt-28 bg-[var(--surface-subtle)] py-12 sm:py-16"
        aria-labelledby="about-overview-heading"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
                {content.overview.eyebrow}
              </p>
              <h2
                id="about-overview-heading"
                className="mt-3 max-w-[46rem] text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
              >
                {content.overview.title}
              </h2>
              <div className="mt-5 max-w-[46rem] space-y-3 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                {content.overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Kebutuhan yang didukung">
                {content.overview.solutions.map((solution) => (
                  <li
                    key={solution}
                    className="flex items-start gap-3 rounded-2xl border border-[#d4e2ec] bg-white px-4 py-3 text-sm font-semibold text-[var(--foreground)] sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--secondary)]"
                    />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

            <aside
              className="rounded-[1.5rem] border border-[#cbdde9] bg-white p-5 shadow-[0_14px_40px_rgb(10_31_61_/_7%)] sm:p-6"
              aria-label="Ringkasan perusahaan"
            >
              <p className="text-sm font-bold tracking-[0.15em] text-[var(--secondary)] uppercase">
                Identitas perusahaan
              </p>
              <dl className="mt-4 divide-y divide-[#dce7ee]">
                {content.overview.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid gap-1 py-3.5 sm:grid-cols-[8rem_1fr] sm:gap-4"
                  >
                    <dt className="text-sm font-semibold text-[var(--muted)]">{fact.label}</dt>
                    <dd className="text-sm leading-6 font-semibold text-[var(--foreground)] sm:text-base">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="about-direction-heading">
        <Container>
          <div className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.direction.eyebrow}
            </p>
            <h2
              id="about-direction-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {content.direction.title}
            </h2>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.direction.description}
            </p>
          </div>

          <article className="mt-8 overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#071b35_0%,#0a315c_62%,#0b527b_100%)] p-6 text-white shadow-[0_18px_48px_rgb(10_31_61_/_14%)] sm:p-8 lg:grid lg:grid-cols-[minmax(11rem,0.36fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:p-10">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-[var(--cyan)]">
                <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </span>
              <p className="mt-4 text-sm font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
                Visi perusahaan
              </p>
            </div>
            <p className="mt-5 text-xl leading-8 font-semibold tracking-[-0.02em] text-balance sm:text-2xl sm:leading-9 lg:mt-0">
              {content.direction.vision}
            </p>
          </article>

          <ol
            className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            aria-label="Enam misi perusahaan"
          >
            {content.direction.missions.map((mission) => (
              <li
                key={mission.id}
                data-about-mission
                className="flex items-start gap-3 rounded-[1.25rem] border border-[#cbdde9] bg-white p-5 shadow-[0_10px_30px_rgb(10_31_61_/_5%)]"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#e7f4fb] text-[var(--secondary)]">
                  <MissionIcon />
                </span>
                <div>
                  <span className="text-xs font-bold tracking-[0.12em] text-[var(--secondary)]">
                    {String(mission.sequence).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base leading-6 font-semibold text-[var(--foreground)]">
                    {mission.title}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="bg-[var(--surface-subtle)] py-12 sm:py-16"
        aria-labelledby="about-history-heading"
      >
        <Container>
          <div className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.history.eyebrow}
            </p>
            <h2
              id="about-history-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {content.history.title}
            </h2>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.history.description}
            </p>
          </div>

          <ol className="relative mt-8 grid gap-4 lg:grid-cols-3" aria-label="Sejarah perusahaan">
            {content.history.items.map((item, index) => (
              <li
                key={item.id}
                className="relative rounded-[1.375rem] border border-[#cbdde9] bg-white p-5 shadow-[0_10px_30px_rgb(10_31_61_/_5%)] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-sm font-bold text-white"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-bold text-[var(--secondary)]">{item.marker}</p>
                </div>
                <h3 className="mt-5 text-xl leading-[1.25] font-semibold tracking-[-0.025em] text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="about-commitment-heading">
        <Container>
          <div className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.commitments.eyebrow}
            </p>
            <h2
              id="about-commitment-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {content.commitments.title}
            </h2>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.commitments.description}
            </p>
          </div>
          <ul
            className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2"
            aria-label="Empat komitmen perusahaan"
          >
            {content.commitments.items.map((item) => (
              <li key={item.id} data-about-commitment className="h-full">
                <article className="flex h-full items-start gap-4 rounded-[1.375rem] border border-[#cbdde9] bg-white p-5 shadow-[0_10px_30px_rgb(10_31_61_/_5%)] sm:p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#e7f4fb] text-[var(--secondary)] ring-1 ring-[#d1e5f1]">
                    <CommitmentIcon id={item.id} />
                  </span>
                  <div>
                    <h3 className="text-xl leading-[1.25] font-semibold tracking-[-0.025em] text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-14 sm:pb-18" aria-labelledby="about-final-heading">
        <Container>
          <div className="rounded-[1.75rem] bg-[var(--foreground)] px-6 py-8 text-white sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[48rem]">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                {content.finalCta.eyebrow}
              </p>
              <h2
                id="about-final-heading"
                className="mt-3 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
              >
                {content.finalCta.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-white/68 sm:text-lg">
                {content.finalCta.description}
              </p>
            </div>
            <ButtonLink
              href={content.finalCta.action.href}
              className="mt-6 w-full shrink-0 border-white bg-white !text-[var(--primary)] hover:border-[var(--cyan)] hover:bg-[#eefbff] sm:w-auto lg:mt-0"
              size="large"
            >
              {content.finalCta.action.label}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
