# HARZNET Company Profile

HARZNET Company Profile adalah website company profile berbasis Next.js yang digunakan untuk menampilkan informasi perusahaan, layanan, area cakupan, identitas brand, dan informasi kontak HARZNET secara modern dan responsif.

## Ringkasan Sistem

Project ini merupakan public-facing company profile website yang dirancang untuk membantu pengunjung memahami profil bisnis HARZNET, layanan yang tersedia, identitas brand, informasi cakupan, serta akses kontak perusahaan. Konten disusun dalam halaman publik dan detail layanan agar informasi dapat ditemukan dengan jelas pada perangkat desktop maupun mobile.

## Developer Role

- Menganalisis kebutuhan konten dan struktur halaman company profile.
- Menyusun struktur halaman website agar informasi perusahaan, layanan, dan kontak mudah dipahami pengunjung.
- Mengembangkan frontend website menggunakan Next.js.
- Membuat tampilan responsif untuk desktop dan mobile.
- Menyiapkan struktur project, dokumentasi README, dan konfigurasi dasar pengembangan.
- Menyesuaikan komponen, layout, dan section website berdasarkan kebutuhan company profile.

## Tech Stack

### Frontend

- Next.js 16 dengan App Router
- React 19
- TypeScript

### Styling

- Tailwind CSS 4
- Global CSS
- CSS Modules untuk styling komponen tertentu

### Tools

- pnpm
- Git
- ESLint dan Prettier
- Vitest dan Testing Library
- Playwright

## Fitur Utama

- Landing page company profile dengan hero, informasi perusahaan, ringkasan layanan, testimoni, dan call-to-action.
- Halaman detail untuk HARZNET Home, Corporate Bandwidth, Partner, Managed Service, dan Software Corporation.
- Halaman publik untuk informasi perusahaan, artikel informasi, media unduhan, kontak, kuesioner, kebijakan privasi, dan syarat ketentuan.
- Formulir kontak dengan validasi dan pengiriman email melalui konfigurasi SMTP.
- Navigasi desktop, navigasi mobile, dropdown layanan, footer, dan tombol kontak WhatsApp.
- Responsive layout untuk berbagai ukuran layar.
- Metadata halaman, sitemap, dan robots configuration untuk kebutuhan SEO dasar.
- Penanganan halaman tidak ditemukan dan application error.

## Struktur Project

```text
harznet-company-profile/
|-- docs/                 # Dokumentasi teknis dan pengembangan
|-- e2e/                  # Pengujian end-to-end dengan Playwright
|-- public/
|   `-- images/           # Aset gambar publik
|-- src/
|   |-- actions/          # Server action, termasuk pengiriman formulir kontak
|   |-- app/              # Route, layout, metadata, sitemap, dan robots
|   |-- components/       # Komponen UI, layout, halaman, dan section reusable
|   |-- config/           # Konfigurasi publik website
|   |-- content/          # Konten lokal bertipe TypeScript
|   |-- features/         # Modul berbasis fitur atau domain
|   |-- lib/              # Helper, validasi, email, dan utilitas SEO
|   |-- services/         # Adapter layanan publik
|   |-- test/             # Setup dan fixture pengujian
|   `-- types/            # Type dan interface bersama
|-- .env.example          # Contoh konfigurasi environment
|-- package.json          # Dependency dan script project
|-- pnpm-lock.yaml        # Lockfile pnpm
|-- next.config.ts        # Konfigurasi Next.js
`-- README.md             # Dokumentasi project
```

## Screenshots

### Beranda
![Beranda](docs/screenshots/01.beranda.png)

### Harznet Home
![Harznet Home](docs/screenshots/02.harznet-home.png)

### Corporate Bandwith
![Corporate Badnwith](docs/screenshots/03.corporate-bandwith.png)

### Partner
![Partner](docs/screenshots/04.partner.png)

### Managed Service
![Managed Service](docs/screenshots/05.managed-service.png)

### Software Corporation
![Managed Service](docs/screenshots/06.software-corporation.png)

### Tentang Kami
![Tentang Kami](docs/screenshots/07.tentang-kami.png)

### Informasi
![Informasi](docs/screenshots/08.informasi.png)

### Kuisioner
![Kuisioner](docs/screenshots/09.kuisioner.png)

## Persiapan Environment

Pastikan perangkat pengembangan telah memiliki:

- Node.js yang kompatibel dengan Next.js 16
- pnpm 10
- Git

## Installation

```bash
git clone https://github.com/raihanachmadsuhadadev/harznet-company-profile.git
cd harznet-company-profile
pnpm install
```

## Environment Example

Salin `.env.example` menjadi `.env.local`, kemudian isi konfigurasi sesuai environment yang digunakan.

```env
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=

CONTACT_EMAIL_FROM=
CONTACT_EMAIL_TO=

CONTACT_MAP_EMBED_URL=
```

Variabel `SMTP_*` dan `CONTACT_EMAIL_*` digunakan untuk pengiriman pesan dari formulir kontak. `CONTACT_MAP_EMBED_URL` digunakan untuk menampilkan peta pada area kontak apabila URL yang valid tersedia. Jangan menyimpan credential pada source code atau mengeksposnya melalui variabel publik.

## Menjalankan Aplikasi

Jalankan development server:

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) melalui browser.

## Build

Buat production build:

```bash
pnpm build
```

Jalankan hasil build:

```bash
pnpm start
```

## Project Status

Project ini merupakan company profile website berbasis Next.js dengan halaman utama, halaman layanan, halaman informasi pendukung, dan kanal kontak. Pengembangan berikutnya dapat mencakup peningkatan SEO, pengelolaan konten, penyempurnaan integrasi formulir kontak, analytics, deployment configuration, dan optimasi performa.

## Catatan Pengembangan Lanjutan

- Menambahkan atau merapikan konten halaman company profile.
- Menambahkan SEO metadata.
- Menambahkan optimasi performa gambar.
- Menambahkan contact form.
- Menambahkan integrasi analytics.
- Menambahkan deployment configuration.
- Menambahkan sitemap dan robots.txt.
- Menambahkan accessibility improvement.
- Menambahkan responsive testing untuk berbagai ukuran layar.
