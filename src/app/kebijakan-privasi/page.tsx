import type { Metadata } from "next";
import { InternalPageHero } from "@/components/ui/internal-page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
export const metadata: Metadata = createPageMetadata({
  title: "Kebijakan Privasi",
  description: "Draft informasi umum kebijakan privasi website publik HARZNET.",
  path: "/kebijakan-privasi",
});
const headings = [
  "Ruang lingkup website publik",
  "Data pada fitur masa depan",
  "Penggunaan teknis dasar",
  "Keamanan",
  "Third-party services",
  "Retensi",
  "Hak pengguna",
  "Perubahan kebijakan",
  "Kanal kontak",
];
export default function PrivacyPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Informasi umum"
        current="Kebijakan Privasi"
        title="Kebijakan Privasi"
        description="Draft informasi umum untuk penggunaan website publik HARZNET."
      />
      <Container className="section-shell pt-0 max-w-3xl">
        {headings.map((h) => (
          <section key={h} className="mt-8">
            <h2 className="text-xl font-semibold">{h}</h2>
            <p className="mt-3 leading-8 text-[var(--muted)]">
              Website publik ini tidak memiliki pengiriman form aktif. Apabila fitur tersedia di
              masa depan, informasi pemrosesan akan diperbarui melalui kanal resmi.
            </p>
          </section>
        ))}
      </Container>
    </>
  );
}
