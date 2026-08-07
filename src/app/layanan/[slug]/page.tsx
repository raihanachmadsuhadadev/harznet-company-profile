import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CorporateBandwidthPage } from "@/components/services/corporate-bandwidth/corporate-bandwidth-page";
import { HarznetHomePage } from "@/components/services/harznet-home/harznet-home-page";
import { ManagedServicePage } from "@/components/services/managed-service/managed-service-page";
import { PartnerPage } from "@/components/services/partner/partner-page";
import { ServiceDetailPage } from "@/components/services/service-detail-page";
import { SoftwareCorporationPage } from "@/components/services/software-corporation/software-corporation-page";
import { corporateBandwidthPageContent } from "@/content/corporate-bandwidth";
import { harznetHomePageContent } from "@/content/harznet-home";
import { managedServicePageContent } from "@/content/managed-service";
import { partnerPageContent } from "@/content/partner";
import { softwareCorporationPageContent } from "@/content/software-corporation";
import { getServiceBySlug, serviceDetails } from "@/content/services";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/layanan/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const metadata = createPageMetadata({
    title: service.metadata.title,
    description: service.metadata.description,
    path: service.href,
  });

  return [
    "harznet-home",
    "corporate-bandwidth",
    "partner",
    "managed-service",
    "software-corporation",
  ].includes(service.slug)
    ? { ...metadata, title: { absolute: service.metadata.title } }
    : metadata;
}

export default async function ServicePage({ params }: PageProps<"/layanan/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (service.slug === "harznet-home") {
    return <HarznetHomePage content={harznetHomePageContent} />;
  }

  if (service.slug === "corporate-bandwidth") {
    return <CorporateBandwidthPage content={corporateBandwidthPageContent} />;
  }

  if (service.slug === "partner") {
    return <PartnerPage content={partnerPageContent} />;
  }

  if (service.slug === "managed-service") {
    return <ManagedServicePage content={managedServicePageContent} />;
  }

  if (service.slug === "software-corporation") {
    return <SoftwareCorporationPage content={softwareCorporationPageContent} />;
  }

  return <ServiceDetailPage service={service} />;
}
