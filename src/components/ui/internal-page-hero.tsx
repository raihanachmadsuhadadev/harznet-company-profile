import Link from "next/link";
import { Container } from "@/components/ui/container";
type Props = { eyebrow: string; title: string; description: string; current: string };
export function InternalPageHero({ eyebrow, title, description, current }: Props) {
  return (
    <>
      <Container>
        <nav aria-label="Breadcrumb" className="pt-8 text-sm text-[var(--muted)]">
          <ol className="flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-[var(--foreground)]">
              {current}
            </li>
          </ol>
        </nav>
      </Container>
      <section className="section-shell pt-10">
        <Container>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--secondary)] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">{description}</p>
        </Container>
      </section>
    </>
  );
}
