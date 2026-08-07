import type { QuestionnairePageContent } from "@/types/content";

export const questionnairePageContent: QuestionnairePageContent = {
  eyebrow: "KUESIONER PELANGGAN",
  title: "Kuesioner Kepuasan Pelanggan HARZNET",
  description:
    "Berikan penilaian dan masukan mengenai kualitas layanan HARZNET untuk membantu kami meningkatkan pengalaman pelanggan.",
  notes: [
    "Waktu pengisian hanya beberapa menit.",
    "Jawaban dikirim melalui formulir Google yang disematkan pada halaman ini.",
  ],
  embedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdx18YH3xQi-P9ZxUFTRaPzxlb083mMhZI27ODEnYqFVcHkEg/viewform?embedded=true",
  fallbackUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdx18YH3xQi-P9ZxUFTRaPzxlb083mMhZI27ODEnYqFVcHkEg/viewform",
  fallbackLabel: "Buka formulir di tab baru",
  fallbackText:
    "Jika formulir tidak tampil dengan baik, buka formulir langsung melalui tautan berikut.",
  iframeTitle: "Kuesioner Kepuasan Pelanggan HARZNET",
};
