"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SlideWrapperProps {
  id: string;
  index: number;
  children: ReactNode;
  className?: string;
  /** Вариант фона слайда */
  variant?: "dark" | "darker" | "gradient";
  /** Убирает внутренний контейнер, дети рендерятся напрямую в section */
  raw?: boolean;
}

const variantStyles: Record<string, string> = {
  dark: "bg-surface-dark",
  darker: "bg-surface-darker",
  gradient:
    "bg-gradient-to-b from-surface-darker to-surface-dark",
};

export function SlideWrapper({
  id,
  index,
  children,
  className,
  variant = "dark",
  raw = false,
}: SlideWrapperProps) {
  return (
    <section
      id={id}
      data-slide-index={index}
      className={cn(
        "slide relative flex items-center justify-center overflow-hidden",
        "px-4 py-16 md:px-8 lg:px-16",
        variantStyles[variant],
        className
      )}
    >
      {raw ? (
        children
      ) : (
        <div className="relative z-10 mx-auto w-full max-w-6xl">{children}</div>
      )}
    </section>
  );
}
