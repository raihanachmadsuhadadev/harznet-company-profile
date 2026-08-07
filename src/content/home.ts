import { whatsappContact } from "@/config/contact";
import type {
  AboutHarznetContent,
  ContactHubContent,
  ConnectivityBannerContent,
  HeroContent,
  HeroSlide,
  SectionContent,
  SupportingLogosContent,
  TestimonialsContent,
  UpgradePromoContent,
  ValueItem,
  WhyHarznetContent,
} from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Infrastruktur digital yang terarah",
  title: "Teknologi dan jaringan untuk kebutuhan digital yang terus berkembang.",
  description:
    "HARZNET menghadirkan rangkaian layanan konektivitas, pengelolaan teknologi, kemitraan, dan perangkat lunak dalam satu ekosistem.",
  primaryAction: { label: "Jelajahi layanan", href: "/#layanan" },
  secondaryAction: { label: "Hubungi HARZNET", href: whatsappContact.url },
};

export const heroSlides: readonly HeroSlide[] = [
  {
    src: "/images/hero-slider/harznet-slide-01.png",
    alt: "Materi promosi Harznet Home",
  },
  {
    src: "/images/hero-slider/harznet-slide-02.png",
    alt: "Materi promosi Corporate Bandwidth HARZNET",
  },
  {
    src: "/images/hero-slider/harznet-slide-03.png",
    alt: "Materi promosi kemitraan HARZNET",
  },
];

export const connectivityBannerContent: ConnectivityBannerContent = {
  eyebrow: "Konektivitas HARZNET",
  title: "Konektivitas Tanpa Batas Bersama HARZNET",
  description:
    "Solusi internet cepat melesat untuk kebutuhan rumah, bisnis, dan ekosistem digital Anda.",
  primaryAction: { label: "Lihat Layanan Kami", href: "/#layanan" },
  image: {
    src: "/images/home/section-2/harznet-section-2-main.png",
    alt: "",
  },
};

export const aboutHarznetContent: AboutHarznetContent = {
  eyebrow: "TENTANG HARZNET",
  title: "Konektivitas yang tumbuh bersama kebutuhan Anda.",
  paragraphs: [
    "HARZNET merupakan layanan internet dari PT Cemerlang Internet Indonesia yang menghadirkan konektivitas berbasis fiber optic untuk kebutuhan rumah, bisnis, dan ekosistem digital.",
    "Kami mengutamakan stabilitas jaringan, dukungan teknis yang responsif, serta pilihan layanan yang dapat disesuaikan dengan kebutuhan pelanggan.",
  ],
  features: [
    "Infrastruktur fiber optic",
    "Koneksi stabil untuk aktivitas digital",
    "Pilihan layanan rumah dan bisnis",
    "Dukungan teknis responsif",
    "Opsi konektivitas dan IP sesuai layanan",
    "Integrasi solusi digital dan managed service",
  ],
  primaryAction: { label: "Selengkapnya tentang HARZNET", href: "/tentang-kami" },
};

export const upgradePromoContent: UpgradePromoContent = {
  eyebrow: "PILIHAN KONEKSI HARZNET",
  title: "Upgrade koneksi untuk aktivitas digital yang lebih optimal.",
  description:
    "Temukan pilihan layanan HARZNET yang dapat disesuaikan untuk kebutuhan rumah, bisnis, dan operasional digital Anda.",
  primaryAction: { label: "Hubungi Kami Sekarang", href: whatsappContact.url },
};

export const serviceSection: SectionContent = {
  eyebrow: "Layanan",
  title: "Satu ekosistem untuk beragam kebutuhan teknologi",
  description:
    "Pilih area layanan yang paling relevan untuk kebutuhan rumah, bisnis, organisasi, atau pengembangan solusi digital.",
};

export const valueSection: SectionContent = {
  eyebrow: "Keunggulan",
  title: "Pendekatan yang jelas dari kebutuhan hingga solusi",
  description:
    "Setiap layanan dibangun dengan perhatian pada konteks penggunaan, kesinambungan operasional, dan komunikasi yang mudah dipahami.",
};

export const valueItems: readonly ValueItem[] = [
  {
    title: "Berangkat dari kebutuhan",
    description: "Solusi disusun dengan memahami tujuan dan konteks operasional yang berbeda.",
  },
  {
    title: "Terhubung dalam satu ekosistem",
    description:
      "Konektivitas, pengelolaan teknologi, dan perangkat lunak dapat dipahami secara terpadu.",
  },
  {
    title: "Komunikasi yang terarah",
    description:
      "Informasi layanan disampaikan secara ringkas agar langkah berikutnya lebih mudah ditentukan.",
  },
];

export const whyHarznetContent: WhyHarznetContent = {
  eyebrow: "MENGAPA HARZNET",
  title: "Dukungan konektivitas yang dirancang untuk kebutuhan digital Anda.",
  description:
    "HARZNET menghadirkan layanan yang mengutamakan performa koneksi, pendampingan yang responsif, dan pengelolaan jaringan yang terarah.",
  items: [
    {
      title: "Kecepatan dan stabilitas",
      description:
        "Koneksi dirancang untuk mendukung aktivitas digital rumah dan bisnis secara konsisten.",
      icon: "speed",
    },
    {
      title: "Dukungan responsif",
      description: "Tim support membantu kebutuhan layanan dan penanganan kendala secara terarah.",
      icon: "support",
    },
    {
      title: "Keamanan jaringan",
      description:
        "Pengelolaan layanan memperhatikan stabilitas, akses, dan perlindungan jaringan.",
      icon: "security",
    },
  ],
};

export const testimonialsContent: TestimonialsContent = {
  eyebrow: "TESTIMONI PELANGGAN",
  title: "Apa kata mereka tentang HARZNET?",
  description: "Pengalaman pelanggan dalam menggunakan layanan dan dukungan HARZNET.",
  autoplayDelay: 6_500,
  items: [
    {
      id: "nurman",
      quote: "Mantaaap pelayanan HARZNET, langsung cusss.",
      author: "Nurman",
      initials: "NR",
    },
    {
      id: "andi",
      quote: "Sinyalnya cepat banget. Buat game dan streaming lancar!",
      author: "Andi",
      initials: "AN",
    },
    {
      id: "bu-rini",
      quote: "Kami puas dengan layanan dan dukungan teknis HARZNET.",
      author: "Bu Rini",
      initials: "BR",
    },
  ],
};

export const supportingLogosContent: SupportingLogosContent = {
  eyebrow: "EKOSISTEM PENDUKUNG",
  title: "Terhubung dengan ekosistem industri dan infrastruktur digital.",
  description:
    "HARZNET berkembang dalam ekosistem konektivitas dan teknologi yang mendukung kebutuhan layanan digital.",
  items: [
    {
      id: "apjii",
      name: "APJII",
      src: "/images/home/supporting-logos/logo-apjii.png",
      alt: "Logo APJII",
    },
    {
      id: "komdigi",
      name: "Komdigi",
      src: "/images/home/supporting-logos/logo-komdigi.png",
      alt: "Logo Komdigi",
    },
    {
      id: "cbn",
      name: "CBN",
      src: "/images/home/supporting-logos/logo-cbn.png",
      alt: "Logo CBN",
    },
    {
      id: "fiberstar",
      name: "FiberStar",
      src: "/images/home/supporting-logos/logo-fiberstar.png",
      alt: "Logo FiberStar",
    },
    {
      id: "iforte",
      name: "iForte",
      src: "/images/home/supporting-logos/logo-iforte.png",
      alt: "Logo iForte",
    },
    {
      id: "link-net",
      name: "Link Net",
      src: "/images/home/supporting-logos/logo-linknet.png",
      alt: "Logo Link Net",
    },
    {
      id: "dci-indonesia",
      name: "DCI Indonesia",
      src: "/images/home/supporting-logos/logo-dci-indonesia.png",
      alt: "Logo DCI Indonesia",
    },
    {
      id: "satrianet",
      name: "SatriaNet",
      src: "/images/home/supporting-logos/logo-satrianet.png",
      alt: "Logo SatriaNet",
    },
    {
      id: "hsp",
      name: "HSP",
      src: "/images/home/supporting-logos/logo-hsp.png",
      alt: "Logo HSP",
    },
    {
      id: "telkom-indonesia",
      name: "Telkom Indonesia",
      src: "/images/home/supporting-logos/logo-telkom-indonesia.png",
      alt: "Logo Telkom Indonesia",
    },
    {
      id: "lintasarta",
      name: "Lintasarta",
      src: "/images/home/supporting-logos/logo-lintasarta.png",
      alt: "Logo Lintasarta",
    },
    {
      id: "indosat",
      name: "Indosat",
      src: "/images/home/supporting-logos/logo-indosat.png",
      alt: "Logo Indosat",
    },
    {
      id: "fauzanet",
      name: "FauzaNet",
      src: "/images/home/supporting-logos/logo-fauzanet.png",
      alt: "Logo FauzaNet",
    },
  ],
};

export const contactHubContent: ContactHubContent = {
  eyebrow: "KONTAK HARZNET",
  title: "Mari terhubung dengan tim HARZNET.",
  description:
    "Sampaikan kebutuhan layanan, pertanyaan, atau informasi yang ingin Anda konsultasikan bersama tim HARZNET.",
  form: {
    eyebrow: "HUBUNGI KAMI",
    title: "Kirim pesan kepada tim kami.",
    description:
      "Lengkapi informasi berikut dan tim HARZNET akan menindaklanjuti pesan Anda melalui kanal kontak yang tersedia.",
    fields: [
      {
        id: "name",
        label: "Nama",
        placeholder: "Masukkan nama Anda",
        type: "text",
        autoComplete: "name",
      },
      {
        id: "email",
        label: "Email",
        placeholder: "Masukkan alamat email",
        type: "email",
        autoComplete: "email",
      },
      {
        id: "message",
        label: "Pesan",
        placeholder: "Tuliskan pesan atau kebutuhan Anda",
        type: "textarea",
        autoComplete: "off",
      },
    ],
    submitLabel: "Kirim Pesan",
    pendingLabel: "Mengirim Pesan...",
  },
  contactItems: [
    {
      id: "address",
      label: "Alamat",
      value:
        "Perumahan Green Simangu 3, Jl. Simangu, Blok B No. 19, Kasugengan Lor, Kec. Depok, Kabupaten Cirebon, Jawa Barat 45155",
      icon: "location",
    },
    {
      id: "email",
      label: "Email",
      value: "customer_service@harznet.com",
      href: "mailto:customer_service@harznet.com",
      icon: "email",
    },
    {
      id: "phone",
      label: "Telepon",
      value: "0813-7888-8410",
      href: "tel:+6281378888410",
      icon: "phone",
    },
  ],
  map: {
    eyebrow: "LOKASI HARZNET",
    title: "Temukan lokasi kami.",
    iframeTitle: "Lokasi HARZNET di Google Maps",
    fallback: "Peta lokasi belum dikonfigurasi.",
  },
};
