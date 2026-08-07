import type { Metadata } from "next";
import { InternalPageHero } from "@/components/ui/internal-page-hero";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
export const metadata: Metadata = createPageMetadata({
  title: "Syarat & Ketentuan",
  description: "Draft umum penggunaan website publik HARZNET.",
  path: "/syarat-ketentuan",
});
const headings = [
  "Penerimaan ketentuan",
  "Penggunaan informasi website",
  "Informasi layanan",
  "Larangan penyalahgunaan",
  "Kekayaan intelektual",
  "External links",
  "Pembatasan informasi",
  "Perubahan website",
  "Kontak resmi",
];
export default function TermsPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Informasi umum"
        current="Syarat & Ketentuan"
        title="Syarat & Ketentuan"
        description="Draft umum penggunaan website publik HARZNET."
      />
      <Container className="section-shell pt-0 max-w-3xl">
        {headings.map((h) => (
          <section key={h} className="mt-8">
            <h2 className="text-xl font-semibold">{h}</h2>
            <p className="mt-3 leading-8 text-[var(--muted)]">
              Informasi pada website publik ini disediakan sebagai pengantar dan dapat diperbarui.
              Kanal resmi akan ditambahkan setelah tersedia.
            </p>
          </section>
        ))}
      </Container>
    </>
  );
}
