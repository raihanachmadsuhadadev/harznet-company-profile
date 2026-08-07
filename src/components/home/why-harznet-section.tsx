import { Container } from "@/components/ui/container";
import { whyHarznetContent } from "@/content/home";
import type { WhyHarznetIconKey } from "@/types/content";
import type { ReactNode } from "react";

function WhyHarznetIcon({ icon }: { icon: WhyHarznetIconKey }) {
  const paths = {
    speed: (
      <>
        <rect fill="currentColor" height="4" rx="1.25" stroke="none" width="2.5" x="4" y="14" />
        <rect fill="currentColor" height="7" rx="1.25" stroke="none" width="2.5" x="8.5" y="11" />
        <rect fill="currentColor" height="10" rx="1.25" stroke="none" width="2.5" x="13" y="8" />
        <rect fill="currentColor" height="13" rx="1.25" stroke="none" width="2.5" x="17.5" y="5" />
        <path d="M3.5 20.5h17" />
      </>
    ),
    support: (
      <>
        <path d="M4.5 13v-2a7.5 7.5 0 0 1 15 0v2" />
        <path d="M4.5 12.5h2a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-2v-6Zm15 0h-2A1.5 1.5 0 0 0 16 14v3a1.5 1.5 0 0 0 1.5 1.5h2v-6ZM16 18.5c-.75 1-2 1.5-4 1.5" />
      </>
    ),
    security: (
      <>
        <path d="M12 3.5 19 6v5.25c0 4.35-2.75 7.55-7 9.25-4.25-1.7-7-4.9-7-9.25V6l7-2.5Z" />
        <path d="m8.75 12 2.1 2.1 4.4-4.45" />
      </>
    ),
  } satisfies Record<WhyHarznetIconKey, ReactNode>;

  return (
    <svg aria-hidden="true" className="size-6" fill="none" focusable="false" viewBox="0 0 24 24">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75">
        {paths[icon]}
      </g>
    </svg>
  );
}

export function WhyHarznetSection() {
  return (
    <section
      id="mengapa-harznet"
      className="bg-[linear-gradient(180deg,#f5faff_0%,#edf6fc_100%)] py-10 md:py-12 lg:py-14"
      aria-labelledby="why-harznet-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#c9dbea] bg-[linear-gradient(145deg,#ffffff_0%,#f7fbfe_55%,#eaf5fc_100%)] p-4 shadow-[0_16px_40px_rgb(10_31_61_/_8%)] sm:p-7 lg:p-8">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8 xl:gap-10">
            <div className="flex flex-col justify-center lg:pr-2">
              <div className="flex items-center gap-3">
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase sm:text-sm">
                  {whyHarznetContent.eyebrow}
                </p>
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-gradient-to-r from-[var(--secondary)] to-[var(--cyan)]"
                />
              </div>
              <h2
                id="why-harznet-heading"
                className="mt-3.5 max-w-[29rem] text-[1.875rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance text-[var(--foreground)] sm:text-4xl lg:text-[2.5rem]"
              >
                {whyHarznetContent.title}
              </h2>
              <p className="mt-4 max-w-[31rem] text-[0.9375rem] leading-[1.7] text-[var(--muted)] sm:text-base">
                {whyHarznetContent.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.375rem] border border-[#cbddea] bg-[linear-gradient(145deg,#ffffff_0%,#f5fafe_100%)] shadow-[0_10px_28px_rgb(10_31_61_/_7%)]">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--cyan)]"
              />
              <ul aria-label="Alasan memilih HARZNET">
                {whyHarznetContent.items.map((item, index) => (
                  <li
                    key={item.title}
                    className={`flex items-start gap-3.5 border-b border-[#d8e5ee] p-[1.125rem] last:border-b-0 sm:gap-4 sm:p-5 ${index === 0 ? "bg-[linear-gradient(135deg,#edf8fe_0%,#f7fcff_100%)]" : "bg-white/35"}`}
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-[0.8125rem] border border-[#d4e7f4] bg-[#e7f3fb] text-[var(--secondary)]">
                      <WhyHarznetIcon icon={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg leading-[1.25] font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-[1.6] text-[var(--muted)] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
