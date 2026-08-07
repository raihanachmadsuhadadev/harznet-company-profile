import type { Metadata } from "next";

import { AboutHarznetSection } from "@/components/home/about-harznet-section";
import { ConnectivityBannerSection } from "@/components/home/connectivity-banner-section";
import { ContactHubSection } from "@/components/home/contact-hub-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServiceOverview } from "@/components/home/service-overview";
import { SupportingLogosSection } from "@/components/home/supporting-logos-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { UpgradePromoSection } from "@/components/home/upgrade-promo-section";
import { ValueProposition } from "@/components/home/value-proposition";
import { WhyHarznetSection } from "@/components/home/why-harznet-section";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Teknologi dan Jaringan untuk Kebutuhan Digital",
  description:
    "Kenali layanan internet, jaringan, managed service, kemitraan, dan pengembangan perangkat lunak dari HARZNET.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConnectivityBannerSection />
      <AboutHarznetSection />
      <UpgradePromoSection />
      <ServiceOverview />
      <ValueProposition />
      <WhyHarznetSection />
      <TestimonialsSection />
      <SupportingLogosSection />
      <ContactHubSection />
    </>
  );
}
