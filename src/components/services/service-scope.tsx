import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceDetailContent } from "@/types/content";

type ServiceScopeProps = {
  service: ServiceDetailContent;
};

export function ServiceScope({ service }: ServiceScopeProps) {
  return (
    <section className="section-shell bg-[var(--surface-subtle)]" aria-labelledby="scope-heading">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="Ruang lingkup"
          title="Area pembahasan layanan"
          description="Ruang lingkup berikut menjelaskan pembahasan umum yang dapat dilakukan bersama HARZNET."
          headingId="scope-heading"
        />
        <div className="grid gap-4">
          {service.scope.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-7"
            >
              <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
