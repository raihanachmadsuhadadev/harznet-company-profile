import type { MediaItem } from "@/types/content";
export const mediaItems: readonly MediaItem[] = [
  "Profil perusahaan",
  "Informasi layanan",
  "Materi publik",
].map((title) => ({
  title,
  description: "Materi resmi untuk kategori ini akan tersedia melalui kanal ini.",
  status: "Belum tersedia",
}));
