import { whatsappContact } from "@/config/contact";
import type { ManagedServicePageContent } from "@/types/content";

// Catatan sumber internal: klaim lama mengenai bantuan teknis 24/7, IDS/IPS,
// enkripsi seluruh data, analitik AI, cloud management, dan jaminan SLA perlu
// diverifikasi perusahaan sebelum dipublikasikan sebagai komitmen produksi.
export const managedServicePageContent: ManagedServicePageContent = {
  eyebrow: "OPERASIONAL JARINGAN TERKELOLA",
  title: "Kelola performa, keamanan, dan keberlanjutan jaringan secara lebih terarah.",
  description:
    "HARZNET Managed Service membantu pelanggan memantau, memelihara, dan mengelola infrastruktur jaringan secara proaktif agar kebutuhan operasional dapat ditangani secara lebih terstruktur.",
  highlights: ["Pemantauan proaktif", "Pemeliharaan terjadwal", "Pengelolaan infrastruktur"],
  primaryAction: { label: "Lihat Cakupan Layanan", href: "#cakupan-managed-service" },
  secondaryAction: { label: "Konsultasikan Kebutuhan", href: whatsappContact.url },
  flow: {
    eyebrow: "SIKLUS LAYANAN",
    title: "Pendekatan operasional yang berkelanjutan.",
    description:
      "Tahapan layanan disusun untuk membantu pemantauan, pemeliharaan, penanganan, dan evaluasi jaringan.",
    items: [
      {
        id: "monitor",
        sequence: 1,
        title: "Monitor",
        description: "Mendeteksi kondisi dan anomali.",
      },
      {
        id: "prevent",
        sequence: 2,
        title: "Prevent",
        description: "Melakukan pemeliharaan sebelum gangguan berkembang.",
      },
      {
        id: "resolve",
        sequence: 3,
        title: "Resolve",
        description: "Menangani kendala dan memulihkan layanan.",
      },
      {
        id: "improve",
        sequence: 4,
        title: "Improve",
        description: "Mengevaluasi performa dan kebutuhan pengembangan.",
      },
    ],
  },
  capabilities: {
    id: "cakupan-managed-service",
    eyebrow: "CAKUPAN MANAGED SERVICE",
    title: "Dukungan menyeluruh untuk operasional dan pengembangan jaringan.",
    description:
      "Cakupan layanan menggabungkan pemantauan, pemeliharaan, pengelolaan, keamanan, dan peningkatan infrastruktur jaringan.",
    items: [
      {
        id: "monitoring",
        sequence: 1,
        title: "Pemantauan dan Pengelolaan Proaktif",
        description: "Pemantauan kondisi jaringan untuk mendukung pengelolaan operasional.",
        items: [
          "Network monitoring real-time",
          "Traffic management",
          "Alarm system untuk anomali jaringan",
        ],
      },
      {
        id: "maintenance",
        sequence: 2,
        title: "Pemeliharaan Preventif dan Korektif",
        description: "Pemeriksaan terjadwal dan penanganan kebutuhan korektif jaringan.",
        items: [
          "Pemeriksaan rutin fiber optic, OLT, dan perangkat pendukung",
          "Perawatan konektor dan pengujian menggunakan OTDR",
          "Penanganan gangguan perangkat atau kabel",
        ],
      },
      {
        id: "infrastructure",
        sequence: 3,
        title: "Pengelolaan Infrastruktur",
        description: "Pengelolaan aset, dokumentasi, dan kebutuhan kapasitas jaringan.",
        items: [
          "Manajemen aset OLT, ONT, dan splitter",
          "Dokumentasi topologi jaringan",
          "Perencanaan kapasitas jaringan",
        ],
      },
      {
        id: "security",
        sequence: 4,
        title: "Keamanan Jaringan",
        description: "Pendekatan keamanan untuk mendukung perlindungan infrastruktur dan data.",
        items: [
          "Perlindungan firewall",
          "Deteksi ancaman melalui IDS/IPS",
          "Perlindungan dan enkripsi data pelanggan",
        ],
      },
      {
        id: "sla",
        sequence: 5,
        title: "Komitmen pada SLA",
        description: "Pemantauan dan pelaporan mengikuti ruang lingkup layanan pelanggan.",
        items: [
          "Pemantauan uptime dan waktu respons",
          "Laporan performa jaringan secara berkala",
          "Dukungan teknis melalui kanal layanan",
        ],
      },
      {
        id: "customers",
        sequence: 6,
        title: "Pengelolaan Pelanggan",
        description: "Koordinasi dukungan dan konfigurasi berdasarkan kebutuhan layanan.",
        items: [
          "Helpdesk dan ticketing",
          "Edukasi penggunaan perangkat dan layanan",
          "Konfigurasi jaringan sesuai kebutuhan",
        ],
      },
      {
        id: "technology",
        sequence: 7,
        title: "Teknologi Pendukung",
        description: "Pemanfaatan teknologi untuk membantu pengelolaan operasional jaringan.",
        items: [
          "Otomatisasi pemantauan jaringan",
          "Analitik berbasis AI",
          "Integrasi infrastruktur cloud",
        ],
      },
      {
        id: "improvement",
        sequence: 8,
        title: "Pengembangan dan Peningkatan",
        description: "Evaluasi kebutuhan untuk mendukung pembaruan dan pengembangan layanan.",
        items: [
          "Pembaruan perangkat dan sistem",
          "Riset serta inovasi layanan",
          "Evaluasi berdasarkan feedback pelanggan",
        ],
      },
    ],
  },
  serviceCommitment: {
    eyebrow: "KOMITMEN LAYANAN",
    title: "Komitmen layanan yang terukur dan transparan.",
    description:
      "Pemantauan performa, pelaporan berkala, serta penanganan kebutuhan teknis dilakukan berdasarkan ruang lingkup layanan dan kesepakatan SLA pelanggan.",
  },
  finalCta: {
    eyebrow: "KONSULTASI MANAGED SERVICE",
    title: "Diskusikan kebutuhan pengelolaan jaringan Anda.",
    description:
      "Sampaikan kondisi infrastruktur, cakupan operasional, dan kebutuhan dukungan kepada tim HARZNET.",
    action: { label: "Hubungi Tim HARZNET", href: whatsappContact.url },
  },
};
