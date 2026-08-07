import type { Metadata } from "next";

import { AboutCompanyPage } from "@/components/about/about-company-page";
import { aboutCompanyPageContent } from "@/content/about-company";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

const pageTitle = "Tentang PT Cemerlang Internet Indonesia | HARZNET";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description:
      "Kenali PT Cemerlang Internet Indonesia, perusahaan penyedia layanan HARZNET yang mendukung kebutuhan konektivitas rumah, bisnis, organisasi, dan perusahaan.",
    path: "/tentang-kami",
  }),
  title: { absolute: pageTitle },
};

export default function AboutPage() {
  return <AboutCompanyPage content={aboutCompanyPageContent} />;
}
