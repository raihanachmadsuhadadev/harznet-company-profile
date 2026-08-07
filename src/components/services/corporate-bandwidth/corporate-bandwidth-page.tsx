import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type {
  CorporateBandwidthCategory,
  CorporateBandwidthPageContent,
  CorporateBandwidthUseCase,
} from "@/types/content";

type CorporateBandwidthPageProps = {
  content: CorporateBandwidthPageContent;
};

function EnterpriseVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-[1.625rem] border border-white/14 bg-white/8 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)] sm:p-7"
    >
      <div className="absolute -top-20 -right-20 size-56 rounded-full bg-[var(--cyan)]/16 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
            Kapasitas layanan
          </p>
          <p className="mt-2 text-4xl leading-none font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            500 Mbps
          </p>
          <p className="mt-2 text-sm leading-6 text-white/62">
            Kapasitas tertinggi dalam pilihan layanan.
          </p>
        </div>
        <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-xs font-bold text-white/78">
          02 kategori
        </span>
      </div>

      <svg className="relative mt-7 h-auto w-full text-[var(--cyan)]" viewBox="0 0 420 170">
        <defs>
          <linearGradient id="corporate-data-line" x1="0" x2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          d="M42 84h74l38-42h112l38 42h74M116 84l38 44h112l38-44"
          fill="none"
          stroke="url(#corporate-data-line)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path d="M154 42v86M266 42v86" stroke="white" strokeDasharray="5 7" strokeOpacity="0.28" />
        {["42,84", "116,84", "154,42", "154,128", "266,42", "266,128", "304,84", "378,84"].map(
          (point) => {
            const [cx, cy] = point.split(",");
            return (
              <circle
                key={point}
                cx={cx}
                cy={cy}
                r="7"
                fill="#0a315c"
                stroke="currentColor"
                strokeWidth="3"
              />
            );
          },
        )}
      </svg>

      <div className="relative mt-5 grid grid-cols-2 gap-3 border-t border-white/12 pt-5 text-sm">
        <div>
          <p className="text-white/48">Pilihan awal</p>
          <p className="mt-1 font-semibold text-white">25 Mbps</p>
        </div>
        <div>
          <p className="text-white/48">Teknologi</p>
          <p className="mt-1 font-semibold text-white">DWDM</p>
        </div>
      </div>
    </div>
  );
}

function RegistrationIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8 9h8M8 13h5M8 16h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="m16 14 1.5 1.5L20 13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CategoryPanel({ category }: { category: CorporateBandwidthCategory }) {
  const usesWideGrid = category.packages.length > 5;

  return (
    <article className="overflow-hidden rounded-[1.625rem] border border-[#c8dae8] bg-white shadow-[0_18px_48px_rgb(10_31_61_/_8%)]">
      <header className="border-b border-[#d7e4ed] bg-[linear-gradient(135deg,#f8fcff_0%,#edf7fc_100%)] p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[46rem]">
            <h3 className="text-2xl leading-tight font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">
              {category.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
              {category.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-48 sm:justify-end">
            <span className="inline-flex min-h-8 items-center rounded-full border border-[#c9dce9] bg-white px-3 py-1 text-xs font-bold text-[var(--secondary)]">
              {category.packages.length} pilihan
            </span>
            <span className="inline-flex min-h-8 items-center rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-bold text-white">
              {category.speedRange}
            </span>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6">
        <ul className={`grid gap-2.5 ${usesWideGrid ? "lg:grid-cols-2" : ""}`}>
          {category.packages.map((item, index) => (
            <li
              key={item.id}
              className="group flex min-w-0 items-center gap-3 rounded-[1.125rem] border border-[#d7e4ed] bg-[#fbfdff] px-4 py-4 transition-[border-color,background-color] hover:border-[var(--secondary)]/45 hover:bg-[#f3faff] sm:gap-4 sm:px-5"
            >
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#e6f3fa] text-xs font-bold text-[var(--secondary)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <p className="text-xl leading-none font-semibold tracking-[-0.035em] text-[var(--primary)] sm:text-2xl">
                  {item.bandwidth}
                </p>
                <p
                  aria-label={`Harga ${item.price} ${item.billingPeriod}`}
                  className="flex flex-wrap items-baseline gap-x-1.5 text-left sm:justify-end sm:text-right"
                >
                  <span className="text-base font-bold text-[var(--foreground)] sm:text-lg">
                    {item.price}
                  </span>
                  <span className="text-xs font-medium text-[var(--muted)]">
                    {item.billingPeriod}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex border-t border-[#d7e4ed] pt-5 sm:justify-end">
          <ButtonLink className="w-full sm:w-auto" href={category.ctaHref}>
            {category.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

function UseCaseIcon({ id }: { id: CorporateBandwidthUseCase["id"] }) {
  const paths = {
    locations: (
      <>
        <rect x="3.5" y="5" width="6" height="6" rx="1.5" />
        <rect x="14.5" y="13" width="6" height="6" rx="1.5" />
        <path d="M9.5 8h4a3 3 0 0 1 3 3v2M14.5 16h-4a3 3 0 0 1-3-3v-2" />
      </>
    ),
    transfer: (
      <>
        <path d="M4 8h14m-4-4 4 4-4 4M20 16H6m4 4-4-4 4-4" />
      </>
    ),
    cloud: (
      <>
        <path d="M7.5 18H18a4 4 0 0 0 .4-8A6.25 6.25 0 0 0 6.3 8.6 4.75 4.75 0 0 0 7.5 18Z" />
        <path d="M9 13h6" />
      </>
    ),
    growth: (
      <>
        <path d="M5 19V9M12 19V5M19 19V2" />
        <path d="m4 7 6-4 4 2 6-4" />
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

export function CorporateBandwidthPage({ content }: CorporateBandwidthPageProps) {
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
              Corporate Bandwidth
            </li>
          </ol>
        </nav>
      </Container>

      <section className="pt-7 pb-8 sm:pt-9 sm:pb-10" aria-labelledby="corporate-heading">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#06182f_0%,#092d56_55%,#0c527d_100%)] px-6 py-9 text-white shadow-[0_22px_64px_rgb(7_27_54_/_20%)] sm:px-10 sm:py-12 lg:px-14 lg:py-15">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full border-[5rem] border-white/4"
            />
            <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.24fr)_minmax(20rem,0.76fr)] lg:gap-10">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                  {content.eyebrow}
                </p>
                <h1
                  id="corporate-heading"
                  className="mt-4 max-w-[46rem] text-[2rem] leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3.25rem]"
                >
                  {content.title}
                </h1>
                <p className="mt-5 max-w-[44rem] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                  {content.description}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2.5"
                  aria-label="Ringkasan Corporate Bandwidth"
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
              <EnterpriseVisual />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-14" aria-labelledby="registration-heading">
        <Container>
          <div className="rounded-[1.375rem] border border-[#bfd9ea] bg-[#eaf6fc] p-5 sm:p-7">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[var(--secondary)] shadow-sm ring-1 ring-[#d1e5f1]">
                <RegistrationIcon />
              </span>
              <div>
                <h2
                  id="registration-heading"
                  className="text-xl font-semibold text-[var(--foreground)] sm:text-2xl"
                >
                  Biaya registrasi satu kali
                </h2>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)] sm:text-base">
                  {content.registration.description}
                </p>
              </div>
            </div>
            <dl className="mt-5 grid gap-3 border-t border-[#c9deeb] pt-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Jenis biaya", content.registration.label],
                ["Skema", content.registration.scheme],
                ["Kuantitas", content.registration.quantity],
                ["Biaya", content.registration.price],
              ].map(([term, detail]) => (
                <div key={term} className="rounded-2xl bg-white/72 px-4 py-3 ring-1 ring-[#d3e5ef]">
                  <dt className="text-xs font-bold tracking-[0.08em] text-[var(--muted)] uppercase">
                    {term}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-[var(--foreground)] sm:text-base">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section
        id={content.packagesSection.id}
        className="scroll-mt-28 bg-[var(--surface-subtle)] py-12 sm:py-16 lg:py-18"
        aria-labelledby="corporate-packages-heading"
      >
        <Container>
          <div className="max-w-[50rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.packagesSection.eyebrow}
            </p>
            <h2
              id="corporate-packages-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {content.packagesSection.title}
            </h2>
            <p className="mt-4 max-w-[46rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.packagesSection.description}
            </p>
          </div>
          <div className="mt-8 space-y-5 lg:mt-10 lg:space-y-6">
            {content.serviceCategories.map((category) => (
              <CategoryPanel key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="business-needs-heading">
        <Container>
          <div className="max-w-[48rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.useCases.eyebrow}
            </p>
            <h2
              id="business-needs-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem]"
            >
              {content.useCases.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.useCases.description}
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.useCases.items.map((item) => (
              <li
                key={item.id}
                className="rounded-[1.25rem] border border-[#cfdeea] bg-white p-5 shadow-[0_10px_28px_rgb(10_31_61_/_6%)]"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-[#e7f4fb] text-[var(--secondary)]">
                  <UseCaseIcon id={item.id} />
                </span>
                <h3 className="mt-5 text-lg leading-snug font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {content.technologyInfo ? (
        <section className="pb-12 sm:pb-16" aria-labelledby="technology-heading">
          <Container>
            <div className="grid gap-5 rounded-[1.5rem] border border-[#245b89]/55 bg-[linear-gradient(135deg,#071a33_0%,#0a315b_100%)] px-6 py-7 text-white shadow-[0_16px_42px_rgb(6_24_48_/_16%)] sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-10">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
                  {content.technologyInfo.eyebrow}
                </p>
                <h2
                  id="technology-heading"
                  className="mt-3 text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-3xl"
                >
                  {content.technologyInfo.title}
                </h2>
              </div>
              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                {content.technologyInfo.description}
              </p>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-14 sm:pb-18" aria-labelledby="corporate-final-cta-heading">
        <Container>
          <div className="flex flex-col gap-6 rounded-[1.75rem] bg-[var(--primary)] px-6 py-8 text-white shadow-[var(--shadow-soft)] sm:px-9 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[45rem]">
              <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
                {content.finalCta.eyebrow}
              </p>
              <h2
                id="corporate-final-cta-heading"
                className="mt-3 text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-3xl"
              >
                {content.finalCta.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-white/72">
                {content.finalCta.description}
              </p>
            </div>
            <ButtonLink
              href={content.finalCta.action.href}
              size="large"
              className="shrink-0 border-white bg-white !text-[var(--primary)] hover:border-[var(--cyan)] hover:bg-[#eefbff]"
            >
              {content.finalCta.action.label}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
