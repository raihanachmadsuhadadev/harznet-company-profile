import type { InformationPageContent } from "@/types/content";

export const informationPageContent: InformationPageContent = {
  eyebrow: "INFORMASI HARZNET",
  title: "Informasi layanan dan program HARZNET.",
  description:
    "Lihat informasi pilihan layanan, program kemitraan, konektivitas bisnis, dan promosi HARZNET yang sedang tersedia.",
  posters: [
    {
      id: "dedicated-internet",
      src: "/images/information/posters/poster-dedicated-internet.jpg",
      alt: "Poster paket Dedicated Internet HARZNET",
      href: "/layanan/corporate-bandwidth/",
      width: 1080,
      height: 1350,
    },
    {
      id: "dedicated-kemitraan",
      src: "/images/information/posters/poster-dedicated-kemitraan.jpg",
      alt: "Poster paket Dedicated Kemitraan HARZNET",
      href: "/layanan/partner/",
      width: 1080,
      height: 1350,
    },
    {
      id: "corporate-bandwidth",
      src: "/images/information/posters/poster-corporate-bandwidth.jpg",
      alt: "Poster layanan Corporate Bandwidth HARZNET",
      href: "/layanan/corporate-bandwidth/",
      width: 1080,
      height: 1350,
    },
    {
      id: "promo-kemerdekaan-harznet-home",
      src: "/images/information/posters/poster-promo-kemerdekaan-harznet-home.jpg",
      alt: "Poster promo Kemerdekaan HARZNET Home",
      href: "/layanan/harznet-home/",
      width: 1024,
      height: 1536,
    },
  ],
};
