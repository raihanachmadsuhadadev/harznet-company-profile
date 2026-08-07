import type { ReactNode } from "react";

type GlassPanelProps = {
  as?: "div" | "article";
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ as: Component = "div", children, className = "" }: GlassPanelProps) {
  return (
    <Component className={`glass-panel rounded-[var(--radius-md)] ${className}`.trim()}>
      {children}
    </Component>
  );
}
