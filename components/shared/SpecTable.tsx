import { cn } from "@/lib/utils";

export interface SpecRow {
  component: string;
  minimum: string;
  recommended: string;
  futureProof?: string;
}

interface SpecTableProps {
  specs: SpecRow[];
  showFutureProof?: boolean;
  className?: string;
  /** Компактный режим — меньше отступы и шрифт */
  compact?: boolean;
}

export function SpecTable({
  specs,
  showFutureProof = false,
  className,
  compact = false,
}: SpecTableProps) {
  const cellPy = compact ? "py-1.5" : "py-3";
  const cellPb = compact ? "pb-2" : "pb-3";
  const textSize = compact ? "text-xs" : "text-sm";

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className={cn("w-full text-left", textSize)}>
        <thead>
          <tr className="border-b border-surface-border">
            <th className={cn(cellPb, "pr-3 font-medium text-text-muted")}>
              Компонент
            </th>
            <th className={cn(cellPb, "pr-3 font-medium text-text-muted")}>Минимум</th>
            <th className={cn(cellPb, "pr-3 font-medium text-text-muted")}>
              Рекомендуемые
            </th>
            {showFutureProof && (
              <th className={cn(cellPb, "font-medium text-text-muted")}>
                Запас
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {specs.map((row) => (
            <tr
              key={row.component}
              className="border-b border-surface-border/50"
            >
              <td className={cn(cellPy, "pr-3 font-medium text-white")}>
                {row.component}
              </td>
              <td className={cn(cellPy, "pr-3 text-text-secondary")}>{row.minimum}</td>
              <td className={cn(cellPy, "pr-3 text-text-secondary")}>
                {row.recommended}
              </td>
              {showFutureProof && (
                <td className={cn(cellPy, "text-text-secondary")}>
                  {row.futureProof || "—"}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
