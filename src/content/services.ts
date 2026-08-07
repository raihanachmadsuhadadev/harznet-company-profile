import { whatsappContact } from "@/config/contact";
import type { ServiceDetailContent } from "@/types/content";

export const serviceDetails: readonly ServiceDetailContent[] = [
  {
    slug: "harznet-home",
    name: "Harznet Home",
    marker: "01",
    href: "/layanan/harznet-home/",
    eyebrow: "Konektivitas rumah",
    title: "Konektivitas yang mendukung ritme digital di rumah.",
    description:
      "Harznet Home membantu keluarga menyiapkan konektivitas yang selaras dengan aktivitas digital sehari-hari.",
    summary: "Konektivitas untuk mendukung aktivitas digital sehari-hari di rumah.",
    targetAudience:
      "Rumah tangga yang ingin membicarakan kebutuhan konektivitas untuk aktivitas digital harian.",
    benefits: [
      "Pembahasan kebutuhan yang menyesuaikan cara keluarga menggunakan konektivitas.",
      "Arah layanan yang mudah dipahami sebelum melangkah ke tahap berikutnya.",
      "Ruang konsultasi untuk menyelaraskan kebutuhan digital rumah.",
    ],
    scope: [
      {
        title: "Kebutuhan sehari-hari",
        description: "Membahas konteks penggunaan konektivitas untuk aktivitas digital di rumah.",
      },
      {
        title: "Perencanaan kebutuhan",
        description:
          "Menyusun pembicaraan awal agar kebutuhan rumah dapat dipahami dengan lebih terarah.",
      },
      {
        title: "Koordinasi layanan",
        description: "Menyiapkan langkah lanjutan melalui kanal resmi ketika informasi tersedia.",
      },
    ],
    process: [
      {
        title: "Konsultasi kebutuhan",
        description: "Memahami aktivitas digital yang ingin didukung di rumah.",
      },
      {
        title: "Perencanaan layanan",
        description: "Menyusun arah layanan berdasarkan konteks kebutuhan.",
      },
      {
        title: "Koordinasi implementasi",
        description: "Menyiapkan langkah pelaksanaan secara terarah.",
      },
      {
        title: "Evaluasi kebutuhan",
        description: "Meninjau kembali kebutuhan untuk pembahasan berikutnya.",
      },
    ],
    callToAction: {
      eyebrow: "Mulai dari kebutuhan",
      title: "Bicarakan kebutuhan konektivitas rumah Anda.",
      description:
        "Kanal resmi HARZNET akan ditampilkan setelah data kontak tersedia dan terverifikasi.",
      primaryAction: { label: "Lihat informasi kontak", href: whatsappContact.url },
      statusLabel: "Informasi kontak",
      statusDescription: "Kanal resmi akan ditampilkan setelah data tersedia.",
    },
    metadata: {
      title: "HARZNET Home | Internet Rumah Fiber HARZNET",
      description:
        "Temukan pilihan paket HARZNET Home berbasis Fiber To The Home untuk kebutuhan internet keluarga, streaming, belajar, bekerja, dan aktivitas digital di rumah.",
    },
  },
  {
    slug: "corporate-bandwidth",
    name: "Corporate Bandwidth",
    marker: "02",
    href: "/layanan/corporate-bandwidth/",
    eyebrow: "Konektivitas bisnis",
    title: "Konektivitas yang dibahas dari kebutuhan operasional bisnis.",
    description:
      "Corporate Bandwidth membantu organisasi membahas kebutuhan konektivitas yang relevan dengan aktivitas dan perencanaan operasional.",
    summary: "Konektivitas untuk kebutuhan operasional bisnis dan organisasi.",
    targetAudience:
      "Bisnis dan organisasi yang memerlukan pembahasan konektivitas sesuai konteks operasional.",
    benefits: [
      "Pendekatan yang dimulai dari pemahaman terhadap kebutuhan operasional.",
      "Koordinasi perencanaan layanan yang disampaikan secara jelas.",
      "Ruang diskusi untuk menyelaraskan kebutuhan konektivitas dengan arah organisasi.",
    ],
    scope: [
      {
        title: "Konteks operasional",
        description:
          "Membahas kebutuhan konektivitas berdasarkan aktivitas dan alur kerja organisasi.",
      },
      {
        title: "Perencanaan terarah",
        description: "Menyiapkan pembicaraan awal untuk menentukan arah layanan yang relevan.",
      },
      {
        title: "Koordinasi layanan",
        description: "Menyelaraskan langkah implementasi melalui proses yang terkoordinasi.",
      },
    ],
    process: [
      {
        title: "Konsultasi kebutuhan",
        description: "Memahami konteks operasional dan kebutuhan konektivitas.",
      },
      {
        title: "Perencanaan solusi",
        description: "Menyusun arah pembahasan layanan yang sesuai kebutuhan.",
      },
      {
        title: "Implementasi terkoordinasi",
        description: "Menyiapkan langkah implementasi bersama pihak terkait.",
      },
      {
        title: "Evaluasi dan dukungan",
        description: "Melanjutkan pembahasan berdasarkan kebutuhan organisasi.",
      },
    ],
    callToAction: {
      eyebrow: "Rencanakan dengan terarah",
      title: "Mulai percakapan tentang kebutuhan konektivitas bisnis.",
      description:
        "Kanal resmi HARZNET akan ditampilkan setelah data kontak tersedia dan terverifikasi.",
      primaryAction: { label: "Lihat informasi kontak", href: whatsappContact.url },
      statusLabel: "Informasi kontak",
      statusDescription: "Kanal resmi akan ditampilkan setelah data tersedia.",
    },
    metadata: {
      title: "Corporate Bandwidth | Koneksi Bisnis HARZNET",
      description:
        "Temukan pilihan HARZNET Corporate Bandwidth untuk kebutuhan konektivitas perusahaan, komunikasi data antar lokasi, layanan cloud, dan operasional bisnis.",
    },
  },
  {
    slug: "partner",
    name: "Partner",
    marker: "03",
    href: "/layanan/partner/",
    eyebrow: "Kolaborasi layanan",
    title: "Membuka ruang kolaborasi yang dibangun secara terstruktur.",
    description:
      "Partner menghadirkan ruang awal untuk membahas kebutuhan kolaborasi dan model kemitraan layanan bersama HARZNET.",
    summary: "Kolaborasi dan kemitraan layanan yang dibahas melalui pendekatan terstruktur.",
    targetAudience:
      "Organisasi yang ingin menjajaki kolaborasi dan kemitraan layanan secara terarah.",
    benefits: [
      "Pembahasan awal untuk memahami konteks dan tujuan kolaborasi.",
      "Pendekatan kerja sama yang dapat disusun bersama secara terstruktur.",
      "Komunikasi yang berfokus pada keselarasan kebutuhan kedua pihak.",
    ],
    scope: [
      {
        title: "Penjajakan kebutuhan",
        description: "Membuka pembicaraan awal mengenai konteks dan tujuan kolaborasi.",
      },
      {
        title: "Model kolaborasi",
        description: "Membahas arah kerja sama yang sesuai dengan kebutuhan yang telah dipahami.",
      },
      {
        title: "Koordinasi berikutnya",
        description: "Menentukan langkah lanjutan melalui komunikasi yang terarah.",
      },
    ],
    process: [
      { title: "Penjajakan", description: "Memahami kebutuhan dan konteks kolaborasi." },
      {
        title: "Perencanaan bersama",
        description: "Menyusun arah kerja sama yang dapat dibahas lebih lanjut.",
      },
      {
        title: "Koordinasi pelaksanaan",
        description: "Menyiapkan langkah kolaborasi secara terstruktur.",
      },
      {
        title: "Evaluasi bersama",
        description: "Meninjau kebutuhan dan arah kolaborasi berikutnya.",
      },
    ],
    callToAction: {
      eyebrow: "Mulai penjajakan",
      title: "Bicarakan peluang kolaborasi bersama HARZNET.",
      description:
        "Kanal resmi HARZNET akan ditampilkan setelah data kontak tersedia dan terverifikasi.",
      primaryAction: { label: "Lihat informasi kontak", href: whatsappContact.url },
      statusLabel: "Informasi kontak",
      statusDescription: "Kanal resmi akan ditampilkan setelah data tersedia.",
    },
    metadata: {
      title: "HARZNET Partner | Program Kemitraan Jaringan",
      description:
        "Temukan program HARZNET Partner dengan pilihan Dedicated dan Metro untuk operator RT/RW Net serta penyedia layanan internet yang membutuhkan kapasitas jaringan hingga 1 Gbps.",
    },
  },
  {
    slug: "managed-service",
    name: "Managed Service",
    marker: "04",
    href: "/layanan/managed-service/",
    eyebrow: "Pengelolaan teknologi",
    title: "Dukungan pengelolaan teknologi yang berangkat dari kebutuhan organisasi.",
    description:
      "Managed Service membantu organisasi membahas pengelolaan jaringan dan teknologi agar aktivitas operasional dapat didukung secara terarah.",
    summary: "Dukungan pengelolaan jaringan dan teknologi untuk kebutuhan organisasi.",
    targetAudience: "Organisasi yang ingin membahas dukungan pengelolaan jaringan dan teknologi.",
    benefits: [
      "Assessment awal untuk memahami konteks operasional teknologi organisasi.",
      "Perencanaan yang menyelaraskan kebutuhan pengelolaan dengan kegiatan utama tim.",
      "Ruang evaluasi untuk pembahasan kebutuhan lanjutan.",
    ],
    scope: [
      {
        title: "Assessment kebutuhan",
        description: "Membahas konteks jaringan dan teknologi yang relevan dengan organisasi.",
      },
      {
        title: "Perencanaan pengelolaan",
        description: "Menyusun arah pengelolaan berdasarkan kebutuhan yang telah dipahami.",
      },
      {
        title: "Implementasi dan evaluasi",
        description:
          "Menyiapkan langkah implementasi serta pembahasan evaluasi secara terkoordinasi.",
      },
    ],
    process: [
      { title: "Assessment", description: "Memahami kebutuhan jaringan dan teknologi organisasi." },
      {
        title: "Perencanaan",
        description: "Menyusun arah pengelolaan yang relevan dengan kebutuhan.",
      },
      {
        title: "Implementasi",
        description: "Mengoordinasikan langkah pelaksanaan yang telah direncanakan.",
      },
      {
        title: "Evaluasi",
        description: "Meninjau kebutuhan untuk pembahasan dan dukungan lanjutan.",
      },
    ],
    callToAction: {
      eyebrow: "Dukungan yang terarah",
      title: "Mulai pembahasan pengelolaan teknologi organisasi.",
      description:
        "Kanal resmi HARZNET akan ditampilkan setelah data kontak tersedia dan terverifikasi.",
      primaryAction: { label: "Lihat informasi kontak", href: whatsappContact.url },
      statusLabel: "Informasi kontak",
      statusDescription: "Kanal resmi akan ditampilkan setelah data tersedia.",
    },
    metadata: {
      title: "Managed Service | Pengelolaan Jaringan HARZNET",
      description:
        "Kenali HARZNET Managed Service untuk pemantauan, pemeliharaan, keamanan, pengelolaan infrastruktur, dan pengembangan operasional jaringan.",
    },
  },
  {
    slug: "software-corporation",
    name: "Software Corporation",
    marker: "05",
    href: "/layanan/software-corporation/",
    eyebrow: "Solusi digital",
    title: "Pengembangan solusi perangkat lunak untuk kebutuhan transformasi digital.",
    description:
      "Software Corporation membantu organisasi membahas pengembangan aplikasi web, mobile, dan solusi digital sesuai kebutuhan yang ingin dicapai.",
    summary: "Pengembangan solusi perangkat lunak dan transformasi digital secara umum.",
    targetAudience:
      "Organisasi yang ingin membahas kebutuhan aplikasi web, mobile, atau solusi digital.",
    benefits: [
      "Analisis kebutuhan untuk memahami tujuan dan konteks penggunaan solusi digital.",
      "Proses desain dan pengembangan yang dibahas secara terarah.",
      "Ruang evaluasi untuk memastikan arah solusi tetap relevan dengan kebutuhan.",
    ],
    scope: [
      {
        title: "Analisis kebutuhan",
        description:
          "Memahami tujuan, pengguna, dan konteks solusi digital yang ingin dikembangkan.",
      },
      {
        title: "Desain solusi",
        description: "Menyusun arah desain berdasarkan kebutuhan yang telah dibahas bersama.",
      },
      {
        title: "Pengembangan dan pengujian",
        description:
          "Menyiapkan tahapan pengembangan serta pengujian sesuai rencana yang disepakati.",
      },
    ],
    process: [
      { title: "Analisis kebutuhan", description: "Memahami tujuan dan konteks solusi digital." },
      {
        title: "Desain",
        description: "Menyusun arah pengalaman dan solusi yang akan dikembangkan.",
      },
      {
        title: "Pengembangan",
        description: "Menyiapkan proses pembangunan solusi secara terkoordinasi.",
      },
      { title: "Pengujian", description: "Membahas evaluasi solusi sebelum langkah berikutnya." },
    ],
    callToAction: {
      eyebrow: "Mulai dari ide",
      title: "Bicarakan kebutuhan solusi digital organisasi Anda.",
      description:
        "Kanal resmi HARZNET akan ditampilkan setelah data kontak tersedia dan terverifikasi.",
      primaryAction: { label: "Lihat informasi kontak", href: whatsappContact.url },
      statusLabel: "Informasi kontak",
      statusDescription: "Kanal resmi akan ditampilkan setelah data tersedia.",
    },
    metadata: {
      title: "Software Corporation | Solusi Digital HARZNET",
      description:
        "Kenali layanan HARZNET Software Corporation untuk pengembangan aplikasi web, mobile, sistem enterprise, serta integrasi AI dan IoT sesuai kebutuhan bisnis.",
    },
  },
] as const;

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
