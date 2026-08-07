import type { Metadata } from "next";
import Link from "next/link";
import { InternalPageHero } from "@/components/ui/internal-page-hero";
import { Container } from "@/components/ui/container";
import { contactCategories, contactSteps } from "@/content/contact";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
export const metadata: Metadata = createPageMetadata({
  title: "Kontak",
  description: "Informasi kontak resmi HARZNET akan tersedia setelah disetujui.",
  path: "/kontak",
});
export default function ContactPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Kontak"
        current="Kontak"
        title="Mulai dari kebutuhan Anda"
        description="Kanal resmi HARZNET akan ditampilkan setelah informasi tersedia dan disetujui."
      />
      <Container className="section-shell pt-0">
        <section>
          <h2 className="text-2xl font-semibold">Kategori kebutuhan</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactCategories.map((x) => (
              <article key={x.title} className="glass-panel rounded-[var(--radius-md)] p-5">
                <h3 className="font-semibold">{x.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{x.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Langkah umum</h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-3">
            {contactSteps.map((x, i) => (
              <li key={x} className="rounded-[var(--radius-md)] border border-[var(--border)] p-5">
                <span className="text-xs font-bold text-[var(--secondary)]">0{i + 1}</span>
                <p className="mt-2 font-semibold">{x}</p>
              </li>
            ))}
          </ol>
        </section>
        <p className="mt-10 rounded-[var(--radius-md)] bg-[var(--surface-subtle)] p-5 text-sm text-[var(--muted)]">
          Status kontak: kanal resmi belum tersedia pada website publik ini.
        </p>
        <Link
          className="mt-8 inline-flex min-h-11 items-center font-bold text-[var(--primary)]"
          href="/#layanan"
        >
          Kembali ke layanan
        </Link>
      </Container>
    </>
  );
}
