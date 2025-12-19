import { Camera, Search, Plus, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const QuickAction = ({
  icon,
  label,
  description,
  onClick,
  variant = "secondary",
}: QuickActionProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 text-center group",
      variant === "primary"
        ? "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105"
        : "bg-card shadow-card hover:shadow-card-hover"
    )}
  >
    <div
      className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
        variant === "primary" ? "bg-primary-foreground/20" : "bg-secondary"
      )}
    >
      {icon}
    </div>
    <div>
      <p className="font-semibold text-sm">{label}</p>
      <p
        className={cn(
          "text-xs mt-0.5",
          variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    </div>
  </button>
);

interface QuickActionsProps {
  onScanFood?: () => void;
  onSearchFood?: () => void;
  onQuickAdd?: () => void;
  onLogMeal?: () => void;
}

export const QuickActions = ({
  onScanFood,
  onSearchFood,
  onQuickAdd,
  onLogMeal,
}: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <QuickAction
        icon={<Camera className="w-6 h-6" />}
        label="Scan Food"
        description="AI-powered"
        onClick={onScanFood}
        variant="primary"
      />
      <QuickAction
        icon={<Search className="w-6 h-6 text-foreground" />}
        label="Search"
        description="Food database"
        onClick={onSearchFood}
      />
      <QuickAction
        icon={<Plus className="w-6 h-6 text-foreground" />}
        label="Quick Add"
        description="Custom entry"
        onClick={onQuickAdd}
      />
      <QuickAction
        icon={<Utensils className="w-6 h-6 text-foreground" />}
        label="Log Meal"
        description="Recent meals"
        onClick={onLogMeal}
      />
    </div>
  );
};
