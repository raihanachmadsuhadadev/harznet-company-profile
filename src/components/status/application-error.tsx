"use client";
import Link from "next/link";
import { Container } from "@/components/ui/container";
export function ApplicationError({ reset }: { reset: () => void }) {
  return (
    <Container className="section-shell text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)]">STATUS APLIKASI</p>
      <h1 className="mt-4 text-4xl font-semibold">Terjadi kendala sementara</h1>
      <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
        Halaman belum dapat ditampilkan. Silakan coba lagi atau kembali ke beranda.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="min-h-11 rounded-full bg-[var(--primary)] px-5 font-bold text-white"
        >
          Coba lagi
        </button>
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 font-bold"
          href="/"
        >
          Kembali ke beranda
        </Link>
      </div>
    </Container>
  );
}
