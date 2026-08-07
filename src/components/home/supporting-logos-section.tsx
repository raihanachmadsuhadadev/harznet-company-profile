import Image from "next/image";

import styles from "@/components/home/supporting-logos-marquee.module.css";
import { Container } from "@/components/ui/container";
import { supportingLogosContent } from "@/content/home";
import type { SupportingLogoItem } from "@/types/content";

type LogoListProps = {
  items: readonly SupportingLogoItem[];
  duplicate?: boolean;
};

function LogoList({ items, duplicate = false }: LogoListProps) {
  return (
    <ul
      className={`${styles.group} ${duplicate ? styles.duplicate : ""}`.trim()}
      aria-label={duplicate ? undefined : "Logo ekosistem pendukung"}
      aria-hidden={duplicate || undefined}
    >
      {items.map((item) => (
        <li
          key={item.id}
          className="flex h-[5.25rem] w-[9.375rem] shrink-0 items-center justify-center rounded-[1.125rem] border border-white/75 bg-white px-5 py-4 shadow-[0_0.625rem_1.75rem_rgb(2_15_32_/_12%)] md:h-24 md:w-44 md:px-6 lg:h-[6.5rem] lg:w-[12.5rem] lg:px-7"
        >
          <Image
            src={item.src}
            alt={duplicate ? "" : item.alt}
            width={160}
            height={64}
            loading="eager"
            sizes="(max-width: 767px) 118px, (max-width: 1023px) 136px, 152px"
            className="h-full w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function SupportingLogosSection() {
  return (
    <section
      id="ekosistem-pendukung"
      className="bg-[linear-gradient(180deg,#f7fbfe_0%,#edf6fc_100%)] pb-10 md:pb-12 lg:pb-14"
      aria-labelledby="supporting-logos-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#24517b]/65 bg-[linear-gradient(145deg,#071a33_0%,#0a2a52_60%,#0b3f70_100%)] px-5 py-10 shadow-[0_22px_60px_rgb(6_24_48_/_22%)] sm:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-14 xl:py-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-28 size-80 rounded-full bg-[var(--cyan)]/10 blur-3xl"
          />

          <div className="relative max-w-[45rem]">
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--cyan)] uppercase sm:text-sm">
                {supportingLogosContent.eyebrow}
              </p>
              <span
                aria-hidden="true"
                className="h-px w-10 bg-gradient-to-r from-[var(--cyan)] to-transparent"
              />
            </div>
            <h2
              id="supporting-logos-heading"
              className="mt-3.5 text-[1.875rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance text-white sm:text-[2.375rem] lg:text-[2.75rem]"
            >
              {supportingLogosContent.title}
            </h2>
            <p className="mt-4 max-w-[42rem] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {supportingLogosContent.description}
            </p>
          </div>

          <div className="relative mt-8 md:mt-9">
            <div className={styles.viewport}>
              <div className={styles.track}>
                <LogoList items={supportingLogosContent.items} />
                <LogoList items={supportingLogosContent.items} duplicate />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0a294f] to-transparent sm:w-12"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0a315b] to-transparent sm:w-12"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
