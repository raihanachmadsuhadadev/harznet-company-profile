import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceDetailContent } from "@/types/content";

type ServiceProcessProps = {
  service: ServiceDetailContent;
};

export function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section className="section-shell" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          eyebrow="Proses"
          title="Langkah yang dibahas secara terkoordinasi"
          description="Alur ini menjadi kerangka pembahasan umum dan dapat disesuaikan dengan konteks kebutuhan layanan."
          headingId="process-heading"
          align="center"
        />
        <ol className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <span className="text-xs font-bold tracking-[0.18em] text-[var(--secondary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
