import { HeroSlider } from "@/components/home/hero-slider";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { heroContent, heroSlides } from "@/content/home";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-[var(--cyan)]/10 blur-3xl"
      />
      <Container className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-10 lg:gap-y-6 xl:gap-x-12">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-bold tracking-[0.16em] text-[var(--secondary)] uppercase shadow-sm">
            {heroContent.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="max-w-[34rem] text-4xl leading-[1.12] font-semibold tracking-[-0.04em] text-balance sm:text-[2.75rem] lg:text-[2.875rem] xl:text-5xl"
          >
            {heroContent.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-7">
            {heroContent.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={heroContent.primaryAction.href} size="large" className="sm:min-w-44">
              {heroContent.primaryAction.label}
            </ButtonLink>
            <ButtonLink
              href={heroContent.secondaryAction.href}
              size="large"
              variant="secondary"
              className="sm:min-w-44"
            >
              {heroContent.secondaryAction.label}
            </ButtonLink>
          </div>
        </div>

        <HeroSlider slides={heroSlides} />

        <GlassPanel className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5 lg:col-span-2">
          <div>
            <p className="text-xs font-bold tracking-wider text-[var(--secondary)] uppercase">
              Fokus
            </p>
            <p className="mt-2 text-sm font-semibold">Teknologi & jaringan</p>
          </div>
          <div className="border-[var(--border)] sm:border-l sm:pl-5">
            <p className="text-xs font-bold tracking-wider text-[var(--secondary)] uppercase">
              Pendekatan
            </p>
            <p className="mt-2 text-sm font-semibold">Kebutuhan terarah</p>
          </div>
          <div className="border-[var(--border)] sm:border-l sm:pl-5">
            <p className="text-xs font-bold tracking-wider text-[var(--secondary)] uppercase">
              Ekosistem
            </p>
            <p className="mt-2 text-sm font-semibold">Lima area layanan</p>
          </div>
        </GlassPanel>
      </Container>
    </section>
  );
}
