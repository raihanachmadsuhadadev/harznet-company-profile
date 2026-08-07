# Continuous Integration HARZNET Public Website

## 1. Tujuan

Continuous Integration (CI) memvalidasi setiap Pull Request dan perubahan pada branch permanen sebelum perubahan tersebut dianggap aman untuk digabungkan atau diteruskan.

## 2. Trigger

Workflow CI berjalan pada:

- `pull_request` ke `develop`;
- `pull_request` ke `main`;
- `push` ke `develop`;
- `push` ke `main`;
- `workflow_dispatch` untuk pemicu manual.

Deployment tidak termasuk dalam workflow ini.

## 3. Environment

CI menggunakan `ubuntu-latest`, Node.js 24.18.0, dan pnpm 10.34.5 yang dibaca dari field `packageManager` di `package.json`. Cache dependency pnpm menggunakan `pnpm-lock.yaml` sebagai dependency path agar invalidasi mengikuti perubahan lockfile.

## 4. Tahapan CI

```text
Checkout
-> Setup pnpm
-> Setup Node.js dan cache
-> Frozen dependency install
-> Quality check
```

`quality:check` menjalankan format check, lint, typecheck, automated test, dan production build. Test dan build tidak dijalankan kembali sebagai langkah workflow terpisah.

## 5. Security Boundary

- Permission workflow hanya `contents: read`.
- Credential checkout tidak dipertahankan.
- Workflow tidak memiliki akses tulis ke repository.
- Workflow tidak melakukan deployment.
- Workflow tidak memerlukan secret.
- CI tidak boleh mengakses internal operational systems.
- CI tidak boleh mengakses database atau internal API.

## 6. Kegagalan CI

Langkah yang gagal menghentikan job. `continue-on-error` tidak digunakan untuk quality gate. Pull Request tidak boleh digabungkan sebelum CI berhasil; perbaikan dilakukan pada working branch. Rerun hanya dilakukan setelah akar masalah diperiksa.

## 7. Validasi Lokal

```text
corepack pnpm install --frozen-lockfile
corepack pnpm run quality:check
git diff --check
git status
```

## 8. Definition of Done

CI dianggap valid ketika:

- workflow memiliki sintaks yang benar;
- frozen install berhasil;
- format check berhasil;
- lint berhasil tanpa warning;
- typecheck berhasil;
- seluruh test berhasil;
- production build berhasil;
- workflow tidak memiliki write permission;
- tidak ada secret atau deployment;
- GitHub Actions run berhasil.
