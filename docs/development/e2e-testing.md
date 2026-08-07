# E2E Testing HARZNET Public Website

## Tujuan dan Tooling

Playwright memvalidasi website publik melalui browser nyata. Fondasi awal menggunakan `@playwright/test` dan Chromium saja.

## Struktur dan Web Server

Test berada di `e2e/` untuk route publik, navigasi, kuesioner, SEO, dan responsive. Playwright membangun aplikasi lalu selalu memulai production server miliknya sendiri pada `http://127.0.0.1:3100`. `reuseExistingServer` dinonaktifkan agar test tidak tersambung ke development server lokal; port 3000 tidak digunakan untuk E2E dan production tidak diuji.

## Coverage

Route diperiksa terhadap status, `h1`, console, dan page error. Navigasi mencakup desktop/mobile. Kuesioner mencakup pilihan, ringkasan lokal, reset, dan larangan request eksternal. SEO mencakup canonical, noindex, sitemap, dan robots. Responsive memeriksa overflow horizontal.

## Console dan Network Policy

Console error, page error, serta request menuju origin eksternal dianggap kegagalan. internal operational systems, API eksternal, analytics, dan production tidak boleh diakses.

## Perintah Lokal dan CI

Gunakan `pnpm run test:e2e`, `test:e2e:headed`, `test:e2e:ui`, dan `test:e2e:report`. E2E tidak termasuk `quality:check`. Workflow terpisah memasang Chromium dan berjalan dengan permission read-only.

## Artifact dan Debugging

Report, hasil test, trace, screenshot, dan video diabaikan Git. Trace, screenshot, serta video hanya dipertahankan saat gagal. Jangan menambahkan route debug atau target production.

## Security, Known Limitations, dan Definition of Done

Hanya Chromium; belum ada Firefox/WebKit, visual regression, Lighthouse, atau pengujian production. Kontak dan form submission belum aktif; tidak ada integrasi internal operational systems. Selesai ketika quality gate, E2E, audit console/network, dan Git diff check lulus.
