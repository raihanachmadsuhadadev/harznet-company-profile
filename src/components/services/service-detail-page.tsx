import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ServiceBenefits } from "@/components/services/service-benefits";
import { ServiceCallToAction } from "@/components/services/service-call-to-action";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceScope } from "@/components/services/service-scope";
import type { ServiceDetailContent } from "@/types/content";

type ServiceDetailPageProps = {
  service: ServiceDetailContent;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <>
      <Container>
        <nav aria-label="Breadcrumb" className="pt-7 text-sm text-[var(--muted)] sm:pt-9">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link className="rounded-sm hover:text-[var(--primary)]" href="/">
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link className="rounded-sm hover:text-[var(--primary)]" href="/#layanan">
                Layanan
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-[var(--foreground)]">
              {service.name}
            </li>
          </ol>
        </nav>
      </Container>
      <ServiceHero service={service} />
      <section
        className="border-y border-[var(--border)] bg-[var(--surface)] py-10 sm:py-12"
        aria-label="Ringkasan layanan"
      >
        <Container className="grid gap-5 md:grid-cols-[0.65fr_1.35fr] md:items-start">
          <p className="text-xs font-bold tracking-[0.18em] text-[var(--secondary)] uppercase">
            Ringkasan layanan
          </p>
          <p className="text-xl leading-8 font-semibold tracking-[-0.025em] sm:text-2xl sm:leading-9">
            {service.summary}
          </p>
        </Container>
      </section>
      <ServiceBenefits service={service} />
      <ServiceScope service={service} />
      <ServiceProcess service={service} />
      <ServiceCallToAction service={service} />
    </>
  );
}
