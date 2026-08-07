# Komponen

Folder ini menampung React component yang dapat digunakan kembali. Komponen yang hanya relevan untuk satu route atau domain sebaiknya ditempatkan bersama feature terkait, bukan di sini.

Subfolder yang direncanakan ketika sudah memiliki implementasi adalah:

- `layout/` untuk `Header`, `Footer`, navigation, dan page shell.
- `shared/` untuk komponen reusable lintas feature.
- `ui/` untuk design-system primitives dan komponen ShadCN pada tiket berikutnya.

Server Component menjadi default. Direktif `"use client"` hanya digunakan pada komponen interaktif yang benar-benar memerlukan browser state atau browser API. Nama file komponen menggunakan PascalCase, misalnya `ExampleCard.tsx`.

Business content tidak boleh ditulis langsung di dalam komponen. Komponen menerima data melalui props agar presentation tetap terpisah dari sumber konten.
