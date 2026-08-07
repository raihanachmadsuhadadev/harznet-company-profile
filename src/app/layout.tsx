import type { Metadata } from "next";

import { WhatsAppFloatingButton } from "@/components/contact/whatsapp-floating-button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HARZNET | Teknologi dan Jaringan untuk Kebutuhan Digital",
    template: "%s | HARZNET",
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  twitter: {
    card: "summary",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a className="skip-link" href="#main-content">
          Lewati ke konten utama
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
