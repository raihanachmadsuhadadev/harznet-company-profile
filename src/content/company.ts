import type { CompanyValue } from "@/types/content";
export const companyProfile = {
  title: "HARZNET, bagian dari PT Cemerlang Internet Indonesia",
  description:
    "HARZNET hadir untuk layanan konektivitas, jaringan, pengelolaan teknologi, kemitraan, dan solusi perangkat lunak.",
} as const;
export const companyFocus = [
  "Konektivitas",
  "Jaringan",
  "Managed Service",
  "Kemitraan",
  "Solusi perangkat lunak",
] as const;
export const companyValues: readonly CompanyValue[] = [
  { title: "Memahami kebutuhan", description: "Memulai dari konteks penggunaan dan tujuan." },
  { title: "Perencanaan terstruktur", description: "Menyusun arah solusi secara jelas." },
  { title: "Implementasi terkoordinasi", description: "Menjaga langkah kerja tetap terarah." },
  {
    title: "Evaluasi berkelanjutan",
    description: "Meninjau kebutuhan untuk pembahasan berikutnya.",
  },
];
