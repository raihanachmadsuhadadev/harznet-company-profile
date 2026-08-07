# Design System HARZNET Public Website

## 1. Tujuan

Design system ini menjadi acuan visual dan implementasi untuk fondasi website publik HARZNET. Sistem dibuat ringan, berbasis token, dan dapat digunakan tanpa dependency UI tambahan.

## 2. Arah Visual

Antarmuka menggunakan pendekatan light-first dengan navy sebagai warna fondasi, biru dan cyan sebagai aksen teknologi, permukaan putih untuk keterbacaan, serta gold dalam porsi kecil untuk penanda status. Tampilan mengutamakan ruang yang lega, hierarki yang jelas, dan detail visual yang tenang.

## 3. Token Warna

Token aktual berada di `src/app/globals.css`:

- `--page-background`: latar utama halaman.
- `--foreground`: teks utama dan permukaan navy.
- `--muted`: teks sekunder.
- `--surface` dan `--surface-subtle`: permukaan konten.
- `--glass`: permukaan transparan ketika blur didukung browser.
- `--border`: garis pemisah dan outline komponen.
- `--primary` dan `--primary-foreground`: aksi utama.
- `--secondary`: aksen biru dan teks penanda.
- `--cyan`: aksen teknologi dan focus ring.
- `--gold`: aksen status terbatas.

Nilai warna baru harus diperkenalkan sebagai token bila digunakan berulang. Jangan menambahkan warna bisnis baru tanpa kebutuhan dan review.

## 4. Tipografi

Geist Sans adalah font antarmuka utama dan Geist Mono tersedia untuk data teknis. Heading memakai bobot semibold dengan tracking rapat, sedangkan body memakai ukuran minimal 14px dengan line-height yang cukup. Satu halaman hanya memiliki satu `h1`; struktur berikutnya menggunakan `h2` dan `h3` secara berurutan.

## 5. Spacing dan Container

Lebar konten dikendalikan `--container` melalui primitive `Container`. Jarak vertikal section menggunakan `--section-spacing` dengan `clamp()` agar responsif. Spacing komponen mengikuti skala utility Tailwind dan tidak memakai nilai acak jika skala yang ada sudah memadai.

## 6. Radius dan Shadow

Gunakan `--radius-sm`, `--radius-md`, dan `--radius-lg` untuk kontrol, panel, dan bidang utama. Gunakan `--shadow-card` untuk kartu serta `--shadow-soft` untuk bidang besar. Shadow tidak boleh menjadi satu-satunya pembeda antarelemen; border tetap digunakan.

## 7. Aturan Glass Surface

`GlassPanel` memakai permukaan solid sebagai fallback. Efek blur dan transparansi hanya aktif melalui `@supports` ketika `backdrop-filter` tersedia. Glass surface harus memiliki border, kontras teks yang cukup, dan tidak ditempatkan di atas latar yang membuat konten sulit dibaca.

## 8. Primitive UI

- `Container`: menjaga lebar dan gutter konten konsisten.
- `ButtonLink`: tautan bergaya tombol dengan varian `primary`, `secondary`, dan `ghost`, serta ukuran `default` dan `large`.
- `GlassPanel`: panel reusable dengan fallback solid.
- `SectionHeading`: komposisi eyebrow, heading section, dan deskripsi.

Primitive tetap Server Component. Client Component hanya digunakan ketika membutuhkan state atau event browser.

## 9. Responsiveness

Baseline terkecil adalah 320px tanpa horizontal overflow. Hero berubah dari satu kolom ke dua kolom pada desktop. Grid layanan menggunakan satu kolom di mobile, dua di tablet, lalu komposisi desktop. Navigasi desktop diganti tombol menu pada ukuran mobile, dan footer berubah dari satu kolom menjadi grid.

## 10. Aksesibilitas

- Gunakan landmark semantik, hierarki heading, dan accessible name.
- Sediakan skip link menuju `#main-content`.
- Target interaktif memiliki tinggi sekitar 44px.
- Semua interaksi dapat digunakan dengan keyboard dan memiliki focus ring yang terlihat.
- Tombol menu menggunakan `aria-expanded` dan `aria-controls`.
- Elemen dekoratif menggunakan `aria-hidden="true"`.
- Preferensi reduced motion menonaktifkan smooth scroll dan meminimalkan transisi.

## 11. Performa

Gunakan Server Component secara default dan batasi JavaScript klien pada interaksi yang diperlukan. Optimasi font bawaan Next.js tetap digunakan. Visual hero dibuat dengan CSS tanpa asset berat, video, atau dependency animasi.

## 12. Keamanan Konten

Konten publik hanya boleh menggunakan fakta yang telah tersedia: PT Cemerlang Internet Indonesia, brand HARZNET, dan lima nama layanan yang disetujui. Jangan menampilkan harga, SLA, persentase uptime, jumlah pelanggan, cakupan, penghargaan, testimonial, logo partner, atau data kontak yang belum terverifikasi.

## 13. Contoh Penggunaan

```tsx
<Container>
  <SectionHeading eyebrow="Layanan" title="Judul bagian" description="Deskripsi bagian." />
  <GlassPanel className="p-6">
    <ButtonLink href="/portal-pelanggan">Buka portal</ButtonLink>
  </GlassPanel>
</Container>
```

## 14. Definition of Done

Implementasi UI dianggap sesuai ketika memakai token aktual, responsif mulai 320px, memiliki struktur semantik, dapat digunakan dengan keyboard, menghormati reduced motion, tidak menambah dependency tanpa persetujuan, tidak memuat klaim bisnis yang belum terverifikasi, serta lulus format, lint, typecheck, test, dan production build.
