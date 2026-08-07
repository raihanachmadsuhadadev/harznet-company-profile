import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Portal Pelanggan",
  description: "Informasi akses Portal Pelanggan HARZNET.",
  path: "/portal-pelanggan",
  noIndex: true,
});

export default function CustomerPortalPage() {
  return (
    <section className="section-shell min-h-[65vh]" aria-labelledby="portal-title">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase">
            Area layanan digital
          </p>
          <h1
            id="portal-title"
            className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl"
          >
            Portal Pelanggan HARZNET
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            Portal pelanggan merupakan area terpisah dari website publik untuk akses layanan digital
            pelanggan. Fitur masuk dan pengelolaan akun belum tersedia pada tahap ini.
          </p>
          <div className="mt-9">
            <ButtonLink href="/">Kembali ke beranda</ButtonLink>
          </div>
        </div>

        <GlassPanel className="p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="size-3 rounded-full bg-[var(--gold)] shadow-[0_0_0_0.4rem_rgb(215_166_43_/_12%)]"
            />
            <p className="text-xs font-bold tracking-[0.16em] text-[var(--secondary)] uppercase">
              Status akses
            </p>
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-[-0.025em]">Belum tersedia</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Akses portal akan diarahkan melalui kanal resmi setelah sistem dan informasinya
            tersedia.
          </p>
        </GlassPanel>
      </Container>
    </section>
  );
}
