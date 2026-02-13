import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStepProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  /** Цвет акцента роли */
  accentColor?: "blue" | "green";
  className?: string;
}

const accentStyles = {
  blue: {
    iconBg: "bg-brand-500/10",
    iconColor: "text-brand-500",
    stepColor: "text-brand-500",
  },
  green: {
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    stepColor: "text-emerald-400",
  },
};

export function WorkflowStep({
  icon: Icon,
  step,
  title,
  description,
  accentColor = "blue",
  className,
}: WorkflowStepProps) {
  const accent = accentStyles[accentColor];

  return (
    <div className={cn("flex gap-4", className)}>
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          accent.iconBg
        )}
      >
        <Icon className={cn("h-5 w-5", accent.iconColor)} />
      </div>
      <div>
        <span className={cn("text-xs font-medium uppercase tracking-wider", accent.stepColor)}>
          Шаг {step}
        </span>
        <h4 className="mt-1 text-sm font-semibold text-white">{title}</h4>
        <p className="mt-1 text-xs text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
