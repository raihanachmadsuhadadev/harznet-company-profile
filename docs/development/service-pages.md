# Halaman Layanan HARZNET

## 1. Tujuan

Halaman layanan menyediakan penjelasan publik yang konsisten untuk lima area layanan HARZNET tanpa menyertakan data komersial, teknis, atau operasional yang belum diverifikasi.

## 2. Daftar Route

- `/layanan/harznet-home`
- `/layanan/corporate-bandwidth`
- `/layanan/partner`
- `/layanan/managed-service`
- `/layanan/software-corporation`

## 3. Dynamic Route Architecture

Semua halaman dirender melalui `src/app/layanan/[slug]/page.tsx`. Route ini mengambil data berdasarkan slug, memvalidasi slug pada runtime, dan meneruskan data valid ke `ServiceDetailPage`. Tidak ada JSX halaman yang diduplikasi per layanan.

## 4. Typed Service Content

`src/content/services.ts` adalah satu-satunya sumber data layanan. Setiap entri bertipe `ServiceDetailContent`, yang mencakup identitas, copy hero, ringkasan, target pengguna, manfaat, ruang lingkup, proses, CTA, dan metadata. `src/content/site.ts` menggunakan sumber yang sama untuk integrasi homepage dan footer.

## 5. Static Generation

`generateStaticParams` mengembalikan kelima slug dari konten lokal. `dynamicParams = false` memastikan slug di luar daftar tidak dirender sebagai halaman baru.

## 6. Metadata

`generateMetadata` mengambil title dan description unik dari konten layanan. Metadata hanya memakai copy publik yang aman dan tidak menambahkan canonical, structured data, sitemap, robots customization, atau OG image.

## 7. Reusable Components

- `ServiceDetailPage`: komposisi halaman lengkap dan breadcrumb.
- `ServiceHero`: hero, CTA, dan visual CSS.
- `ServiceBenefits`: daftar manfaat.
- `ServiceScope`: ruang lingkup umum.
- `ServiceProcess`: langkah pembahasan layanan.
- `ServiceCallToAction`: CTA menuju `/#kontak` dan kembali ke daftar layanan.

## 8. Content Safety

Konten tidak boleh memuat harga, kecepatan spesifik, SLA, uptime, jumlah pelanggan atau mitra, cakupan lokasi, alamat, kontak yang belum terverifikasi, testimonial, penghargaan, logo partner, ataupun klaim absolut. Halaman tidak menjanjikan fitur teknis yang belum disetujui.

## 9. Accessibility

Setiap halaman memiliki satu `h1`, breadcrumb `nav` berlabel, `aria-current="page"`, landmark dan section semantik, heading berurutan, focus state dari design system, serta elemen visual dekoratif dengan `aria-hidden`.

## 10. Testing

Test mencakup integritas konten layanan, rendering komposisi halaman detail, dan URL detail pada Service Overview. Test menggunakan Vitest dan React Testing Library dengan semantic query.

## 11. Cara Menambah Layanan Baru

Tambahkan satu objek valid ke `serviceDetails` dengan slug unik dan seluruh field `ServiceDetailContent`. Route statis, metadata, kartu homepage, dan link footer akan mengikuti data tersebut. Tambahkan atau perbarui test bila struktur atau copy yang diuji berubah.

## 12. Definition of Done

Perubahan layanan selesai ketika konten typed dan aman, dynamic route menghasilkan halaman statis valid, metadata unik tersedia, integrasi homepage/footer menggunakan sumber data yang sama, aksesibilitas terpenuhi, serta format, lint, typecheck, test, build, dan `git diff --check` berhasil.
