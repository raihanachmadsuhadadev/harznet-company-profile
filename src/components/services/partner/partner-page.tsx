import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { PartnerBenefit, PartnerPageContent } from "@/types/content";

type PartnerPageProps = {
  content: PartnerPageContent;
};

function NetworkPartnerVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)] sm:p-7"
    >
      <div className="absolute -top-16 -right-12 size-48 rounded-full bg-[var(--cyan)]/16 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
            Jaringan kemitraan
          </p>
          <p className="mt-2 text-3xl leading-none font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Hingga 1 Gbps
          </p>
        </div>
        <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-bold text-white/78">
          18 pilihan
        </span>
      </div>

      <svg className="relative mt-6 h-auto w-full" viewBox="0 0 420 220" fill="none">
        <defs>
          <linearGradient id="partner-link" x1="70" y1="110" x2="350" y2="110">
            <stop stopColor="#83e7ff" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="#83e7ff" />
            <stop offset="1" stopColor="#83e7ff" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          d="M210 110 95 54M210 110 95 166M210 110l115-56M210 110l115 112"
          stroke="url(#partner-link)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="210" cy="110" r="46" fill="#0b3f70" stroke="#83e7ff" strokeWidth="3" />
        <circle cx="95" cy="54" r="28" fill="#0a315c" stroke="white" strokeOpacity=".58" />
        <circle cx="95" cy="166" r="28" fill="#0a315c" stroke="white" strokeOpacity=".58" />
        <circle cx="325" cy="54" r="28" fill="#0a315c" stroke="white" strokeOpacity=".58" />
        <circle cx="325" cy="166" r="28" fill="#0a315c" stroke="white" strokeOpacity=".58" />
        <text x="210" y="114" textAnchor="middle" fill="white" fontSize="17" fontWeight="700">
          HARZNET
        </text>
        <text x="95" y="58" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">
          RT/RW
        </text>
        <text x="95" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">
          ISP
        </text>
        <text x="325" y="58" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
          METRO
        </text>
        <text x="325" y="170" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
          DISTRIBUSI
        </text>
      </svg>

      <div className="relative grid grid-cols-2 gap-3 border-t border-white/12 pt-5 text-sm">
        <div>
          <p className="text-white/48">Program</p>
          <p className="mt-1 font-semibold text-white">Dedicated + Metro</p>
        </div>
        <div>
          <p className="text-white/48">Kapasitas</p>
          <p className="mt-1 font-semibold text-white">100 Mbps–1 Gbps</p>
        </div>
      </div>
    </div>
  );
}

function BenefitIcon({ id }: { id: PartnerBenefit["id"] }) {
  const paths = {
    operator: (
      <>
        <path d="M4 20V10m5 10V6m5 14V3m5 17V8" />
        <path d="M3 20h18" />
      </>
    ),
    isp: (
      <>
        <circle cx="8" cy="9" r="3" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M3.5 20a4.5 4.5 0 0 1 9 0M13 16.5a4 4 0 0 1 7.5 2" />
      </>
    ),
    distribution: (
      <>
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="m10.2 10.2-3.8-3.8m7.4 3.8 3.8-3.8m-7.4 7.4-3.8 3.8m7.4-3.8 3.8 3.8" />
      </>
    ),
    growth: (
      <>
        <path d="M5 19V10m7 9V6m7 13V3" />
        <path d="m4 8 6-4 4 2 6-4" />
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

export function PartnerPage({ content }: PartnerPageProps) {
  const bandwidthGroups = [
    content.program.bandwidthOptions.slice(0, 6),
    content.program.bandwidthOptions.slice(6, 12),
    content.program.bandwidthOptions.slice(12, 18),
  ];

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
              <Link className="rounded-sm hover:text-[var(--primary)]" href="/#layanan">
                Layanan
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-[var(--foreground)]">
              HARZNET Partner
            </li>
          </ol>
        </nav>
      </Container>

      <section className="pt-7 pb-9 sm:pt-9 sm:pb-12" aria-labelledby="partner-heading">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#06172f_0%,#092f5b_54%,#096589_100%)] px-6 py-9 text-white shadow-[0_22px_64px_rgb(7_27_54_/_20%)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="absolute -top-48 -right-28 size-[30rem] rounded-full border-[5rem] border-white/4"
            />
            <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:gap-11">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                  {content.eyebrow}
                </p>
                <h1
                  id="partner-heading"
                  className="mt-4 max-w-[45rem] text-[2rem] leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3.25rem]"
                >
                  {content.title}
                </h1>
                <p className="mt-5 max-w-[44rem] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                  {content.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Ringkasan HARZNET Partner">
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
                    className="whitespace-nowrap border-white bg-white !text-[var(--primary)] hover:border-[var(--cyan)] hover:bg-[#eefbff] sm:min-h-12 sm:px-6 sm:py-3 sm:text-base"
                  >
                    {content.primaryAction.label}
                  </ButtonLink>
                  <ButtonLink
                    href={content.secondaryAction.href}
                    variant="ghost"
                    className="whitespace-nowrap border-white/18 !px-4 !text-xs text-white hover:bg-white/10 sm:min-h-12 sm:!px-6 sm:py-3 sm:!text-base"
                  >
                    {content.secondaryAction.label}
                  </ButtonLink>
                </div>
              </div>
              <NetworkPartnerVisual />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-15 lg:py-16" aria-labelledby="partner-introduction-heading">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end lg:gap-12">
            <div className="max-w-[43rem]">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
                {content.introduction.eyebrow}
              </p>
              <h2
                id="partner-introduction-heading"
                className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
              >
                {content.introduction.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                {content.introduction.description}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2" aria-label="Manfaat program HARZNET Partner">
              {content.introduction.benefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className="flex items-center gap-4 rounded-[1.25rem] border border-[#cfdeea] bg-white p-4 shadow-[0_10px_28px_rgb(10_31_61_/_6%)] sm:p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#e7f4fb] text-[var(--secondary)]">
                    <BenefitIcon id={benefit.id} />
                  </span>
                  <h3 className="text-base leading-6 font-semibold text-[var(--foreground)]">
                    {benefit.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        id={content.program.id}
        className="scroll-mt-28 bg-[var(--surface-subtle)] py-12 sm:py-16 lg:py-18"
        aria-labelledby="partner-program-heading"
      >
        <Container>
          <div className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.program.eyebrow}
            </p>
            <h2
              id="partner-program-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {content.program.title}
            </h2>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.program.description}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-[#c7dae8] bg-white shadow-[0_18px_52px_rgb(10_31_61_/_9%)] lg:mt-10">
            <header className="flex flex-col gap-4 border-b border-white/10 bg-[linear-gradient(135deg,#092d56_0%,#0b527b_100%)] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
                  Daftar kapasitas
                </p>
                <p className="mt-2 text-xl font-semibold sm:text-2xl">18 pilihan bandwidth</p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-white/16 bg-white/10 px-3.5 py-2 text-xs font-bold text-white/88 sm:text-sm">
                {content.program.publicIpLabel}
              </span>
            </header>

            <ol
              className="grid gap-4 p-4 md:grid-cols-2 md:items-start sm:p-6 lg:grid-cols-3"
              aria-label="18 pilihan bandwidth HARZNET Partner"
            >
              {bandwidthGroups.map((group, groupIndex) => (
                <li
                  key={group[0]?.id}
                  className={groupIndex === 2 ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <ol
                    start={groupIndex * 6 + 1}
                    className={
                      groupIndex === 2 ? "grid gap-2 md:grid-cols-2 lg:grid-cols-1" : "grid gap-2"
                    }
                  >
                    {group.map((option) => (
                      <li
                        key={option.id}
                        data-bandwidth-option
                        className="group flex min-w-0 items-center gap-3 rounded-2xl border border-[#d8e5ee] bg-[#fbfdff] px-3.5 py-3.5 transition-colors hover:border-[var(--secondary)]/45 hover:bg-[#f2faff] sm:px-4"
                      >
                        <span
                          aria-hidden="true"
                          className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#e6f3fa] text-[0.6875rem] font-bold text-[var(--secondary)]"
                        >
                          {String(option.sequence).padStart(2, "0")}
                        </span>
                        <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <span className="text-base font-semibold text-[var(--primary)] sm:text-lg">
                            {option.bandwidth}
                          </span>
                          <span
                            aria-label={`Harga ${option.price}`}
                            className="text-sm font-bold whitespace-nowrap text-[var(--foreground)] sm:text-base"
                          >
                            {option.price}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ol>

            <div className="flex border-t border-[#d7e4ed] p-5 sm:justify-end sm:p-6">
              <ButtonLink className="w-full sm:w-auto" href={content.program.ctaHref}>
                {content.program.ctaLabel}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="partner-terms-heading">
        <Container>
          <div className="max-w-[48rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.terms.eyebrow}
            </p>
            <h2
              id="partner-terms-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem]"
            >
              {content.terms.title}
            </h2>
          </div>
          <ol
            className="mt-8 grid gap-3 md:grid-cols-2"
            aria-label="Syarat program HARZNET Partner"
          >
            {content.terms.items.map((term) => (
              <li
                key={term.id}
                className="flex items-start gap-4 rounded-[1.25rem] border border-[#cfdeea] bg-white p-4 shadow-[0_8px_24px_rgb(10_31_61_/_5%)] sm:p-5"
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--primary)] text-sm font-bold text-white"
                >
                  {String(term.sequence).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                  {term.description}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-5 rounded-2xl border border-[#c7dfed] bg-[#edf8fd] px-4 py-3 text-sm font-medium leading-6 text-[var(--foreground)] sm:px-5">
            {content.terms.note}
          </p>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16" aria-labelledby="partner-technology-heading">
        <Container>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#bcdbea] bg-[linear-gradient(135deg,#eaf7fd_0%,#f7fcff_58%,#e9f5fb_100%)] p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-10 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 size-64 rounded-full bg-cyan-200/30 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
                {content.technology.eyebrow}
              </p>
              <h2
                id="partner-technology-heading"
                className="mt-3 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
              >
                {content.technology.title}
              </h2>
            </div>
            <p className="relative mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8 lg:mt-0">
              {content.technology.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-18" aria-labelledby="partner-final-heading">
        <Container>
          <div className="rounded-[1.75rem] bg-[var(--foreground)] px-6 py-8 text-white sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[48rem]">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                {content.finalCta.eyebrow}
              </p>
              <h2
                id="partner-final-heading"
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
            >
              {content.finalCta.action.label}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
