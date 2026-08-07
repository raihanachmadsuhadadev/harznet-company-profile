import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
export function NotFoundState() {
  return (
    <Container className="section-shell text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)]">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Halaman tidak ditemukan</h1>
      <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
        Halaman yang Anda cari tidak tersedia atau alamatnya telah berubah.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/">Kembali ke beranda</ButtonLink>
        <ButtonLink href="/#layanan" variant="secondary">
          Lihat layanan
        </ButtonLink>
        <ButtonLink href="/informasi" variant="ghost">
          Baca informasi
        </ButtonLink>
      </div>
    </Container>
  );
}
