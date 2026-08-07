import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { Container } from "@/components/ui/container";
import { testimonialsContent } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section
      id="testimoni"
      className="bg-[linear-gradient(180deg,#edf6fc_0%,#f7fbfe_100%)] py-10 md:py-12 lg:py-14"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#24517b]/70 bg-[linear-gradient(145deg,#071a33_0%,#0a2a52_58%,#0b3f70_100%)] p-6 shadow-[0_22px_60px_rgb(6_24_48_/_24%)] sm:p-9 lg:p-12">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-28 size-80 rounded-full bg-[var(--cyan)]/12 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 left-[28%] size-72 rounded-full bg-[var(--secondary)]/18 blur-3xl"
          />

          <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)] lg:gap-12 xl:gap-14">
            <div className="max-w-[29rem]">
              <div className="flex items-center gap-3">
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--cyan)] uppercase sm:text-sm">
                  {testimonialsContent.eyebrow}
                </p>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-gradient-to-r from-[var(--cyan)] to-transparent"
                />
              </div>
              <h2
                id="testimonials-heading"
                className="mt-3.5 text-[1.875rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance text-white sm:text-[2.375rem] lg:text-[2.75rem]"
              >
                {testimonialsContent.title}
              </h2>
              <p className="mt-4 max-w-[30rem] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                {testimonialsContent.description}
              </p>
            </div>

            <TestimonialsCarousel
              items={testimonialsContent.items}
              autoplayDelay={testimonialsContent.autoplayDelay}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
