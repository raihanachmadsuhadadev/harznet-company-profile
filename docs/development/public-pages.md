# Halaman Publik Pendukung

## Tujuan dan Route

Batch ini menambahkan `/tentang-kami`, `/informasi`, `/informasi/[slug]`, `/media-unduhan`, `/kontak`, `/kuesioner`, `/kebijakan-privasi`, dan `/syarat-ketentuan` sebagai halaman publik HARZNET.

## Arsitektur Konten dan Informasi

Konten lokal typed berada di `src/content`. Artikel informasi memakai route dinamis, `generateStaticParams`, `generateMetadata`, dan `notFound` untuk slug tidak valid. Seluruh artikel diprerender statis.

## Batasan

Kuesioner hanya memakai state browser sementara, tanpa pengiriman, penyimpanan, cookie, atau API. Halaman kontak tidak memuat data kontak palsu. Media tidak menyediakan file atau link unduhan sampai materi resmi tersedia. Privacy dan terms adalah draft informasi umum, bukan pernyataan kepatuhan atau kontrak layanan.

## Keamanan, Aksesibilitas, dan Testing

Tidak ada API, database, secret, analytics, external script, atau integrasi internal operational systems. Halaman memakai breadcrumb semantik, heading hierarchy, dan link bermakna. Test meliputi konten informasi, kuesioner, navigasi, serta template halaman yang relevan.

## Memperbarui Konten dan Definition of Done

Perbarui data typed pada file content terkait; jangan menambahkan klaim bisnis atau kontak yang belum disetujui. Perubahan selesai setelah format, lint, typecheck, test, build, dan `git diff --check` lulus.
