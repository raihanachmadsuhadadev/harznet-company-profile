import type { InformationArticle } from "@/types/content";
export const informationArticles: readonly InformationArticle[] = [
  {
    slug: "mengenal-layanan-harznet",
    title: "Mengenal layanan HARZNET",
    excerpt:
      "Gambaran umum layanan konektivitas, jaringan, pengelolaan teknologi, kemitraan, dan solusi perangkat lunak.",
    category: "Mengenal HARZNET",
    readingLabel: "Bacaan ringkas",
    publishedLabel: "Informasi HARZNET",
    sections: [
      {
        heading: "Ekosistem layanan",
        paragraphs: [
          "HARZNET menyediakan ruang pembahasan layanan untuk kebutuhan rumah, bisnis, dan organisasi.",
          "Setiap kebutuhan dapat dimulai dari konteks penggunaan dan tujuan yang ingin dicapai.",
        ],
      },
      {
        heading: "Langkah berikutnya",
        paragraphs: [
          "Pelajari area layanan yang relevan, lalu gunakan kanal resmi ketika informasi kontak tersedia.",
        ],
      },
    ],
    metadata: {
      title: "Mengenal layanan HARZNET",
      description: "Gambaran umum layanan publik HARZNET.",
    },
  },
  {
    slug: "mempertimbangkan-kebutuhan-konektivitas",
    title: "Mempertimbangkan kebutuhan konektivitas rumah dan bisnis",
    excerpt: "Hal yang dapat dipertimbangkan saat memulai pembahasan kebutuhan konektivitas.",
    category: "Panduan kebutuhan",
    readingLabel: "Bacaan ringkas",
    publishedLabel: "Informasi HARZNET",
    sections: [
      {
        heading: "Memahami konteks penggunaan",
        paragraphs: [
          "Kebutuhan konektivitas dapat dibahas dari aktivitas digital, pengguna, dan konteks operasional.",
        ],
      },
      {
        heading: "Menyusun pembahasan",
        paragraphs: [
          "Informasi dasar membantu percakapan awal menjadi lebih terarah tanpa asumsi teknis.",
        ],
      },
    ],
    metadata: {
      title: "Mempertimbangkan kebutuhan konektivitas",
      description: "Panduan umum mempertimbangkan kebutuhan konektivitas.",
    },
  },
  {
    slug: "peran-solusi-digital-operasional",
    title: "Peran solusi digital dalam mendukung operasional",
    excerpt: "Cara melihat solusi digital sebagai bagian dari pembahasan kebutuhan organisasi.",
    category: "Solusi digital",
    readingLabel: "Bacaan ringkas",
    publishedLabel: "Informasi HARZNET",
    sections: [
      {
        heading: "Berangkat dari kebutuhan",
        paragraphs: [
          "Solusi digital dapat dibahas dengan memahami tujuan, pengguna, dan alur kerja.",
        ],
      },
      {
        heading: "Kolaborasi yang terarah",
        paragraphs: ["Analisis, desain, pengembangan, dan evaluasi dapat disusun bertahap."],
      },
    ],
    metadata: {
      title: "Peran solusi digital",
      description: "Informasi umum tentang solusi digital untuk operasional.",
    },
  },
] as const;
export const getInformationArticle = (slug: string) =>
  informationArticles.find((article) => article.slug === slug);
