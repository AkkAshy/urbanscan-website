import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  /** Выравнивание: по центру или слева */
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={cn("mb-12 md:mb-16", className)}>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl",
          align === "center" && "text-center"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base text-text-secondary md:text-lg",
            align === "center" && "mx-auto text-center"
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
