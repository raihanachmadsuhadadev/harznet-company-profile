import type { Metadata } from "next";

import { QuestionnairePage } from "@/components/questionnaire/questionnaire-page";
import { questionnairePageContent } from "@/content/questionnaire-page";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

const pageTitle = "Kuesioner Kepuasan Pelanggan HARZNET";
const pageDescription =
  "Isi kuesioner kepuasan pelanggan HARZNET dan berikan penilaian mengenai kualitas layanan internet serta pelayanan yang diterima.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/kuesioner",
  }),
  title: { absolute: pageTitle },
};

export default function QuestionnaireRoute() {
  return <QuestionnairePage content={questionnairePageContent} />;
}
