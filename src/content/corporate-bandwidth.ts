import { whatsappContact } from "@/config/contact";
import type { CorporateBandwidthPageContent } from "@/types/content";

export const corporateBandwidthPageContent: CorporateBandwidthPageContent = {
  eyebrow: "KONEKTIVITAS BISNIS HARZNET",
  title: "Konektivitas berkapasitas tinggi untuk operasional bisnis yang terus berkembang.",
  description:
    "HARZNET Corporate Bandwidth membantu perusahaan dan organisasi memenuhi kebutuhan konektivitas antar lokasi, transfer data, layanan cloud, dan aktivitas digital melalui jaringan yang dirancang untuk kebutuhan bisnis.",
  highlights: [
    "Kapasitas hingga 500 Mbps",
    "Dukungan teknologi DWDM",
    "Pilihan layanan yang skalabel",
  ],
  primaryAction: {
    label: "Lihat Pilihan Bandwidth",
    href: "#pilihan-corporate-bandwidth",
  },
  secondaryAction: {
    label: "Konsultasikan Kebutuhan Bisnis",
    href: whatsappContact.url,
  },
  registration: {
    label: "Registrasi",
    scheme: "OTC — One Time Connection",
    quantity: "1 koneksi",
    price: "Rp5.000.000",
    description: "Biaya registrasi dibayarkan satu kali untuk proses awal koneksi layanan.",
  },
  packagesSection: {
    id: "pilihan-corporate-bandwidth",
    eyebrow: "PILIHAN BANDWIDTH",
    title: "Pilih kapasitas koneksi sesuai kebutuhan operasional.",
    description:
      "Bandingkan pilihan Internet Innercity SOHO dan Broadband + Metro berdasarkan kapasitas bandwidth serta kebutuhan penggunaan perusahaan.",
  },
  serviceCategories: [
    {
      id: "internet-innercity-soho",
      name: "Internet Innercity SOHO",
      description:
        "Pilihan konektivitas untuk kebutuhan usaha, kantor, dan operasional dengan kapasitas mulai dari 25 Mbps hingga 200 Mbps.",
      speedRange: "25–200 Mbps",
      packages: [
        { id: "soho-25", bandwidth: "25 Mbps", price: "Rp450.000", billingPeriod: "per bulan" },
        { id: "soho-50", bandwidth: "50 Mbps", price: "Rp550.000", billingPeriod: "per bulan" },
        { id: "soho-100", bandwidth: "100 Mbps", price: "Rp1.000.000", billingPeriod: "per bulan" },
        { id: "soho-150", bandwidth: "150 Mbps", price: "Rp1.300.000", billingPeriod: "per bulan" },
        { id: "soho-200", bandwidth: "200 Mbps", price: "Rp1.500.000", billingPeriod: "per bulan" },
      ],
      ctaLabel: "Konsultasikan Layanan Ini",
      ctaHref: whatsappContact.url,
    },
    {
      id: "internet-broadband-metro",
      name: "Internet Broadband + Metro",
      description:
        "Pilihan bandwidth berkapasitas lebih besar untuk kebutuhan konektivitas perusahaan dan komunikasi data antar lokasi.",
      speedRange: "100–500 Mbps",
      packages: [
        {
          id: "metro-100",
          bandwidth: "100 Mbps",
          price: "Rp2.000.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-150",
          bandwidth: "150 Mbps",
          price: "Rp3.000.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-200",
          bandwidth: "200 Mbps",
          price: "Rp4.000.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-250",
          bandwidth: "250 Mbps",
          price: "Rp4.375.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-300",
          bandwidth: "300 Mbps",
          price: "Rp5.250.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-350",
          bandwidth: "350 Mbps",
          price: "Rp6.125.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-400",
          bandwidth: "400 Mbps",
          price: "Rp7.000.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-450",
          bandwidth: "450 Mbps",
          price: "Rp7.200.000",
          billingPeriod: "per bulan",
        },
        {
          id: "metro-500",
          bandwidth: "500 Mbps",
          price: "Rp8.000.000",
          billingPeriod: "per bulan",
        },
      ],
      ctaLabel: "Konsultasikan Layanan Ini",
      ctaHref: whatsappContact.url,
    },
  ],
  useCases: {
    eyebrow: "KEBUTUHAN BISNIS",
    title: "Mendukung berbagai kebutuhan konektivitas perusahaan.",
    description:
      "Pilihan kapasitas dapat dibahas berdasarkan lokasi, alur data, dan perkembangan aktivitas operasional perusahaan.",
    items: [
      {
        id: "locations",
        title: "Konektivitas antar kantor",
        description:
          "Mendukung komunikasi dan pertukaran data di antara lokasi operasional perusahaan.",
      },
      {
        id: "transfer",
        title: "Transfer data dalam kapasitas besar",
        description:
          "Menunjang perpindahan data yang dibutuhkan dalam aktivitas dan alur kerja bisnis.",
      },
      {
        id: "cloud",
        title: "Akses aplikasi dan layanan cloud",
        description:
          "Mendukung akses tim terhadap aplikasi cloud yang digunakan dalam kegiatan operasional.",
      },
      {
        id: "growth",
        title: "Pengembangan kebutuhan jaringan perusahaan",
        description:
          "Memberikan pilihan kapasitas untuk dibahas seiring berkembangnya kebutuhan organisasi.",
      },
    ],
  },
  technologyInfo: {
    eyebrow: "TEKNOLOGI JARINGAN",
    title: "Teknologi untuk kebutuhan kapasitas jaringan",
    description:
      "Teknologi seperti Dense Wavelength Division Multiplexing memungkinkan pemanfaatan jalur jaringan untuk membawa kapasitas data yang lebih besar sesuai kebutuhan konektivitas perusahaan.",
  },
  finalCta: {
    eyebrow: "KONSULTASI LAYANAN",
    title: "Diskusikan kebutuhan bandwidth perusahaan Anda.",
    description:
      "Sampaikan kebutuhan lokasi, aktivitas operasional, dan kapasitas koneksi yang diperlukan kepada tim HARZNET.",
    action: { label: "Hubungi Tim HARZNET", href: whatsappContact.url },
  },
};
