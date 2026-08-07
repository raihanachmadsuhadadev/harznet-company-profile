import { Container } from "@/components/ui/container";
import { valueItems, valueSection } from "@/content/home";

export function ValueProposition() {
  return (
    <section
      id="keunggulan"
      className="scroll-mt-24 bg-[linear-gradient(135deg,#081d39_0%,var(--foreground)_55%,#0b294b_100%)] py-12 text-white sm:py-14 lg:py-16"
      aria-labelledby="value-heading"
    >
      <Container className="grid gap-9 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center lg:gap-12">
        <div className="max-w-[35rem]">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase">
            {valueSection.eyebrow}
          </p>
          <h2
            id="value-heading"
            className="mt-4 max-w-[32rem] text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            {valueSection.title}
          </h2>
          <p className="mt-5 max-w-[35rem] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            {valueSection.description}
          </p>
        </div>
        <ol className="grid gap-3 sm:gap-4">
          {valueItems.map((item, index) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-[1.25rem] border border-white/12 bg-white/[0.065] p-5 shadow-[0_12px_32px_rgb(2_12_27_/_16%)] sm:gap-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-[0.875rem] border border-[var(--cyan)]/18 bg-[var(--cyan)]/12 text-sm font-bold text-[var(--cyan)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-lg leading-[1.3] font-semibold sm:text-xl">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-white/68 sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
