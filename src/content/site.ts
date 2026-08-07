import { serviceDetails } from "@/content/services";
import type { NavigationItem, SocialLinkItem } from "@/types/content";

export const siteIdentity = {
  brand: "HARZNET",
  company: "PT Cemerlang Internet Indonesia",
  description:
    "Ekosistem layanan teknologi dan jaringan yang membantu kebutuhan digital rumah, bisnis, dan organisasi.",
} as const;

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami/" },
  { label: "Informasi", href: "/informasi/" },
  { label: "Kuesioner", href: "/kuesioner/" },
  { label: "Kontak", href: "/#contact-hub" },
];

export const servicesNavigationLink: NavigationItem = {
  label: "Layanan Kami",
  href: "/#layanan",
};

export const portalLink: NavigationItem = {
  label: "Portal Pelanggan",
  href: "/portal-pelanggan",
};

export const loginLink: NavigationItem = {
  label: "Login",
  href: portalLink.href,
};

export const services = serviceDetails;

export const serviceNavigation = serviceDetails.map(({ href, name, summary }) => ({
  href,
  label: name,
  summary,
}));

export const footerNavigation: readonly NavigationItem[] = [
  primaryNavigation[0],
  servicesNavigationLink,
  primaryNavigation[1],
  primaryNavigation[2],
  { label: "Kontak", href: "/kontak" },
  portalLink,
];

export const footerInformationNavigation: readonly NavigationItem[] = [
  { label: "Media & Unduhan", href: "/media-unduhan" },
  { label: "Kuesioner", href: "/kuesioner/" },
];

export const footerLegalNavigation: readonly NavigationItem[] = [
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
];

export const socialLinks: readonly SocialLinkItem[] = [
  { id: "instagram", label: "Instagram", icon: "instagram", href: null },
  { id: "facebook", label: "Facebook", icon: "facebook", href: null },
  { id: "tiktok", label: "TikTok", icon: "tiktok", href: null },
  { id: "youtube", label: "YouTube", icon: "youtube", href: null },
  { id: "linkedin", label: "LinkedIn", icon: "linkedin", href: null },
];
