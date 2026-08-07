import { whatsappContact } from "@/config/contact";
import type { AboutCompanyPageContent } from "@/types/content";

export const aboutCompanyPageContent: AboutCompanyPageContent = {
  eyebrow: "PROFIL PERUSAHAAN",
  title: "Membangun konektivitas untuk mendukung kebutuhan digital masyarakat dan bisnis.",
  description:
    "PT Cemerlang Internet Indonesia merupakan perusahaan penyedia layanan internet yang menghadirkan HARZNET untuk mendukung kebutuhan konektivitas rumah, usaha, organisasi, dan perusahaan.",
  highlights: ["Internet Service Provider", "Berbasis di Kabupaten Cirebon", "Berdiri sejak 2021"],
  primaryAction: { label: "Kenali Perusahaan", href: "#sekilas-perusahaan" },
  secondaryAction: { label: "Hubungi Tim HARZNET", href: whatsappContact.url },
  overview: {
    id: "sekilas-perusahaan",
    eyebrow: "SEKILAS PERUSAHAAN",
    title: "Konektivitas yang dirancang untuk berbagai kebutuhan digital.",
    description:
      "HARZNET menghadirkan akses dan solusi konektivitas yang dapat dibahas sesuai konteks penggunaan pelanggan.",
    paragraphs: [
      "PT Cemerlang Internet Indonesia bergerak di bidang Internet Service Provider. Perusahaan menghadirkan akses internet untuk mendukung kebutuhan masyarakat dan bisnis.",
      "Layanan dikembangkan untuk mendukung penggunaan internet dalam aktivitas sehari-hari, operasional, komunikasi, produktivitas, dan hiburan digital.",
    ],
    solutions: [
      "Broadband rumah",
      "Usaha kecil dan menengah",
      "Jaringan serta kebutuhan perusahaan",
      "Aktivitas produktivitas dan hiburan digital",
    ],
    facts: [
      { label: "Nama", value: "PT Cemerlang Internet Indonesia" },
      { label: "Merek layanan", value: "HARZNET" },
      { label: "Bidang", value: "Internet Service Provider" },
      { label: "Wilayah", value: "Kabupaten Cirebon, Jawa Barat" },
      { label: "Tahun berdiri", value: "2021" },
    ],
  },
  direction: {
    eyebrow: "ARAH PERUSAHAAN",
    title: "Visi dan misi untuk pertumbuhan konektivitas digital.",
    description:
      "Arah perusahaan menjadi landasan dalam mengembangkan layanan dan menjawab perubahan kebutuhan digital.",
    vision:
      "Menjadi penyedia layanan internet yang terus berkembang dalam menghubungkan masyarakat dan bisnis dengan teknologi untuk mendukung masa depan digital yang lebih baik.",
    missions: [
      { id: "quality", sequence: 1, title: "Menyediakan layanan internet yang berkualitas." },
      { id: "innovation", sequence: 2, title: "Mengembangkan inovasi teknologi." },
      { id: "satisfaction", sequence: 3, title: "Meningkatkan kepuasan pelanggan." },
      {
        id: "community",
        sequence: 4,
        title: "Mendukung pertumbuhan komunitas digital.",
      },
      {
        id: "sustainability",
        sequence: 5,
        title: "Menjalankan keberlanjutan dan tanggung jawab sosial.",
      },
      {
        id: "access",
        sequence: 6,
        title: "Mendukung pemerataan akses internet dan program transformasi digital.",
      },
    ],
  },
  history: {
    eyebrow: "PERJALANAN PERUSAHAAN",
    title: "Bertumbuh dari Cirebon untuk mendukung kebutuhan konektivitas.",
    description:
      "Perjalanan perusahaan berawal dari kebutuhan akan konektivitas yang andal dan terjangkau, kemudian berkembang bersama kebutuhan individu dan bisnis.",
    items: [
      {
        id: "founded",
        marker: "2021",
        title: "PT Cemerlang Internet Indonesia didirikan.",
        description: "Perusahaan didirikan pada 1 Februari 2021 di Kabupaten Cirebon.",
      },
      {
        id: "harznet-development",
        marker: "Pengembangan HARZNET",
        title: "Produk dan layanan konektivitas mulai dikembangkan.",
        description:
          "HARZNET dikembangkan untuk mendukung kebutuhan konektivitas masyarakat dan bisnis.",
      },
      {
        id: "service-growth",
        marker: "Pertumbuhan layanan",
        title: "Layanan berkembang mengikuti kebutuhan digital.",
        description:
          "Layanan diperluas untuk kebutuhan rumah, usaha, organisasi, dan perusahaan serta mendukung transformasi digital.",
      },
    ],
  },
  commitments: {
    eyebrow: "KOMITMEN KAMI",
    title: "Fokus pada layanan, inovasi, dan perkembangan kebutuhan pelanggan.",
    description:
      "Empat fokus berikut menjadi arah perusahaan dalam menjalankan dan mengembangkan layanan.",
    items: [
      {
        id: "quality",
        title: "Kualitas layanan",
        description:
          "Mengelola layanan dengan perhatian pada kebutuhan penggunaan dan pengalaman pelanggan.",
      },
      {
        id: "innovation",
        title: "Inovasi teknologi",
        description:
          "Mempelajari perkembangan teknologi yang relevan bagi layanan dan kebutuhan digital.",
      },
      {
        id: "satisfaction",
        title: "Kepuasan pelanggan",
        description:
          "Mendengarkan kebutuhan pelanggan sebagai bagian dari evaluasi dan pengembangan layanan.",
      },
      {
        id: "transformation",
        title: "Dukungan transformasi digital",
        description:
          "Mendukung pemanfaatan konektivitas untuk aktivitas masyarakat, organisasi, dan bisnis.",
      },
    ],
  },
  finalCta: {
    eyebrow: "TERHUBUNG DENGAN HARZNET",
    title: "Kenali layanan dan solusi yang sesuai dengan kebutuhan Anda.",
    description: "Sampaikan kebutuhan konektivitas atau solusi digital Anda kepada tim HARZNET.",
    action: { label: "Hubungi Tim HARZNET", href: whatsappContact.url },
  },
};
