import { cn } from "@/lib/utils";

interface MacroBarProps {
  label: string;
  value: number;
  max: number;
  unit?: string;
  colorClass: string;
  bgClass: string;
}

export const MacroBar = ({
  label,
  value,
  max,
  unit = "g",
  colorClass,
  bgClass,
}: MacroBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">
          {value}{unit} / {max}{unit}
        </span>
      </div>
      <div className={cn("h-2 rounded-full overflow-hidden", bgClass)}>
        <div
          className={cn("h-full rounded-full transition-all duration-700 ease-out", colorClass)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
