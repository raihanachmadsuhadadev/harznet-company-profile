import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { aboutHarznetContent } from "@/content/home";

function FeatureIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 size-5 shrink-0 text-[var(--secondary)]"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="m5.5 10.25 2.75 2.75 6.25-6.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function AboutHarznetSection() {
  return (
    <section className="pb-12 sm:pb-14 lg:pb-16" aria-labelledby="about-harznet-heading">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="absolute -top-28 -right-24 -z-10 size-72 rounded-full bg-[var(--cyan)]/10 blur-3xl"
          />

          <div className="grid items-start gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
                {aboutHarznetContent.eyebrow}
              </p>
              <h2
                id="about-harznet-heading"
                className="mt-3 max-w-2xl text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-[2.75rem]"
              >
                {aboutHarznetContent.title}
              </h2>
            </div>

            <div>
              <div className="max-w-2xl space-y-3 text-base leading-7 text-[var(--muted)] sm:text-[1.0625rem]">
                {aboutHarznetContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ButtonLink href={aboutHarznetContent.primaryAction.href} className="mt-5">
                {aboutHarznetContent.primaryAction.label}
              </ButtonLink>
            </div>
          </div>

          <ul
            className="mt-7 grid gap-3 md:grid-cols-2 lg:mt-8 lg:grid-cols-3"
            aria-label="Keunggulan HARZNET"
          >
            {aboutHarznetContent.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-subtle)]/55 p-4 text-base leading-[1.4] font-semibold text-[var(--foreground)]"
              >
                <FeatureIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
