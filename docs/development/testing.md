# Testing HARZNET Public Website

## 1. Tujuan

Testing foundation menyediakan unit test untuk logika murni, component test untuk perilaku UI yang terisolasi, dan coverage untuk menunjukkan bagian source yang dijalankan oleh test. Fondasi ini tidak mengubah runtime application.

## 2. Tooling

- Vitest sebagai unit dan component test runner.
- React Testing Library untuk merender dan memeriksa komponen berdasarkan perilaku pengguna.
- jsdom sebagai environment DOM untuk component test.
- jest-dom untuk matcher assertion DOM yang mudah dibaca.
- V8 sebagai provider coverage.
- Playwright untuk E2E browser pada Chromium.

## 3. Struktur Testing

```text
src/
└── test/
    ├── setup.ts
    ├── examples/
    └── fixtures/
```

- `setup.ts` memuat global test setup yang digunakan seluruh test.
- `examples/` hanya berisi smoke test untuk membuktikan testing foundation bekerja.
- `fixtures/` hanya berisi fixture yang independen dari production application.
- Actual test sebaiknya colocated dengan source menggunakan `*.test.ts` atau `*.test.tsx`.

## 4. Perintah Testing

```text
pnpm run test
pnpm run test:watch
pnpm run test:coverage
pnpm run test:e2e
pnpm run quality:check
```

- `pnpm run test` menjalankan seluruh test satu kali dan selesai sendiri.
- `pnpm run test:watch` menjalankan test dalam watch mode saat pengembangan lokal.
- `pnpm run test:coverage` menjalankan test dan menghasilkan laporan coverage.
- `pnpm run test:e2e` menjalankan browser test terhadap server lokal production-like.
- `pnpm run quality:check` menjalankan format check, lint, typecheck, test, lalu production build.

Vitest menguji unit dan component secara terisolasi, sedangkan Playwright menguji alur lintas route melalui browser. E2E tidak termasuk `quality:check` dan dijalankan melalui workflow terpisah.

## 5. Konvensi Penamaan

- Unit test: `*.test.ts`
- Component test: `*.test.tsx`
- Test fixture: nama yang mendeskripsikan fixture
- Global setup: `src/test/setup.ts`

## 6. Prinsip Pengujian

- Uji perilaku, bukan detail implementasi.
- Gunakan semantic role dan accessible name.
- Hindari `data-testid` apabila semantic query tersedia.
- Test harus deterministic.
- Jangan menggunakan external API.
- Hindari ketergantungan terhadap waktu nyata, random value, dan state global.
- Jangan menggunakan snapshot sebagai default.
- Mock hanya pada system boundary.
- Sample fixture tidak boleh masuk ke runtime application.

## 7. Server dan Client Component

Synchronous Server Component dan Client Component sederhana dapat diuji. Async Server Component tidak menjadi target Vitest; async Server Component dan alur browser akan ditangani melalui E2E pada tiket Playwright. Jangan memindahkan component menjadi Client Component hanya agar mudah diuji.

## 8. Coverage

Coverage menggunakan provider V8 dan menyediakan laporan terminal, HTML, serta JSON summary. Folder `coverage/` diabaikan Git. Threshold belum ditetapkan pada tahap foundation dan baru dapat ditentukan setelah tersedia meaningful production test baseline. Persentase coverage tidak menggantikan kualitas assertion.

## 9. Definition of Done

Testing dianggap selesai ketika:

- unit test berhasil;
- component test berhasil;
- test tidak mengakses external API;
- coverage berhasil dibuat;
- lint berhasil;
- typecheck berhasil;
- build berhasil;
- `quality:check` berhasil;
- Git diff check berhasil;
- tidak ada coverage artifact atau dependency lokal yang terlacak.
