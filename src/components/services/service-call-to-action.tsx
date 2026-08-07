import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { ServiceDetailContent } from "@/types/content";

type ServiceCallToActionProps = {
  service: ServiceDetailContent;
};

export function ServiceCallToAction({ service }: ServiceCallToActionProps) {
  const { callToAction } = service;

  return (
    <section className="section-shell pt-0" aria-labelledby="service-cta-heading">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--primary)] px-6 py-12 text-white shadow-[var(--shadow-soft)] sm:px-10 sm:py-14 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 size-64 rounded-full border-[3rem] border-white/5"
          />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase">
                {callToAction.eyebrow}
              </p>
              <h2
                id="service-cta-heading"
                className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance sm:text-4xl"
              >
                {callToAction.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                {callToAction.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink
                href={callToAction.primaryAction.href}
                variant="secondary"
                size="large"
                className="border-white/20 bg-white text-[var(--primary)] hover:border-white hover:text-[var(--secondary)]"
              >
                {callToAction.primaryAction.label}
              </ButtonLink>
              <ButtonLink
                href="/#layanan"
                variant="ghost"
                size="large"
                className="text-white hover:bg-white/10"
              >
                Kembali ke layanan
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
