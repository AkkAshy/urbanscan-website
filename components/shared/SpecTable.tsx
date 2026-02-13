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
}

export function SpecTable({
  specs,
  showFutureProof = false,
  className,
}: SpecTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-surface-border">
            <th className="pb-3 pr-4 font-medium text-text-muted">
              Компонент
            </th>
            <th className="pb-3 pr-4 font-medium text-text-muted">Минимум</th>
            <th className="pb-3 pr-4 font-medium text-text-muted">
              Рекомендуемые
            </th>
            {showFutureProof && (
              <th className="pb-3 font-medium text-text-muted">
                Запас на будущее
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
              <td className="py-3 pr-4 font-medium text-white">
                {row.component}
              </td>
              <td className="py-3 pr-4 text-text-secondary">{row.minimum}</td>
              <td className="py-3 pr-4 text-text-secondary">
                {row.recommended}
              </td>
              {showFutureProof && (
                <td className="py-3 text-text-secondary">
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
