import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { whatsappContact } from "@/config/contact";
import type { HarznetHomePageContent, HarznetHomePackage } from "@/types/content";

type HarznetHomePageProps = {
  content: HarznetHomePageContent;
};

function InstallationIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="m14.4 6.6 3-3a4.6 4.6 0 0 1-5.8 5.8L5 16l3 3 6.6-6.6a4.6 4.6 0 0 1 5.8-5.8l-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m4.5 15.5-1.2 1.2a2.4 2.4 0 0 0 0 3.4l.6.6a2.4 2.4 0 0 0 3.4 0l1.2-1.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="mt-0.5 size-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.12" />
      <path
        d="m6.5 10 2.2 2.2 4.8-4.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function FiberVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden rounded-[1.625rem] border border-white/14 bg-white/8 p-6 shadow-[inset_0_1px_0_rgb(255_255_255_/_10%)] sm:p-8"
    >
      <div className="absolute -top-20 -right-20 size-56 rounded-full bg-[var(--cyan)]/15 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3 sm:gap-5">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--cyan)] uppercase">
            Teknologi koneksi
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            FTTH
          </p>
          <p className="mt-2 max-w-48 text-sm leading-6 text-white/65">
            Fiber langsung untuk kebutuhan konektivitas rumah.
          </p>
        </div>
        <svg className="w-20 shrink-0 text-[var(--cyan)] sm:w-36" viewBox="0 0 160 132">
          <path
            d="M18 104h124M32 104V64l48-38 48 38v40M62 104V79h36v25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <path
            d="M55 54c14-13 36-13 50 0M65 65c8-7 22-7 30 0"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <circle cx="80" cy="75" r="5" fill="white" />
          <circle cx="18" cy="104" r="6" fill="currentColor" />
          <circle cx="142" cy="104" r="6" fill="currentColor" />
        </svg>
      </div>
      <div className="relative mt-7 grid grid-cols-2 gap-3 border-t border-white/12 pt-5 text-sm">
        <div>
          <p className="text-white/50">Penggunaan</p>
          <p className="mt-1 font-semibold text-white">Aktivitas keluarga</p>
        </div>
        <div>
          <p className="text-white/50">Perangkat</p>
          <p className="mt-1 font-semibold text-white">Sistem sewa</p>
        </div>
      </div>
    </div>
  );
}

function PackageCard({ item }: { item: HarznetHomePackage }) {
  const speedParts = item.speed.split(" ");
  const speedValue = speedParts.slice(1).join(" ");

  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-[#c7d9e8] bg-white p-6 shadow-[0_16px_42px_rgb(10_31_61_/_8%)] transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-[var(--secondary)]/55 hover:shadow-[0_22px_52px_rgb(10_31_61_/_12%)] focus-within:border-[var(--secondary)] focus-within:shadow-[0_22px_52px_rgb(10_31_61_/_12%)] motion-reduce:transform-none sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
          {item.name}
        </h3>
        <span className="inline-flex min-h-8 items-center rounded-full border border-[#d0e1ed] bg-[#eef7fc] px-3 py-1 text-xs font-bold text-[var(--secondary)]">
          {item.deviceRange}
        </span>
      </div>

      <div className="mt-7 border-y border-[#d8e5ef] py-6">
        <p className="text-sm font-semibold text-[var(--muted)]">Hingga</p>
        <p className="mt-1 text-4xl leading-none font-semibold tracking-[-0.045em] text-[var(--primary)] sm:text-[2.75rem]">
          {speedValue}
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-6 text-[var(--muted)] sm:text-base"
          >
            <span className="text-[var(--secondary)]">
              <CheckIcon />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {item.usageNote ? (
        <p className="mt-5 rounded-xl bg-[#fff8e8] px-4 py-3 text-sm leading-6 text-[#765515]">
          {item.usageNote}
        </p>
      ) : null}

      <div className="mt-7 border-t border-[#d8e5ef] pt-6">
        <p
          aria-label={`Harga ${item.price} ${item.billingPeriod}`}
          className="flex flex-wrap items-end gap-x-2 gap-y-1"
        >
          <span className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
            {item.price}
          </span>
          <span className="pb-1 text-sm font-medium text-[var(--muted)]">{item.billingPeriod}</span>
        </p>
        <ButtonLink href={whatsappContact.url} className="mt-5 w-full" size="large">
          Konsultasikan Paket
        </ButtonLink>
      </div>
    </article>
  );
}

export function HarznetHomePage({ content }: HarznetHomePageProps) {
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
              HARZNET Home
            </li>
          </ol>
        </nav>
      </Container>

      <section className="pt-7 pb-8 sm:pt-9 sm:pb-10" aria-labelledby="harznet-home-heading">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#071b36_0%,#0a315c_58%,#0d5684_100%)] px-6 py-9 text-white shadow-[0_22px_64px_rgb(7_27_54_/_20%)] sm:px-10 sm:py-12 lg:px-14 lg:py-15">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-36 -right-28 size-96 rounded-full border-[4rem] border-white/4"
            />
            <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-12">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                  {content.eyebrow}
                </p>
                <h1
                  id="harznet-home-heading"
                  className="mt-4 max-w-[45rem] text-[2rem] leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3.5rem]"
                >
                  {content.title}
                </h1>
                <p className="mt-5 max-w-[43rem] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                  {content.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Ringkasan HARZNET Home">
                  {content.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-white/14 bg-white/8 px-3.5 py-2 text-sm font-semibold text-white/88"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={content.primaryAction.href}
                    className="whitespace-nowrap border-white bg-white !text-[var(--primary)] hover:border-[var(--cyan)] hover:bg-[#eefbff] sm:min-h-12 sm:px-6 sm:py-3 sm:text-base"
                  >
                    {content.primaryAction.label}
                  </ButtonLink>
                  <ButtonLink
                    href={content.secondaryAction.href}
                    variant="ghost"
                    className="whitespace-nowrap border-white/18 text-white hover:bg-white/10 sm:min-h-12 sm:px-6 sm:py-3 sm:text-base"
                  >
                    {content.secondaryAction.label}
                  </ButtonLink>
                </div>
              </div>
              <FiberVisual />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-14" aria-labelledby="installation-heading">
        <Container>
          <div className="flex flex-col gap-4 rounded-[1.25rem] border border-[#c5ddec] bg-[#eaf6fc] px-5 py-5 sm:flex-row sm:items-center sm:px-7">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[var(--secondary)] shadow-sm ring-1 ring-[#d1e5f1]">
              <InstallationIcon />
            </span>
            <div>
              <h2
                id="installation-heading"
                className="text-xl font-semibold text-[var(--foreground)]"
              >
                {content.installation.title}
              </h2>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)] sm:text-base">
                {content.installation.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id={content.packagesSection.id}
        className="scroll-mt-28 bg-[var(--surface-subtle)] py-12 sm:py-16 lg:py-18"
        aria-labelledby="packages-heading"
      >
        <Container>
          <div className="max-w-[48rem]">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
              {content.packagesSection.eyebrow}
            </p>
            <h2
              id="packages-heading"
              className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              {content.packagesSection.title}
            </h2>
            <p className="mt-4 max-w-[43rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {content.packagesSection.description}
            </p>
          </div>
          <ul className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6">
            {content.packages.map((item) => (
              <li key={item.id} className="h-full">
                <PackageCard item={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="benefits-heading">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-12">
            <h2
              id="benefits-heading"
              className="max-w-[35rem] text-[2rem] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem]"
            >
              {content.benefits.title}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.benefits.items.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-[1.125rem] border border-[#cfdeea] bg-white p-5 shadow-[0_10px_28px_rgb(10_31_61_/_6%)]"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#e8f5fb] text-xs font-bold text-[var(--secondary)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-sm leading-6 font-semibold text-[var(--foreground)] sm:text-base">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-18" aria-labelledby="final-cta-heading">
        <Container>
          <div className="flex flex-col gap-6 rounded-[1.75rem] bg-[var(--primary)] px-6 py-8 text-white shadow-[var(--shadow-soft)] sm:px-9 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[45rem]">
              <h2
                id="final-cta-heading"
                className="text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-3xl"
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
