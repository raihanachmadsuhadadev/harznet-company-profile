import type { ContactCategory } from "@/types/content";
export const contactCategories: readonly ContactCategory[] = [
  "Layanan rumah",
  "Layanan bisnis",
  "Kemitraan",
  "Managed Service",
  "Software",
].map((title) => ({
  title,
  description: "Pilih kategori ini untuk membantu menyiapkan pembahasan kebutuhan Anda.",
}));
export const contactSteps = [
  "Pilih kebutuhan",
  "Siapkan informasi dasar",
  "Hubungi kanal resmi ketika tersedia",
] as const;
