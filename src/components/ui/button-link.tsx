import Link from "next/link";
import type { ReactNode } from "react";

import { whatsappContact } from "@/config/contact";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  size?: "default" | "large";
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses = {
  primary:
    "border border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--shadow-card)] hover:border-[var(--secondary)] hover:bg-[var(--secondary)]",
  secondary:
    "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--secondary)] hover:text-[var(--secondary)]",
  ghost: "border border-transparent text-[var(--primary)] hover:bg-[var(--surface-subtle)]",
} as const;

const sizeClasses = {
  default: "min-h-11 px-5 py-2.5 text-sm",
  large: "min-h-12 px-6 py-3 text-base",
} as const;

export function ButtonLink({
  children,
  href,
  className = "",
  size = "default",
  variant = "primary",
}: ButtonLinkProps) {
  const opensWhatsApp = href === whatsappContact.url;

  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full font-bold transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim()}
      href={href}
      rel={opensWhatsApp ? "noopener noreferrer" : undefined}
      target={opensWhatsApp ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}
