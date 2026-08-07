import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { ServiceDetailContent } from "@/types/content";

type ServiceHeroProps = {
  service: ServiceDetailContent;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-[var(--cyan)]/10 blur-3xl"
      />
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-bold tracking-[0.16em] text-[var(--secondary)] uppercase shadow-sm">
            {service.eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            {service.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={service.callToAction.primaryAction.href} size="large">
              {service.callToAction.primaryAction.label}
            </ButtonLink>
            <ButtonLink href="/#layanan" variant="ghost" size="large">
              Kembali ke layanan
            </ButtonLink>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative min-h-72 overflow-hidden rounded-[var(--radius-lg)] bg-[linear-gradient(145deg,#0a2447_0%,#0b3f7a_58%,#1769aa_100%)] shadow-[var(--shadow-soft)] sm:min-h-96"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgb(20_184_212_/_30%),transparent_23%),radial-gradient(circle_at_24%_78%,rgb(215_166_43_/_18%),transparent_20%)]" />
          <div className="absolute inset-[14%] rounded-full border border-white/25" />
          <div className="absolute inset-[29%] rounded-full border border-white/20" />
          <div className="absolute top-1/2 left-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.5rem] border border-white/30 bg-white/14 text-center text-xs font-bold tracking-[0.16em] text-white shadow-2xl backdrop-blur-xl">
            {service.marker}
            <span className="sr-only">{service.name}</span>
          </div>
          <div className="absolute right-5 bottom-5 left-5 rounded-[var(--radius-sm)] border border-white/20 bg-[#061d3d]/72 px-4 py-3 text-sm font-semibold text-white/84 backdrop-blur-xl">
            {service.name}
          </div>
        </div>
      </Container>
    </section>
  );
}
