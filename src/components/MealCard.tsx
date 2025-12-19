import { Clock, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface MealCardProps {
  name: string;
  time: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
  className?: string;
}

export const MealCard = ({
  name,
  time,
  calories,
  protein,
  carbs,
  fat,
  image,
  className,
}: MealCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer animate-fade-in",
        className
      )}
    >
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{calories} kcal</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-3 pt-3 border-t border-border">
        <MacroPill label="P" value={protein} color="bg-protein/20 text-protein" />
        <MacroPill label="C" value={carbs} color="bg-carbs/20 text-carbs" />
        <MacroPill label="F" value={fat} color="bg-fat/20 text-fat" />
      </div>
    </div>
  );
};

const MacroPill = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => (
  <div className={cn("px-2.5 py-1 rounded-full text-xs font-medium", color)}>
    {label}: {value}g
  </div>
);
