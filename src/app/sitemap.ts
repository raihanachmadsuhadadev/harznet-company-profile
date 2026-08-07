import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { informationArticles } from "@/content/information";
import { serviceDetails } from "@/content/services";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/tentang-kami",
    "/informasi",
    "/media-unduhan",
    "/kontak",
    "/kuesioner",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ];
  return [
    ...staticPaths,
    ...serviceDetails.map((x) => x.href),
    ...informationArticles.map((x) => `/informasi/${x.slug}`),
  ].map((path) => ({ url: absoluteUrl(path) }));
}
