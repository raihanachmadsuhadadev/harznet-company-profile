import { whatsappContact } from "@/config/contact";
import type { SoftwareCorporationPageContent } from "@/types/content";

// Catatan sumber internal: ruang lingkup integrasi AI/IoT serta dampak terhadap
// efisiensi, produktivitas, dan nilai bisnis perlu diverifikasi perusahaan untuk
// setiap kebutuhan pelanggan sebelum menjadi komitmen proyek produksi.
export const softwareCorporationPageContent: SoftwareCorporationPageContent = {
  eyebrow: "SOLUSI PERANGKAT LUNAK HARZNET",
  title: "Bangun solusi digital yang sesuai dengan kebutuhan bisnis Anda.",
  description:
    "HARZNET Software Corporation membantu mengembangkan aplikasi dan sistem digital yang disesuaikan untuk mendukung operasional, produktivitas, dan perkembangan kebutuhan bisnis.",
  highlights: [
    "Web Application",
    "Mobile Application",
    "Enterprise System",
    "AI & IoT Integration",
  ],
  primaryAction: { label: "Jelajahi Layanan", href: "#layanan-software-corporation" },
  secondaryAction: { label: "Konsultasikan Kebutuhan", href: whatsappContact.url },
  capabilities: {
    id: "layanan-software-corporation",
    eyebrow: "LAYANAN PENGEMBANGAN",
    title: "Solusi perangkat lunak untuk berbagai kebutuhan digital.",
    description:
      "Cakupan pengembangan disesuaikan dengan kebutuhan pengguna, proses operasional, dan kesiapan sistem pelanggan.",
    items: [
      {
        id: "web",
        sequence: 1,
        title: "Web Application",
        description:
          "Pengembangan aplikasi berbasis web untuk mendukung layanan, informasi, dan proses operasional.",
      },
      {
        id: "mobile",
        sequence: 2,
        title: "Mobile Application",
        description:
          "Pengembangan aplikasi mobile yang dapat disesuaikan dengan kebutuhan pengguna dan proses bisnis.",
      },
      {
        id: "enterprise",
        sequence: 3,
        title: "Enterprise System",
        description:
          "Pengembangan sistem terintegrasi untuk membantu pengelolaan proses dan informasi organisasi.",
      },
      {
        id: "ai-iot",
        sequence: 4,
        title: "AI & IoT Integration",
        description:
          "Integrasi teknologi AI dan IoT sesuai kebutuhan solusi dan kesiapan sistem pelanggan.",
      },
    ],
  },
  focus: {
    eyebrow: "FOKUS PENGEMBANGAN",
    title: "Teknologi yang dirancang untuk memberikan nilai bagi operasional bisnis.",
    description:
      "Pengembangan solusi diarahkan pada kebutuhan operasional dan konteks bisnis pelanggan.",
    items: [
      { id: "efficiency", title: "Efisiensi proses" },
      { id: "productivity", title: "Produktivitas kerja" },
      { id: "tailored", title: "Solusi yang disesuaikan dengan kebutuhan" },
    ],
  },
  approach: {
    eyebrow: "PENDEKATAN SOLUSI",
    title: "Pendekatan solusi yang relevan dengan kebutuhan Anda.",
    description:
      "Pembahasan dimulai dari kebutuhan untuk menentukan arah solusi dan pengembangan sistem yang relevan.",
    items: [
      {
        id: "understand",
        sequence: 1,
        title: "Memahami kebutuhan",
        description: "Membahas tujuan, pengguna, dan proses bisnis yang ingin didukung.",
      },
      {
        id: "define",
        sequence: 2,
        title: "Menentukan solusi yang sesuai",
        description: "Menyelaraskan arah solusi dengan kebutuhan yang telah dipahami.",
      },
      {
        id: "develop",
        sequence: 3,
        title: "Mengembangkan sistem yang dapat digunakan secara efektif",
        description: "Mengembangkan sistem berdasarkan konteks penggunaan yang telah ditentukan.",
      },
    ],
  },
  finalCta: {
    eyebrow: "MULAI PROYEK DIGITAL",
    title: "Diskusikan kebutuhan aplikasi dan sistem Anda bersama HARZNET.",
    description:
      "Sampaikan tujuan, kebutuhan pengguna, dan proses bisnis yang ingin dikembangkan kepada tim HARZNET.",
    action: { label: "Hubungi Tim HARZNET", href: whatsappContact.url },
  },
};
