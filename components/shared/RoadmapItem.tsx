import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RoadmapItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: "priority" | "planned" | "future";
  className?: string;
}

const statusConfig = {
  priority: { label: "Приоритет", variant: "default" as const, className: "bg-brand-500 hover:bg-brand-600" },
  planned: { label: "Запланировано", variant: "secondary" as const, className: "" },
  future: { label: "Будущее", variant: "outline" as const, className: "" },
};

export function RoadmapItem({
  icon: Icon,
  title,
  description,
  status,
  className,
}: RoadmapItemProps) {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-lg border border-surface-border bg-surface-card/50 p-4",
        className
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
        <Icon className="h-5 w-5 text-brand-400" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <Badge variant={config.variant} className={cn("text-xs", config.className)}>
            {config.label}
          </Badge>
        </div>
        <p className="mt-1 text-xs text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
