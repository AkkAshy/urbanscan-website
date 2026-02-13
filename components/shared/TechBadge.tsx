import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export function TechBadge({ icon: Icon, label, className }: TechBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card px-4 py-2",
        "transition-colors hover:border-brand-500/30",
        className
      )}
    >
      <Icon className="h-4 w-4 text-brand-400" />
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
  );
}
