import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { connectivityBannerContent } from "@/content/home";

export function ConnectivityBannerSection() {
  return (
    <section className="pb-10 sm:pb-14 lg:pb-16" aria-labelledby="connectivity-banner-heading">
      <Container>
        <div className="relative isolate flex min-h-96 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)] sm:min-h-[28rem] lg:min-h-[32rem]">
          <Image
            src={connectivityBannerContent.image.src}
            alt={connectivityBannerContent.image.alt}
            fill
            sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 3rem), 74rem"
            className="-z-20 object-cover object-center"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(5_24_52_/_38%),rgb(5_24_52_/_72%))]"
          />

          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center text-white sm:px-10 sm:py-16">
            <p className="text-xs font-bold tracking-[0.2em] text-[var(--cyan)] uppercase sm:text-sm">
              {connectivityBannerContent.eyebrow}
            </p>
            <h2
              id="connectivity-banner-heading"
              className="mt-4 max-w-3xl text-[2rem] leading-[1.12] font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl"
            >
              {connectivityBannerContent.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              {connectivityBannerContent.description}
            </p>
            <ButtonLink
              href={connectivityBannerContent.primaryAction.href}
              size="large"
              variant="secondary"
              className="mt-8 border-white bg-white text-[var(--primary)] hover:border-[var(--cyan)] hover:bg-[var(--surface-subtle)] hover:text-[var(--secondary)]"
            >
              {connectivityBannerContent.primaryAction.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
