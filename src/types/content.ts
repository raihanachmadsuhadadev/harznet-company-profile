export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialIconKey = "instagram" | "facebook" | "tiktok" | "youtube" | "linkedin";

export type SocialLinkItem = {
  id: SocialIconKey;
  label: string;
  icon: SocialIconKey;
  href: string | null;
};

export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  marker: string;
  href: string;
};

export type ServiceScopeItem = {
  title: string;
  description: string;
};

export type ServiceProcessItem = {
  title: string;
  description: string;
};

export type ServiceDetailContent = ServiceItem & {
  eyebrow: string;
  title: string;
  description: string;
  targetAudience: string;
  benefits: readonly string[];
  scope: readonly ServiceScopeItem[];
  process: readonly ServiceProcessItem[];
  callToAction: CallToActionContent;
  metadata: {
    title: string;
    description: string;
  };
};

export type HarznetHomePackage = {
  id: string;
  name: string;
  speed: string;
  deviceRange: string;
  price: string;
  billingPeriod: string;
  features: readonly string[];
  usageNote?: string;
};

export type HarznetHomePageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
  installation: {
    title: string;
    description: string;
  };
  packagesSection: SectionContent & {
    id: string;
  };
  packages: readonly HarznetHomePackage[];
  benefits: {
    title: string;
    items: readonly string[];
  };
  finalCta: {
    title: string;
    description: string;
    action: NavigationItem;
  };
};

export type CorporateBandwidthRegistration = {
  label: string;
  scheme: string;
  quantity: string;
  price: string;
  description: string;
};

export type CorporateBandwidthPackage = {
  id: string;
  bandwidth: string;
  price: string;
  billingPeriod: string;
};

export type CorporateBandwidthCategory = {
  id: string;
  name: string;
  description: string;
  speedRange: string;
  packages: readonly CorporateBandwidthPackage[];
  ctaLabel: string;
  ctaHref: string;
};

export type CorporateBandwidthUseCase = {
  id: "locations" | "transfer" | "cloud" | "growth";
  title: string;
  description: string;
};

export type CorporateBandwidthPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
  registration: CorporateBandwidthRegistration;
  packagesSection: SectionContent & {
    id: string;
  };
  serviceCategories: readonly CorporateBandwidthCategory[];
  useCases: SectionContent & {
    items: readonly CorporateBandwidthUseCase[];
  };
  technologyInfo?: {
    eyebrow: string;
    title: string;
    description: string;
  };
  finalCta: SectionContent & {
    action: NavigationItem;
  };
};

export type PartnerBandwidthOption = {
  id: string;
  sequence: number;
  bandwidth: string;
  price: string;
};

export type PartnerTerm = {
  id: string;
  sequence: number;
  title?: string;
  description: string;
};

export type PartnerBenefit = {
  id: "operator" | "isp" | "distribution" | "growth";
  title: string;
};

export type PartnerProgramContent = SectionContent & {
  id: string;
  publicIpLabel: string;
  bandwidthOptions: readonly PartnerBandwidthOption[];
  ctaLabel: string;
  ctaHref: string;
};

export type PartnerPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
  introduction: SectionContent & {
    benefits: readonly PartnerBenefit[];
  };
  program: PartnerProgramContent;
  terms: SectionContent & {
    note: string;
    items: readonly PartnerTerm[];
  };
  technology: SectionContent;
  finalCta: SectionContent & {
    action: NavigationItem;
  };
};

export type ManagedServiceCapability = {
  id:
    | "monitoring"
    | "maintenance"
    | "infrastructure"
    | "security"
    | "sla"
    | "customers"
    | "technology"
    | "improvement";
  sequence: number;
  title: string;
  description: string;
  items: readonly [string, string, string];
};

export type ManagedServiceFlowStep = {
  id: "monitor" | "prevent" | "resolve" | "improve";
  sequence: number;
  title: string;
  description: string;
};

export type ManagedServicePageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
  flow: SectionContent & {
    items: readonly ManagedServiceFlowStep[];
  };
  capabilities: SectionContent & {
    id: string;
    items: readonly ManagedServiceCapability[];
  };
  serviceCommitment: SectionContent;
  finalCta: SectionContent & {
    action: NavigationItem;
  };
};

export type SoftwareCorporationCapability = {
  id: "web" | "mobile" | "enterprise" | "ai-iot";
  sequence: number;
  title: string;
  description: string;
};

export type SoftwareCorporationFocus = {
  id: "efficiency" | "productivity" | "tailored";
  title: string;
};

export type SoftwareCorporationApproachStep = {
  id: "understand" | "define" | "develop";
  sequence: number;
  title: string;
  description: string;
};

export type SoftwareCorporationPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
  capabilities: SectionContent & {
    id: string;
    items: readonly SoftwareCorporationCapability[];
  };
  focus: SectionContent & {
    items: readonly SoftwareCorporationFocus[];
  };
  approach: SectionContent & {
    items: readonly SoftwareCorporationApproachStep[];
  };
  finalCta: SectionContent & {
    action: NavigationItem;
  };
};

export type AboutCompanyFact = {
  label: string;
  value: string;
};

export type AboutCompanyMission = {
  id: string;
  sequence: number;
  title: string;
};

export type AboutCompanyHistoryItem = {
  id: string;
  marker: string;
  title: string;
  description: string;
};

export type AboutCompanyCommitment = {
  id: "quality" | "innovation" | "satisfaction" | "transformation";
  title: string;
  description: string;
};

export type AboutCompanyPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
  overview: SectionContent & {
    id: string;
    paragraphs: readonly [string, string];
    solutions: readonly string[];
    facts: readonly AboutCompanyFact[];
  };
  direction: SectionContent & {
    vision: string;
    missions: readonly AboutCompanyMission[];
  };
  history: SectionContent & {
    items: readonly AboutCompanyHistoryItem[];
  };
  commitments: SectionContent & {
    items: readonly AboutCompanyCommitment[];
  };
  finalCta: SectionContent & {
    action: NavigationItem;
  };
};

export type ValueItem = {
  title: string;
  description: string;
};

export type WhyHarznetIconKey = "speed" | "support" | "security";

export type WhyHarznetItem = {
  title: string;
  description: string;
  icon: WhyHarznetIconKey;
};

export type WhyHarznetContent = SectionContent & {
  items: readonly WhyHarznetItem[];
};

export type TestimonialItem = {
  id: string;
  quote: string;
  author: string;
  initials: string;
};

export type TestimonialsContent = SectionContent & {
  autoplayDelay: number;
  items: readonly TestimonialItem[];
};

export type SupportingLogoItem = {
  id: string;
  name: string;
  src: string;
  alt: string;
};

export type SupportingLogosContent = SectionContent & {
  items: readonly SupportingLogoItem[];
};

export type ContactHubField = {
  id: "name" | "email" | "message";
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
  autoComplete: string;
};

export type ContactHubIconKey = "location" | "email" | "phone";

export type ContactHubItem = {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: ContactHubIconKey;
};

export type ContactHubContent = SectionContent & {
  form: {
    eyebrow: string;
    title: string;
    description: string;
    fields: readonly ContactHubField[];
    submitLabel: string;
    pendingLabel: string;
  };
  contactItems: readonly ContactHubItem[];
  map: {
    eyebrow: string;
    title: string;
    iframeTitle: string;
    fallback: string;
  };
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export type ConnectivityBannerContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: NavigationItem;
  image: {
    src: string;
    alt: string;
  };
};

export type AboutHarznetContent = {
  eyebrow: string;
  title: string;
  paragraphs: readonly [string, string];
  features: readonly string[];
  primaryAction: NavigationItem;
};

export type UpgradePromoContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: NavigationItem;
};

export type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type CallToActionContent = SectionContent & {
  primaryAction: NavigationItem;
  statusLabel: string;
  statusDescription: string;
};

export type BreadcrumbItem = { label: string; href?: string };
export type ContentSection = { heading: string; paragraphs: readonly string[] };
export type InformationArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingLabel: string;
  publishedLabel: string;
  sections: readonly ContentSection[];
  metadata: { title: string; description: string };
};
export type InformationPosterItem = {
  id: string;
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
};
export type InformationPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  posters: readonly InformationPosterItem[];
};
export type CompanyValue = { title: string; description: string };
export type MediaItem = { title: string; description: string; status: string };
export type ContactCategory = { title: string; description: string };
export type QuestionnaireOption = { value: string; label: string };
export type QuestionnairePageContent = {
  eyebrow: string;
  title: string;
  description: string;
  notes: readonly [string, string];
  embedUrl: string;
  fallbackUrl: string;
  fallbackLabel: string;
  fallbackText: string;
  iframeTitle: string;
};
export type LegalSection = { heading: string; paragraphs: readonly string[] };
