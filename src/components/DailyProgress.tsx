import { CircularProgress } from "./ui/CircularProgress";
import { MacroBar } from "./ui/MacroBar";
import { Flame, TrendingUp } from "lucide-react";

interface DailyProgressProps {
  calories: {
    consumed: number;
    goal: number;
  };
  protein: {
    consumed: number;
    goal: number;
  };
  carbs: {
    consumed: number;
    goal: number;
  };
  fat: {
    consumed: number;
    goal: number;
  };
}

export const DailyProgress = ({
  calories,
  protein,
  carbs,
  fat,
}: DailyProgressProps) => {
  const remaining = calories.goal - calories.consumed;

  return (
    <div className="bg-card rounded-3xl p-6 shadow-card animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-foreground">Daily Progress</h2>
          <p className="text-sm text-muted-foreground">Keep going, you're doing great!</p>
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-secondary rounded-full">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-secondary-foreground">On track</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <CircularProgress
          value={calories.consumed}
          max={calories.goal}
          size={140}
          strokeWidth={12}
          className="flex-shrink-0"
        >
          <Flame className="w-6 h-6 text-accent mb-1" />
          <span className="text-2xl font-bold text-foreground">{calories.consumed}</span>
          <span className="text-xs text-muted-foreground">/ {calories.goal} kcal</span>
        </CircularProgress>

        <div className="flex-1 space-y-4">
          <MacroBar
            label="Protein"
            value={protein.consumed}
            max={protein.goal}
            colorClass="bg-protein"
            bgClass="bg-protein/20"
          />
          <MacroBar
            label="Carbs"
            value={carbs.consumed}
            max={carbs.goal}
            colorClass="bg-carbs"
            bgClass="bg-carbs/20"
          />
          <MacroBar
            label="Fat"
            value={fat.consumed}
            max={fat.goal}
            colorClass="bg-fat"
            bgClass="bg-fat/20"
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-center gap-2">
          <span className="text-muted-foreground">Remaining:</span>
          <span className="text-xl font-bold text-primary">{remaining} kcal</span>
        </div>
      </div>
    </div>
  );
};
