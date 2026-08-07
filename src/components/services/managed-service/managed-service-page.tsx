import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type {
  ManagedServiceCapability,
  ManagedServiceFlowStep,
  ManagedServicePageContent,
} from "@/types/content";

type ManagedServicePageProps = {
  content: ManagedServicePageContent;
};

function OperationsVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/8 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)] sm:p-7"
    >
      <div className="absolute -top-16 -right-12 size-48 rounded-full bg-[var(--cyan)]/16 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
            Managed operations
          </p>
          <p className="mt-2 text-3xl leading-none font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Network overview
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-bold text-white/78">
          <span className="size-2 rounded-full bg-[var(--cyan)]" />
          Proaktif
        </span>
      </div>

      <svg className="relative mt-6 h-auto w-full" viewBox="0 0 420 176" fill="none">
        <path
          d="M18 112h54l22-36 31 68 32-95 34 83 28-48 26 28h157"
          stroke="#83e7ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18 30h384M18 80h384M18 130h384" stroke="white" strokeOpacity=".09" />
        {[72, 157, 219, 280, 352].map((cx) => (
          <circle key={cx} cx={cx} cy="112" r="5" fill="#0b3f70" stroke="#83e7ff" strokeWidth="2" />
        ))}
      </svg>

      <div className="relative grid grid-cols-3 gap-2.5 border-t border-white/12 pt-5">
        {[
          ["Monitor", "Kondisi"],
          ["Prevent", "Perawatan"],
          ["Resolve", "Penanganan"],
        ].map(([title, label]) => (
          <div
            key={title}
            className="min-w-0 rounded-2xl border border-white/10 bg-white/7 px-3 py-3"
          >
            <p className="truncate text-xs text-white/48">{label}</p>
            <p className="mt-1 truncate text-sm font-semibold text-white">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapabilityIcon({ id }: { id: ManagedServiceCapability["id"] }) {
  const paths = {
    monitoring: (
      <>
        <path d="M3 12h4l2.2-4.5 4 9 2.3-4.5H21" />
        <rect x="3" y="4" width="18" height="16" rx="3" />
      </>
    ),
    maintenance: (
      <>
        <path d="m14.5 5 4.5 4.5-9.5 9.5H5v-4.5L14.5 5Z" />
        <path d="m12 7.5 4.5 4.5M4 6h5M6.5 3.5v5" />
      </>
    ),
    infrastructure: (
      <>
        <rect x="4" y="3.5" width="16" height="5" rx="1.5" />
        <rect x="4" y="9.5" width="16" height="5" rx="1.5" />
        <rect x="4" y="15.5" width="16" height="5" rx="1.5" />
        <path d="M7 6h.01M7 12h.01M7 18h.01M10 6h7M10 12h7M10 18h7" />
      </>
    ),
    security: (
      <>
        <path d="M12 3.5 19 6v5.2c0 4.4-2.8 7.6-7 9.3-4.2-1.7-7-4.9-7-9.3V6l7-2.5Z" />
        <path d="m8.8 12 2.1 2.1 4.4-4.5" />
      </>
    ),
    sla: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2M8.5 3.8 7 2.5M15.5 3.8 17 2.5" />
      </>
    ),
    customers: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.25" />
        <path d="M3.8 19a5.2 5.2 0 0 1 10.4 0M14.3 15.3a4 4 0 0 1 5.9 3.4" />
      </>
    ),
    technology: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9h6v6H9zM9 1.8v2.1M15 1.8v2.1M9 20.1v2.1M15 20.1v2.1M1.8 9h2.1M1.8 15h2.1M20.1 9h2.1M20.1 15h2.1" />
      </>
    ),
    improvement: (
      <>
        <path d="M4 19V10m6 9V7m6 12V4m4 15H3" />
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

function FlowStep({ step, isLast }: { step: ManagedServiceFlowStep; isLast: boolean }) {
  return (
    <li className="relative flex gap-4 lg:block lg:min-w-0 lg:flex-1">
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute top-11 bottom-[-1rem] left-[1.375rem] w-px bg-[#bcd8e8] lg:top-[1.375rem] lg:right-[-1rem] lg:bottom-auto lg:left-[calc(50%+1.75rem)] lg:h-px lg:w-auto"
        />
      ) : null}
      <span className="relative z-[1] grid size-11 shrink-0 place-items-center rounded-2xl border border-[#bcd8e8] bg-[#e8f5fb] text-sm font-bold text-[var(--secondary)] shadow-sm lg:mx-auto">
        {String(step.sequence).padStart(2, "0")}
      </span>
      <div className="min-w-0 pb-4 lg:mt-4 lg:pb-0 lg:text-center">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">{step.title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
      </div>
    </li>
  );
}

export function ManagedServicePage({ content }: ManagedServicePageProps) {
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
              Managed Service
            </li>
          </ol>
        </nav>
      </Container>

      <section className="pt-7 pb-9 sm:pt-9 sm:pb-12" aria-labelledby="managed-service-heading">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#06172f_0%,#092d56_55%,#0a557e_100%)] px-6 py-9 text-white shadow-[0_22px_64px_rgb(7_27_54_/_20%)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="absolute -top-44 -right-28 size-[28rem] rounded-full border-[5rem] border-white/4"
            />
            <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-11">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                  {content.eyebrow}
                </p>
                <h1
                  id="managed-service-heading"
                  className="mt-4 max-w-[47rem] text-[2rem] leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3.25rem]"
                >
                  {content.title}
                </h1>
                <p className="mt-5 max-w-[44rem] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                  {content.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Ringkasan Managed Service">
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
              <OperationsVisual />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-15 lg:py-16" aria-labelledby="managed-flow-heading">
        <Container>
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.flow.eyebrow}
            </p>
            <h2
              id="managed-flow-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem]"
            >
              {content.flow.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
              {content.flow.description}
            </p>
          </div>
          <ol
            className="mt-8 rounded-[1.5rem] border border-[#cbdde9] bg-white p-5 shadow-[0_12px_34px_rgb(10_31_61_/_6%)] lg:flex lg:gap-8 lg:p-7"
            aria-label="Siklus Managed Service"
          >
            {content.flow.items.map((step, index) => (
              <FlowStep
                key={step.id}
                step={step}
                isLast={index === content.flow.items.length - 1}
              />
            ))}
          </ol>
        </Container>
      </section>

      <section
        id={content.capabilities.id}
        className="scroll-mt-28 bg-[var(--surface-subtle)] py-12 sm:py-16 lg:py-18"
        aria-labelledby="managed-capabilities-heading"
      >
        <Container>
          <div className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.capabilities.eyebrow}
            </p>
            <h2
              id="managed-capabilities-heading"
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
            aria-label="Delapan cakupan HARZNET Managed Service"
          >
            {content.capabilities.items.map((capability) => (
              <li key={capability.id} data-managed-capability className="h-full">
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
                  <h3 className="mt-5 text-xl leading-[1.25] font-semibold tracking-[-0.025em] text-[var(--foreground)]">
                    {capability.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--muted)] sm:text-base">
                    {capability.description}
                  </p>
                  <ul className="mt-4 space-y-2.5 border-t border-[#dbe6ee] pt-4 text-sm leading-6 text-[var(--foreground)] sm:text-[0.9375rem]">
                    {capability.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--secondary)]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="managed-commitment-heading">
        <Container>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#bcdbea] bg-[linear-gradient(135deg,#eaf7fd_0%,#f9fdff_58%,#e9f5fb_100%)] p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-center lg:gap-10 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 size-64 rounded-full bg-cyan-200/30 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
                {content.serviceCommitment.eyebrow}
              </p>
              <h2
                id="managed-commitment-heading"
                className="mt-3 text-[1.75rem] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
              >
                {content.serviceCommitment.title}
              </h2>
            </div>
            <p className="relative mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8 lg:mt-0">
              {content.serviceCommitment.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-18" aria-labelledby="managed-final-heading">
        <Container>
          <div className="rounded-[1.75rem] bg-[var(--foreground)] px-6 py-8 text-white sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[48rem]">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                {content.finalCta.eyebrow}
              </p>
              <h2
                id="managed-final-heading"
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
