export const siteConfig = {
  name: "HARZNET",
  companyName: "PT Cemerlang Internet Indonesia",
  url: "https://harznet.com",
  defaultTitle: "HARZNET | Teknologi dan Jaringan untuk Kebutuhan Digital",
  defaultDescription:
    "HARZNET menghadirkan layanan konektivitas, jaringan, managed service, kemitraan, dan solusi perangkat lunak.",
  locale: "id_ID",
  language: "id",
} as const;
export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${siteConfig.url}${normalized}`;
}
