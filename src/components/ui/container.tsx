import type { ReactNode } from "react";

type ContainerProps = {
  as?: "div" | "section";
  children: ReactNode;
  className?: string;
};

export function Container({ as: Component = "div", children, className = "" }: ContainerProps) {
  return <Component className={`site-container ${className}`.trim()}>{children}</Component>;
}
