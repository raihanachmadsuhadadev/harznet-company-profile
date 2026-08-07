import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceDetailContent } from "@/types/content";

type ServiceBenefitsProps = {
  service: ServiceDetailContent;
};

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="section-shell" aria-labelledby="benefits-heading">
      <Container>
        <SectionHeading
          eyebrow="Manfaat"
          title="Pembahasan layanan yang berangkat dari kebutuhan"
          description={service.targetAudience}
          headingId="benefits-heading"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {service.benefits.map((benefit, index) => (
            <GlassPanel as="article" key={benefit} className="relative overflow-hidden p-6 sm:p-7">
              <span className="grid size-10 place-items-center rounded-xl bg-[var(--surface-subtle)] text-sm font-bold text-[var(--secondary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-7 text-base leading-7 font-semibold">{benefit}</p>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
