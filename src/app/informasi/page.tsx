import type { Metadata } from "next";

import { InformationPage } from "@/components/information/information-page";
import { informationPageContent } from "@/content/information-page";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

const pageTitle = "Informasi HARZNET | Layanan dan Program";
const pageDescription =
  "Lihat poster informasi layanan internet rumah, konektivitas bisnis, Dedicated Internet, dan program kemitraan HARZNET.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/informasi",
  }),
  title: { absolute: pageTitle },
};

export default function InformationIndexPage() {
  return <InformationPage content={informationPageContent} />;
}
