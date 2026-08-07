import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type InternalRouteLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

export function InternalRouteLink({ href, ...props }: InternalRouteLinkProps) {
  if (href !== "/" && href.endsWith("/")) {
    return <a href={href} {...props} />;
  }

  return <Link href={href} {...props} />;
}
