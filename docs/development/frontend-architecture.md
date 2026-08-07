# Arsitektur Frontend HARZNET Public Website

## 1. Tujuan

Struktur frontend ini memisahkan routing, presentation, content, konfigurasi, feature, utility, integrasi, dan type agar tanggung jawab setiap modul jelas. Pemisahan tersebut menjaga codebase tetap sederhana saat ini sekaligus memungkinkan pertumbuhan terukur tanpa menumpuk seluruh logika di route.

## 2. Prinsip Utama

- Next.js App Router menangani route, layout, metadata, loading, error, dan komposisi halaman.
- Server Component menjadi default.
- Client Component digunakan seminimal mungkin dan hanya untuk interaksi yang memerlukan browser state atau browser API.
- Content dipisahkan dari presentation agar komponen tidak bergantung pada sumber data tertentu.
- Tahap awal menggunakan local-first content yang typed.
- Integrasi data masa depan dilakukan melalui adapter approved Public API.
- Aksesibilitas, performa, dan keamanan menjadi baseline setiap implementasi.

## 3. Struktur Folder

```text
src/
â”œâ”€â”€ app/
â”œâ”€â”€ components/
â”œâ”€â”€ config/
â”œâ”€â”€ content/
â”œâ”€â”€ features/
â”œâ”€â”€ lib/
â”œâ”€â”€ services/
â”‚   â””â”€â”€ public-api/
â””â”€â”€ types/
```

- `app/`: routing, layout, metadata, loading, error, dan komposisi halaman.
- `components/`: React component reusable lintas route atau feature.
- `config/`: konfigurasi publik yang aman berada di source code.
- `content/`: local typed content yang terpisah dari presentation.
- `features/`: modul berdasarkan feature atau domain.
- `lib/`: utility dan helper murni dengan tanggung jawab tunggal.
- `services/public-api/`: adapter server-side untuk approved Public API.
- `types/`: type dan interface yang digunakan lintas feature.

Folder hanya dibuat ketika memiliki tujuan yang jelas dan digunakan oleh tiket aktif. Struktur tidak boleh diisi abstraksi spekulatif.

## 4. Alur Komposisi Halaman

```text
Route di src/app
-> feature atau page composition
-> reusable component
-> local typed content atau approved Public API adapter
```

`src/app` tidak menjadi tempat menumpuk seluruh komponen dan data. Route mengorkestrasi kebutuhan halaman, sedangkan detail feature, presentation, dan sumber data ditempatkan sesuai tanggung jawabnya.

## 5. Batas Server dan Client

Server Component adalah pilihan default. Direktif `"use client"` hanya ditempatkan pada leaf component interaktif yang membutuhkan state, event browser, atau browser API.

Secret dan credential tidak boleh masuk ke client bundle. Browser tidak boleh menghubungi internal internal operational systems. Operasi sensitif dan akses approved Public API dilakukan melalui batas server-side.

## 6. Strategi Konten

Tahap awal menggunakan local typed content. Data bisnis tetap mengikuti baseline existing website, dan setiap perubahan data bisnis memerlukan persetujuan.

Sumber content dapat diganti melalui adapter tanpa mengubah komponen presentation. Komponen bergantung pada bentuk data yang typed, bukan pada lokasi penyimpanan content.

## 7. Batas Integrasi Public API

Public website dilarang melakukan:

- direct database access;
- internal endpoint access;
- akses ke Network Connector atau Telemetry;
- device provisioning;
- aktivasi pelanggan;
- penyimpanan credential pada browser.

Integrasi masa depan hanya dilakukan melalui approved Public API dan server-side adapter. Local TypeScript content tetap menjadi sumber awal sampai integrasi tersebut disetujui.

## 8. Konvensi Penamaan

- React component: `PascalCase.tsx`
- Route segment: `kebab-case`
- Utility: `kebab-case.ts`
- Content: `*.content.ts`
- Type khusus domain: `*.types.ts`
- Adapter: `*.adapter.ts`
- Validation: `*.schema.ts`
- Test nantinya mengikuti nama file sumber.
- `index.ts` barrel tidak dibuat secara default.

## 9. Aturan Dependency

Arah dependency yang diperbolehkan:

```text
app -> features/components
features -> components/lib/services/types
components -> lib/types
content -> types
services -> types/lib
```

Larangan dependency:

- `lib` tidak boleh bergantung pada feature.
- Shared component tidak boleh bergantung pada route.
- `content` tidak boleh mengimpor React component.
- Browser component tidak boleh mengimpor server-only credential.

## 10. Definition of Done Struktur Baru

Setiap folder atau modul baru harus:

- memiliki tujuan yang jelas;
- digunakan oleh tiket aktif;
- tidak dibuat hanya untuk kemungkinan masa depan;
- mengikuti dependency direction;
- tidak mencampurkan UI, content, dan integration;
- lulus lint, typecheck, dan build.

Pilihan state-management library, CMS, authentication provider, deployment provider, dan testing framework final belum ditetapkan oleh dokumen ini.
