import { Container } from "@/components/ui/container";
import { InternalRouteLink } from "@/components/ui/internal-route-link";
import { serviceSection } from "@/content/home";
import { services } from "@/content/site";

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="m3.75 10.5 8.25-6.75 8.25 6.75" />
      <path d="M5.75 9.25v10h12.5v-10M9.25 19.25v-5.5h5.5v5.5" />
    </>,
    <>
      <path d="M5 20V5.5A1.5 1.5 0 0 1 6.5 4h8A1.5 1.5 0 0 1 16 5.5V20" />
      <path d="M16 9h2.5a1.5 1.5 0 0 1 1.5 1.5V20M3 20h18M8 8h2m2 0h1M8 12h2m2 0h1M8 16h2m2 0h1" />
    </>,
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.25" />
      <path d="M3.75 19a5.25 5.25 0 0 1 10.5 0M14.25 15.25a4 4 0 0 1 6 3.5" />
    </>,
    <>
      <path d="M12 3.5 19 6v5.25c0 4.35-2.75 7.55-7 9.25-4.25-1.7-7-4.9-7-9.25V6l7-2.5Z" />
      <path d="m8.75 12 2.1 2.1 4.4-4.45" />
    </>,
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 8.5h17m-11 3.25-2.25 2.25 2.25 2.25m5-4.5 2.25 2.25-2.25 2.25" />
    </>,
  ];

  return (
    <svg aria-hidden="true" className="size-6" fill="none" focusable="false" viewBox="0 0 24 24">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75">
        {paths[index]}
      </g>
    </svg>
  );
}

export function ServiceOverview() {
  return (
    <section
      id="layanan"
      className="scroll-mt-24 pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-24"
      aria-labelledby="service-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase">
            {serviceSection.eyebrow}
          </p>
          <h2
            id="service-heading"
            className="mt-4 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-5xl"
          >
            {serviceSection.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {serviceSection.description}
          </p>
        </div>
        <ul className="mt-9 grid auto-rows-fr gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {services.map((service, index) => (
            <li
              key={service.name}
              className={`h-full lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""} ${index === 4 ? "lg:col-start-4" : ""}`.trim()}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#c9dbea] bg-[linear-gradient(145deg,#ffffff_0%,#f7fbff_62%,#edf7fd_100%)] p-5 shadow-[0_14px_38px_rgb(10_31_61_/_8%)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-[var(--secondary)]/55 hover:shadow-[0_20px_50px_rgb(10_31_61_/_13%)] focus-within:border-[var(--secondary)] focus-within:shadow-[0_20px_50px_rgb(10_31_61_/_13%)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--cyan)] opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-14 size-40 rounded-full bg-cyan-200/25 blur-3xl"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f3fb] text-[var(--secondary)] ring-1 ring-[#d4e7f4] transition-colors duration-200 group-hover:bg-[#dff0fa] group-hover:text-[var(--primary)]">
                    <ServiceIcon index={index} />
                  </span>
                  <span className="inline-flex min-h-7 items-center rounded-full border border-[#d4e2ee] bg-white/80 px-3 py-1 text-xs font-bold tracking-[0.16em] text-[var(--primary)] shadow-[0_3px_10px_rgb(10_31_61_/_5%)]">
                    {service.marker}
                  </span>
                </div>

                <h3 className="relative mt-6 text-xl leading-[1.25] font-semibold tracking-[-0.025em] text-[var(--foreground)]">
                  {service.name}
                </h3>
                <p className="relative mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-[var(--muted)] sm:text-base">
                  {service.summary}
                </p>
                <div className="relative mt-7 border-t border-[#d8e5ef] pt-3">
                  <InternalRouteLink
                    href={service.href}
                    className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg text-sm font-semibold text-[var(--primary)] transition-colors duration-200 hover:text-[var(--secondary)]"
                  >
                    Pelajari {service.name}
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e7f3fb] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    >
                      <svg className="size-4" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M3.5 8h9m-3.25-3.25L12.5 8l-3.25 3.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </InternalRouteLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
