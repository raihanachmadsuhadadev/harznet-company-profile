import { ContactHubForm } from "@/components/home/contact-hub-form";
import { Container } from "@/components/ui/container";
import { contactHubContent } from "@/content/home";
import type { ContactHubIconKey } from "@/types/content";

function ContactIcon({ icon }: { icon: ContactHubIconKey }) {
  const commonProps = {
    "aria-hidden": true,
    className: "size-5",
    fill: "none",
    viewBox: "0 0 24 24",
  } as const;

  if (icon === "email") {
    return (
      <svg {...commonProps}>
        <path d="M4 6.5h16v11H4z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m5 7.5 7 5 7-5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg {...commonProps}>
        <path
          d="M7.1 3.8 9.4 8 7.8 9.7c1.2 2.5 3 4.3 5.5 5.5l1.7-1.6 4.2 2.3-.6 3.2c-.2 1-1.1 1.7-2.1 1.6C9.4 20 4 14.6 3.3 7.5c-.1-1 .6-1.9 1.6-2.1z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M19 10c0 4.8-7 10-7 10S5 14.8 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function validateContactMapEmbedUrl(candidate?: string) {
  const value = candidate?.trim();
  if (!value) return undefined;

  try {
    const url = new URL(value);
    const isGoogleHost = url.hostname === "google.com" || url.hostname.endsWith(".google.com");
    if (url.protocol === "https:" && isGoogleHost && url.pathname.startsWith("/maps/embed")) {
      return url.toString();
    }
  } catch {
    // Invalid configuration is handled by the safe fallback below.
  }

  return undefined;
}

const configuredMapEmbedUrl = validateContactMapEmbedUrl(process.env.CONTACT_MAP_EMBED_URL);

if (!configuredMapEmbedUrl && process.env.NODE_ENV === "production") {
  console.warn("[ContactHub] CONTACT_MAP_EMBED_URL belum dikonfigurasi atau tidak valid.");
}

export function ContactHubSection({
  mapEmbedUrl = configuredMapEmbedUrl,
}: {
  mapEmbedUrl?: string;
}) {
  const safeMapEmbedUrl = validateContactMapEmbedUrl(mapEmbedUrl);

  return (
    <section
      id="contact-hub"
      className="bg-[linear-gradient(180deg,#edf6fc_0%,#f7fbfe_100%)] py-10 md:py-12 lg:py-14"
      aria-labelledby="contact-hub-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#cadceb] bg-[linear-gradient(145deg,#f9fcff_0%,#edf6fc_100%)] p-5 shadow-[0_18px_52px_rgb(10_31_61_/_8%)] sm:p-8 lg:p-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-36 size-96 rounded-full bg-[var(--cyan)]/8 blur-3xl"
          />

          <header className="relative max-w-[47.5rem]">
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--secondary)] uppercase sm:text-sm">
              {contactHubContent.eyebrow}
            </p>
            <h2
              id="contact-hub-heading"
              className="mt-3.5 text-[1.875rem] leading-[1.1] font-semibold tracking-[-0.035em] text-balance text-[var(--foreground)] sm:text-[2.375rem] lg:text-[2.75rem]"
            >
              {contactHubContent.title}
            </h2>
            <p className="mt-4 max-w-[43rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {contactHubContent.description}
            </p>
          </header>

          <div className="relative mt-8 grid gap-5 lg:mt-9 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:items-stretch xl:gap-6">
            <ContactHubForm content={contactHubContent.form} />

            <div className="grid min-w-0 gap-5 xl:h-full xl:grid-rows-[auto_minmax(0,1fr)] xl:gap-6">
              <article className="rounded-[1.625rem] border border-[#28608f]/65 bg-[linear-gradient(145deg,#071a33_0%,#0a315b_100%)] p-5 text-white shadow-[0_16px_38px_rgb(6_24_48_/_18%)] sm:p-6 xl:p-7">
                <h3 className="text-sm font-bold tracking-[0.16em] text-[var(--cyan)] uppercase">
                  Informasi kontak
                </h3>
                <ul className="mt-3 divide-y divide-white/12">
                  {contactHubContent.contactItems.map((item) => (
                    <li key={item.id} className="flex gap-3.5 py-3.5 first:pt-2 last:pb-1">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/8 text-[var(--cyan)] sm:size-11">
                        <ContactIcon icon={item.icon} />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-xs font-bold tracking-[0.12em] text-white/55 uppercase">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1.5 inline-flex min-h-6 max-w-full items-center break-all text-sm leading-6 font-medium text-white/90 underline-offset-4 hover:underline focus-visible:underline sm:text-base"
                            aria-label={`${item.label}: ${item.value}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1.5 text-sm leading-6 text-white/82 sm:text-base">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[1.625rem] border border-[#c5d9e9] bg-white shadow-[0_16px_38px_rgb(10_31_61_/_8%)] xl:h-full">
                <div className="shrink-0 px-5 py-4.5 sm:px-6 sm:py-5">
                  <p className="text-xs font-bold tracking-[0.16em] text-[var(--secondary)] uppercase">
                    {contactHubContent.map.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-2xl">
                    {contactHubContent.map.title}
                  </h3>
                </div>
                {safeMapEmbedUrl ? (
                  <iframe
                    src={safeMapEmbedUrl}
                    title={contactHubContent.map.iframeTitle}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="block min-h-[16rem] w-full flex-1 border-0 sm:min-h-[18rem] xl:min-h-0"
                  />
                ) : (
                  <div
                    role="status"
                    className="grid min-h-[16rem] flex-1 place-items-center bg-[linear-gradient(145deg,#eaf3fa_0%,#dcebf6_100%)] px-6 text-center text-sm leading-6 text-[var(--muted)] sm:min-h-[18rem] xl:min-h-0"
                  >
                    {contactHubContent.map.fallback}
                  </div>
                )}
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
