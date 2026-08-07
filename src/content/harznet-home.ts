import { whatsappContact } from "@/config/contact";
import type { HarznetHomePageContent } from "@/types/content";

export const harznetHomePageContent: HarznetHomePageContent = {
  eyebrow: "INTERNET RUMAH HARZNET",
  title: "Internet rumah cepat dan nyaman untuk kebutuhan seluruh keluarga.",
  description:
    "HARZNET Home menghadirkan koneksi berbasis Fiber To The Home untuk mendukung aktivitas streaming, belajar, bekerja, bermain, dan berbagai kebutuhan digital di rumah.",
  highlights: ["Fiber To The Home", "Biaya bulanan flat", "Dukungan perangkat sewa"],
  primaryAction: { label: "Lihat Pilihan Paket", href: "#paket-harznet-home" },
  secondaryAction: { label: "Konsultasikan Kebutuhan", href: whatsappContact.url },
  installation: {
    title: "Biaya pemasangan Rp300.000",
    description: "Berlaku untuk seluruh pilihan paket HARZNET Home.",
  },
  packagesSection: {
    id: "paket-harznet-home",
    eyebrow: "PILIHAN PAKET",
    title: "Pilih koneksi yang sesuai dengan aktivitas di rumah.",
    description:
      "Bandingkan kecepatan, jumlah perangkat, dan kebutuhan penggunaan setiap paket HARZNET Home.",
  },
  packages: [
    {
      id: "harznet-home",
      name: "Harznet Home",
      speed: "Hingga 41 Mbps",
      deviceRange: "2–8 perangkat",
      price: "Rp140.000",
      billingPeriod: "per bulan",
      features: [
        "Browsing dan media sosial",
        "Streaming video standar",
        "Cocok untuk penggunaan ringan keluarga",
      ],
      usageNote: "Terbatas untuk aktivitas berat secara bersamaan.",
    },
    {
      id: "harznet-speed",
      name: "Harznet Speed",
      speed: "Hingga 53 Mbps",
      deviceRange: "8–15 perangkat",
      price: "Rp195.000",
      billingPeriod: "per bulan",
      features: ["Streaming HD", "Browsing", "Video call", "Aktivitas beberapa perangkat"],
    },
    {
      id: "harznet-velocity",
      name: "Harznet Velocity",
      speed: "Hingga 63 Mbps",
      deviceRange: "15–20 perangkat",
      price: "Rp225.000",
      billingPeriod: "per bulan",
      features: [
        "Rumah tangga dengan banyak pengguna",
        "Kantor kecil",
        "Streaming 4K",
        "Gaming online pada beberapa perangkat",
      ],
    },
    {
      id: "harznet-hyper",
      name: "Harznet Hyper",
      speed: "Hingga 100 Mbps",
      deviceRange: "Unlimited",
      price: "Rp350.000",
      billingPeriod: "per bulan",
      features: [
        "Keluarga besar",
        "Kantor dengan banyak perangkat",
        "Streaming 4K",
        "Bekerja dari rumah",
        "Perangkat smart home",
      ],
    },
  ],
  benefits: {
    title: "Internet rumah yang lebih praktis untuk aktivitas sehari-hari.",
    items: [
      "Jaringan berbasis FTTH",
      "Biaya bulanan flat",
      "Dukungan perangkat sewa",
      "Mendukung berbagai aktivitas digital keluarga",
    ],
  },
  finalCta: {
    title: "Masih mempertimbangkan paket yang sesuai?",
    description: "Sampaikan kebutuhan penggunaan dan jumlah perangkat Anda kepada tim HARZNET.",
    action: { label: "Hubungi Tim HARZNET", href: whatsappContact.url },
  },
};
