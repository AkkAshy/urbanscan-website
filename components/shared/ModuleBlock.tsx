import { cn } from "@/lib/utils";

interface ModuleBlockProps {
  name: string;
  description: string;
  className?: string;
}

export function ModuleBlock({ name, description, className }: ModuleBlockProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-surface-border bg-surface-card/70 p-4 transition-all",
        "hover:border-brand-500/30",
        className
      )}
    >
      <h4 className="font-mono text-sm font-semibold text-brand-400">{name}</h4>
      <p className="mt-1 text-xs text-text-secondary">{description}</p>
    </div>
  );
}
