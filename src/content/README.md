# Konten

Folder ini menjadi sumber awal local-first content menggunakan TypeScript statis. Konten harus dipisahkan dari React component dan setiap content file harus typed.

Pola nama file yang dapat digunakan antara lain:

- `services.content.ts`
- `navigation.content.ts`
- `testimonials.content.ts`

Konten lokal nantinya dapat diganti melalui adapter tanpa mengubah komponen presentation. Folder ini tidak boleh melakukan network request dan belum memuat konten bisnis aktual pada tiket ini.
