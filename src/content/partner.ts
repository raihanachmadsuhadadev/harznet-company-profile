import { whatsappContact } from "@/config/contact";
import type { PartnerPageContent } from "@/types/content";

export const partnerPageContent: PartnerPageContent = {
  eyebrow: "PROGRAM KEMITRAAN HARZNET",
  title: "Perluas jangkauan jaringan dan layanan bersama HARZNET.",
  description:
    "HARZNET Partner menghadirkan solusi konektivitas bagi operator RT/RW Net dan penyedia layanan internet yang membutuhkan kapasitas jaringan untuk mendukung distribusi, operasional, dan pengembangan layanan.",
  highlights: ["Kapasitas hingga 1 Gbps", "Dedicated + Metro", "IP Public untuk layanan dedicated"],
  primaryAction: { label: "Lihat Pilihan Bandwidth", href: "#program-partner" },
  secondaryAction: { label: "Konsultasikan Program Mitra", href: whatsappContact.url },
  introduction: {
    eyebrow: "KEMITRAAN KONEKTIVITAS",
    title: "Infrastruktur konektivitas untuk mendukung pertumbuhan layanan mitra.",
    description:
      "Program HARZNET Partner dirancang untuk membantu mitra mengembangkan operasional dan ekspansi jaringan melalui pilihan kapasitas Dedicated dan Metro yang dapat disesuaikan dengan kebutuhan distribusi layanan.",
    benefits: [
      { id: "operator", title: "Konektivitas untuk operator RT/RW Net" },
      { id: "isp", title: "Kolaborasi dengan sesama ISP" },
      { id: "distribution", title: "Kapasitas untuk distribusi jaringan" },
      { id: "growth", title: "Dukungan pengembangan operasional mitra" },
    ],
  },
  program: {
    id: "program-partner",
    eyebrow: "PROGRAM DEDICATED + METRO",
    title: "Pilihan kapasitas jaringan untuk kebutuhan mitra.",
    description:
      "Tersedia 18 pilihan kapasitas mulai dari 100 Mbps hingga 1 Gbps. Pilih kebutuhan bandwidth yang sesuai untuk mendukung operasional dan distribusi layanan jaringan.",
    publicIpLabel: "IP Public untuk program internet dedicated",
    bandwidthOptions: [
      { id: "partner-100", sequence: 1, bandwidth: "100 Mbps", price: "Rp4.500.000" },
      { id: "partner-150", sequence: 2, bandwidth: "150 Mbps", price: "Rp5.000.000" },
      { id: "partner-200", sequence: 3, bandwidth: "200 Mbps", price: "Rp6.000.000" },
      { id: "partner-250", sequence: 4, bandwidth: "250 Mbps", price: "Rp6.500.000" },
      { id: "partner-300", sequence: 5, bandwidth: "300 Mbps", price: "Rp7.000.000" },
      { id: "partner-350", sequence: 6, bandwidth: "350 Mbps", price: "Rp7.500.000" },
      { id: "partner-400", sequence: 7, bandwidth: "400 Mbps", price: "Rp8.000.000" },
      { id: "partner-450", sequence: 8, bandwidth: "450 Mbps", price: "Rp9.000.000" },
      { id: "partner-500", sequence: 9, bandwidth: "500 Mbps", price: "Rp13.000.000" },
      { id: "partner-550", sequence: 10, bandwidth: "550 Mbps", price: "Rp14.300.000" },
      { id: "partner-600", sequence: 11, bandwidth: "600 Mbps", price: "Rp15.000.000" },
      { id: "partner-650", sequence: 12, bandwidth: "650 Mbps", price: "Rp15.600.000" },
      { id: "partner-700", sequence: 13, bandwidth: "700 Mbps", price: "Rp16.100.000" },
      { id: "partner-750", sequence: 14, bandwidth: "750 Mbps", price: "Rp17.250.000" },
      { id: "partner-800", sequence: 15, bandwidth: "800 Mbps", price: "Rp18.400.000" },
      { id: "partner-850", sequence: 16, bandwidth: "850 Mbps", price: "Rp19.550.000" },
      { id: "partner-900", sequence: 17, bandwidth: "900 Mbps", price: "Rp20.700.000" },
      { id: "partner-1000", sequence: 18, bandwidth: "1 Gbps", price: "Rp23.000.000" },
    ],
    ctaLabel: "Konsultasikan Kapasitas Jaringan",
    ctaHref: whatsappContact.url,
  },
  terms: {
    eyebrow: "SYARAT PROGRAM",
    title: "Informasi penting sebelum mengikuti program kemitraan.",
    description: "Ketentuan program mencakup proses survei, pembayaran, instalasi, dan perangkat.",
    note: "Seluruh ketentuan perlu dipahami sebelum proses registrasi dan instalasi.",
    items: [
      { id: "tax", sequence: 1, description: "Harga penawaran belum termasuk PPN 11%." },
      {
        id: "survey",
        sequence: 2,
        description:
          "Lokasi harus disurvei terlebih dahulu. Maksimal penarikan fiber optic adalah 300 meter. Penarikan lebih dari 300 meter dikenakan biaya tambahan Rp10.000 per meter.",
      },
      {
        id: "registration",
        sequence: 3,
        description:
          "Program kemitraan harus membayar biaya registrasi terlebih dahulu sebelum instalasi dilakukan.",
      },
      {
        id: "billing",
        sequence: 4,
        description:
          "Sistem pembayaran atau billing bersifat prepaid atau dibayar di awal, dengan jatuh tempo setiap tanggal 10.",
      },
      { id: "contract", sequence: 5, description: "Minimum kontrak adalah 2 tahun." },
      {
        id: "installation",
        sequence: 6,
        description: "Waktu instalasi maksimal 25 hari kerja setelah pembayaran registrasi.",
      },
      {
        id: "public-ip",
        sequence: 7,
        description: "Program internet dedicated mendapatkan IP Public.",
      },
      {
        id: "routerboard",
        sequence: 8,
        description:
          "Klien harus menyediakan Routerboard, seperti Mikrotik, Cisco, atau perangkat sejenis.",
      },
    ],
  },
  technology: {
    eyebrow: "TEKNOLOGI JARINGAN",
    title: "Kapasitas jaringan untuk kebutuhan distribusi layanan.",
    description:
      "HARZNET Partner menggunakan pendekatan jaringan berbasis teknologi seperti Dense Wavelength Division Multiplexing untuk mendukung kapasitas distribusi data sesuai kebutuhan operasional mitra.",
  },
  finalCta: {
    eyebrow: "MULAI BERMITRA",
    title: "Diskusikan kebutuhan jaringan dan rencana pengembangan layanan Anda.",
    description:
      "Sampaikan kebutuhan lokasi, kapasitas bandwidth, dan rencana distribusi jaringan kepada tim HARZNET.",
    action: { label: "Hubungi Tim HARZNET", href: whatsappContact.url },
  },
};
