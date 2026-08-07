import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getInformationArticle, informationArticles } from "@/content/information";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return informationArticles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/informasi/[slug]">): Promise<Metadata> {
  const a = getInformationArticle((await params).slug);
  return a
    ? createPageMetadata({
        title: a.metadata.title,
        description: a.metadata.description,
        path: `/informasi/${a.slug}`,
      })
    : {};
}
export default async function ArticlePage({ params }: PageProps<"/informasi/[slug]">) {
  const a = getInformationArticle((await params).slug);
  if (!a) notFound();
  return (
    <article className="section-shell">
      <Container className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
          <Link href="/">Beranda</Link> / <Link href="/informasi">Informasi</Link> /{" "}
          <span aria-current="page">{a.title}</span>
        </nav>
        <p className="mt-10 text-xs font-bold text-[var(--secondary)]">{a.category}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">{a.title}</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{a.excerpt}</p>
        {a.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-2xl font-semibold">{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-8 text-[var(--muted)]">
                {p}
              </p>
            ))}
          </section>
        ))}
        <div className="mt-12 flex gap-6">
          <Link href="/informasi">Kembali ke informasi</Link>
          <Link href="/#layanan">Lihat layanan</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
      </Container>
    </article>
  );
}
