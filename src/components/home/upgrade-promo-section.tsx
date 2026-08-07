import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { upgradePromoContent } from "@/content/home";

export function UpgradePromoSection() {
  return (
    <section aria-labelledby="upgrade-promo-heading">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/15 bg-[linear-gradient(135deg,#071a38_0%,#0b3f7a_58%,#092b58_100%)] p-6 text-white shadow-[var(--shadow-soft)] sm:p-8 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -top-28 -right-24 -z-10 size-72 rounded-full bg-[var(--cyan)]/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/3 -z-10 size-64 rounded-full bg-[var(--secondary)]/28 blur-3xl"
          />

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(14rem,1fr)] lg:gap-12">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
                {upgradePromoContent.eyebrow}
              </p>
              <h2
                id="upgrade-promo-heading"
                className="mt-3 max-w-3xl text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-5xl"
              >
                {upgradePromoContent.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                {upgradePromoContent.description}
              </p>
            </div>

            <div className="lg:flex lg:justify-end">
              <ButtonLink
                href={upgradePromoContent.primaryAction.href}
                size="large"
                variant="secondary"
                className="w-full border-white bg-white text-[var(--primary)] hover:border-[var(--cyan)] hover:bg-[var(--surface-subtle)] hover:text-[var(--secondary)] sm:w-auto"
              >
                {upgradePromoContent.primaryAction.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
