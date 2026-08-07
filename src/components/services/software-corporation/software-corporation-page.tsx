import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type {
  SoftwareCorporationCapability,
  SoftwareCorporationFocus,
  SoftwareCorporationPageContent,
} from "@/types/content";

type SoftwareCorporationPageProps = {
  content: SoftwareCorporationPageContent;
};

function DigitalProductVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)] sm:p-7"
    >
      <div className="absolute -top-16 -right-12 size-48 rounded-full bg-[var(--cyan)]/16 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
            Digital workspace
          </p>
          <p className="mt-2 text-3xl leading-none font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Connected system
          </p>
        </div>
        <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-bold text-white/78">
          Web · Mobile
        </span>
      </div>

      <div className="relative mt-7 grid grid-cols-[minmax(0,1fr)_4.5rem] items-end gap-4">
        <div className="overflow-hidden rounded-[1.25rem] border border-white/16 bg-[#0b315b]/80 shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
            <span className="size-1.5 rounded-full bg-[var(--cyan)]" />
            <span className="size-1.5 rounded-full bg-white/24" />
            <span className="size-1.5 rounded-full bg-white/24" />
          </div>
          <div className="grid grid-cols-[3.5rem_1fr] gap-3 p-3">
            <div className="space-y-2 rounded-xl bg-white/7 p-2">
              <span className="block h-2 rounded-full bg-[var(--cyan)]/55" />
              <span className="block h-2 rounded-full bg-white/14" />
              <span className="block h-2 rounded-full bg-white/14" />
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <span className="h-11 rounded-xl bg-white/10" />
                <span className="h-11 rounded-xl bg-white/10" />
                <span className="h-11 rounded-xl bg-[var(--cyan)]/18" />
              </div>
              <svg className="h-16 w-full" viewBox="0 0 220 64" fill="none">
                <path
                  d="M4 49 44 31l33 9 37-28 42 19 60-22"
                  stroke="#83e7ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M4 58h212" stroke="white" strokeOpacity=".12" />
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.125rem] border border-white/18 bg-[#0b315b] p-2 shadow-xl">
          <div className="mx-auto h-1 w-5 rounded-full bg-white/20" />
          <div className="mt-2 space-y-2 rounded-xl bg-white/8 p-2">
            <span className="block h-7 rounded-lg bg-[var(--cyan)]/20" />
            <span className="block h-3 rounded-full bg-white/16" />
            <span className="block h-3 w-3/4 rounded-full bg-white/12" />
            <span className="block h-8 rounded-lg bg-white/9" />
          </div>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-2.5 border-t border-white/12 pt-5 text-sm">
        {[
          ["Web", "Application"],
          ["Mobile", "Application"],
          ["AI & IoT", "Integration"],
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

function CapabilityIcon({ id }: { id: SoftwareCorporationCapability["id"] }) {
  const paths = {
    web: (
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 8.5h17m-11 3.25-2.25 2.25 2.25 2.25m5-4.5 2.25 2.25-2.25 2.25" />
      </>
    ),
    mobile: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10 5h4M11 18.5h2" />
      </>
    ),
    enterprise: (
      <>
        <rect x="3.5" y="4" width="7" height="6" rx="1.5" />
        <rect x="13.5" y="14" width="7" height="6" rx="1.5" />
        <path d="M10.5 7h3a3 3 0 0 1 3 3v4M13.5 17h-3a3 3 0 0 1-3-3v-4" />
      </>
    ),
    "ai-iot": (
      <>
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M9.5 12h5M12 9.5v5M9 2.5v3M15 2.5v3M9 18.5v3M15 18.5v3M2.5 9h3M2.5 15h3M18.5 9h3M18.5 15h3" />
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

function FocusIcon({ id }: { id: SoftwareCorporationFocus["id"] }) {
  const paths = {
    efficiency: <path d="M5 19V9m7 10V5m7 14V3M3 19h18" />,
    productivity: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    tailored: (
      <>
        <path d="M12 3.5 14.3 8l4.7.7-3.4 3.4.8 4.8-4.4-2.3-4.4 2.3.8-4.8L5 8.7 9.7 8 12 3.5Z" />
        <circle cx="12" cy="12" r="2" />
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

export function SoftwareCorporationPage({ content }: SoftwareCorporationPageProps) {
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
              Software Corporation
            </li>
          </ol>
        </nav>
      </Container>

      <section
        className="pt-7 pb-9 sm:pt-9 sm:pb-12"
        aria-labelledby="software-corporation-heading"
      >
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#06172f_0%,#092d56_54%,#0a5a84_100%)] px-6 py-9 text-white shadow-[0_22px_64px_rgb(7_27_54_/_20%)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="absolute -top-44 -right-28 size-[28rem] rounded-full border-[5rem] border-white/4"
            />
            <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:gap-11">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                  {content.eyebrow}
                </p>
                <h1
                  id="software-corporation-heading"
                  className="mt-4 max-w-[47rem] text-[2rem] leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3.25rem]"
                >
                  {content.title}
                </h1>
                <p className="mt-5 max-w-[44rem] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                  {content.description}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2.5"
                  aria-label="Ringkasan Software Corporation"
                >
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
              <DigitalProductVisual />
            </div>
          </div>
        </Container>
      </section>

      <section
        id={content.capabilities.id}
        className="scroll-mt-28 bg-[var(--surface-subtle)] py-12 sm:py-16 lg:py-18"
        aria-labelledby="software-capabilities-heading"
      >
        <Container>
          <div className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.capabilities.eyebrow}
            </p>
            <h2
              id="software-capabilities-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {content.capabilities.title}
            </h2>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.capabilities.description}
            </p>
          </div>
          <ol
            className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-10 lg:gap-5"
            aria-label="Empat layanan Software Corporation"
          >
            {content.capabilities.items.map((capability) => (
              <li key={capability.id} data-software-capability className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#cbdde9] bg-white p-5 shadow-[0_12px_34px_rgb(10_31_61_/_6%)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--secondary)]/50 hover:shadow-[0_18px_42px_rgb(10_31_61_/_10%)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--cyan)] opacity-80"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#e7f4fb] text-[var(--secondary)] ring-1 ring-[#d1e5f1]">
                      <CapabilityIcon id={capability.id} />
                    </span>
                    <span className="rounded-full border border-[#d4e2ec] bg-[#f7fbfe] px-3 py-1 text-xs font-bold tracking-[0.14em] text-[var(--primary)]">
                      {String(capability.sequence).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl leading-[1.25] font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                    {capability.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="software-focus-heading">
        <Container>
          <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#071b35_0%,#0a315c_62%,#0b527b_100%)] p-6 text-white shadow-[0_18px_48px_rgb(10_31_61_/_14%)] sm:p-8 lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-10 lg:p-10">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                {content.focus.eyebrow}
              </p>
              <h2
                id="software-focus-heading"
                className="mt-3 text-[1.875rem] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
              >
                {content.focus.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/66 sm:text-lg">
                {content.focus.description}
              </p>
            </div>
            <ul
              className="mt-7 grid gap-3 sm:grid-cols-3 lg:mt-0"
              aria-label="Fokus pengembangan Software Corporation"
            >
              {content.focus.items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-[1.25rem] border border-white/12 bg-white/8 p-4 sm:p-5"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-[var(--cyan)]">
                    <FocusIcon id={item.id} />
                  </span>
                  <h3 className="mt-4 text-base leading-6 font-semibold text-white">
                    {item.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16" aria-labelledby="software-approach-heading">
        <Container>
          <div className="max-w-[48rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.approach.eyebrow}
            </p>
            <h2
              id="software-approach-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem]"
            >
              {content.approach.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
              {content.approach.description}
            </p>
          </div>
          <ol
            className="mt-8 grid gap-4 lg:grid-cols-3"
            aria-label="Pendekatan Software Corporation"
          >
            {content.approach.items.map((step) => (
              <li
                key={step.id}
                className="relative rounded-[1.375rem] border border-[#cbdde9] bg-white p-5 shadow-[0_10px_30px_rgb(10_31_61_/_6%)] sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-xl bg-[var(--primary)] text-sm font-bold text-white"
                >
                  {String(step.sequence).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl leading-[1.25] font-semibold tracking-[-0.025em] text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pb-14 sm:pb-18" aria-labelledby="software-final-heading">
        <Container>
          <div className="rounded-[1.75rem] bg-[var(--foreground)] px-6 py-8 text-white sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[48rem]">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                {content.finalCta.eyebrow}
              </p>
              <h2
                id="software-final-heading"
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
