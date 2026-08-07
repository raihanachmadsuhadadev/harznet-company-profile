# Code Quality HARZNET Public Website

## 1. Tujuan

Quality baseline ini menyatukan formatting, lint, typecheck, dan production build agar perubahan dapat diperiksa secara konsisten tanpa mengubah tampilan atau perilaku aplikasi.

## 2. Tooling

- Prettier menangani formatting source code.
- ESLint melakukan static analysis dan menolak warning.
- TypeScript melakukan type checking tanpa menghasilkan output.
- Next.js `typegen` menghasilkan route types sebelum pemeriksaan TypeScript.
- Vitest menjalankan unit test dan component test.
- Next.js `build` memvalidasi production build.

## 3. Package Manager

Package manager project adalah pnpm 10.34.5. Gunakan versi yang ditetapkan oleh field `packageManager` di `package.json`; jangan menggunakan npm atau yarn. Setelah clone, instal dependency dengan frozen lockfile agar versi yang terpasang tetap sesuai lockfile.

## 4. Perintah Utama

```text
pnpm install --frozen-lockfile
pnpm run format
pnpm run format:check
pnpm run lint
pnpm run lint:fix
pnpm run typegen
pnpm run typecheck
pnpm run test
pnpm run test:watch
pnpm run test:coverage
pnpm run build
pnpm run quality:check
```

- `pnpm install --frozen-lockfile`: memasang dependency tanpa mengubah lockfile.
- `pnpm run format`: memformat file yang termasuk scope Prettier.
- `pnpm run format:check`: memeriksa formatting tanpa menulis file.
- `pnpm run lint`: menjalankan ESLint dan gagal bila terdapat warning.
- `pnpm run lint:fix`: menjalankan perbaikan ESLint yang aman dan harus direview.
- `pnpm run typegen`: menghasilkan route-aware types dari struktur App Router.
- `pnpm run typecheck`: menjalankan typegen lalu `tsc --noEmit`.
- `pnpm run test`: menjalankan seluruh test satu kali dan selesai tanpa watch mode.
- `pnpm run test:watch`: menjalankan test dalam watch mode untuk pengembangan lokal.
- `pnpm run test:coverage`: menjalankan test satu kali dan menghasilkan laporan coverage.
- `pnpm run build`: membuat dan memvalidasi production build.
- `pnpm run quality:check`: menjalankan format check, lint, typecheck, test, dan build berurutan tanpa auto-fix.

## 5. Urutan Validasi Sebelum Commit

```text
pnpm run format
pnpm run quality:check
git diff --check
git status
```

Review seluruh diff setelah formatting dan sebelum commit.

## 6. Aturan Formatting

- Line ending menggunakan LF.
- Indentasi menggunakan dua spasi.
- Semicolon aktif.
- String menggunakan double quote.
- Trailing comma aktif.
- Print width adalah 100 karakter.
- Generated files, dependency, asset, dan protected documentation tidak diformat oleh tiket ini.

## 7. Aturan Lint

- Warning diperlakukan sebagai kegagalan.
- Unused ESLint disable directive diperlakukan sebagai error.
- Rule tidak boleh dimatikan tanpa alasan teknis yang jelas.
- Hasil `lint:fix` harus direview sebelum commit.

## 8. Aturan TypeScript

- Strict mode tetap aktif.
- `next typegen` dijalankan sebelum `tsc --noEmit`.
- `any`, type assertion, dan ignore directive tidak boleh digunakan untuk menutupi error tanpa alasan teknis.
- Type boundary untuk data eksternal harus eksplisit.

## 9. Definition of Done

Perubahan dianggap memenuhi quality baseline ketika:

- format check berhasil;
- lint tanpa warning berhasil;
- typecheck berhasil;
- automated test berhasil;
- production build berhasil;
- Git diff check berhasil;
- tidak ada generated file, credential, atau dependency lokal yang terlacak.

## 10. Continuous Integration

CI menjalankan `pnpm run quality:check` agar hasil validasi lokal dan CI tetap konsisten. Pull Request tidak boleh digabungkan ketika CI gagal. Detail workflow dan batas keamanannya tersedia di [Continuous Integration HARZNET Public Website](./continuous-integration.md).
