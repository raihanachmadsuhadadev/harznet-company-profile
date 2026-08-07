import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
type Options = { title: string; description: string; path: string; noIndex?: boolean };
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: Options): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url,
      title,
      description,
    },
    twitter: { card: "summary", title, description },
    robots: { index: !noIndex, follow: true },
  };
}
