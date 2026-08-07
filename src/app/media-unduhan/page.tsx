import type { Metadata } from "next";
import { InternalPageHero } from "@/components/ui/internal-page-hero";
import { Container } from "@/components/ui/container";
import { mediaItems } from "@/content/media";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
export const metadata: Metadata = createPageMetadata({
  title: "Media & Unduhan",
  description: "Materi publik HARZNET akan tersedia melalui kanal ini.",
  path: "/media-unduhan",
});
export default function MediaPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Media & unduhan"
        current="Media & Unduhan"
        title="Materi resmi akan tersedia melalui kanal ini"
        description="Saat ini belum ada file resmi yang dipublikasikan untuk diunduh."
      />
      <Container className="section-shell pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {mediaItems.map((x) => (
            <article key={x.title} className="glass-panel rounded-[var(--radius-md)] p-6">
              <p className="text-xs font-bold text-[var(--gold)]">{x.status}</p>
              <h2 className="mt-4 text-xl font-semibold">{x.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{x.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
