import { useState } from "react";
import { Header } from "@/components/Header";
import { DailyProgress } from "@/components/DailyProgress";
import { QuickActions } from "@/components/QuickActions";
import { MealCard } from "@/components/MealCard";
import { BottomNav } from "@/components/BottomNav";
import { ScanModal, DetectedFood } from "@/components/ScanModal";
import { StatsView } from "@/components/StatsView";
import { HistoryView } from "@/components/HistoryView";
import { ProfileView } from "@/components/ProfileView";
import { toast } from "sonner";

const initialMeals = [
  {
    name: "Avocado Toast with Eggs",
    time: "8:30 AM",
    calories: 420,
    protein: 18,
    carbs: 32,
    fat: 24,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=200&fit=crop",
  },
  {
    name: "Greek Salad",
    time: "12:45 PM",
    calories: 280,
    protein: 12,
    carbs: 18,
    fat: 16,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isScanOpen, setIsScanOpen] = useState(false);
  const [meals, setMeals] = useState(initialMeals);

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalFat = meals.reduce((sum, meal) => sum + meal.fat, 0);

  const handleFoodDetected = (food: DetectedFood) => {
    const newMeal = {
      name: food.name,
      time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      calories: food.calories,
      protein: food.protein,
      carbs: food.carbs,
      fat: food.fat,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop",
    };
    setMeals([newMeal, ...meals]);
    toast.success(`Added ${food.name} to your log!`, {
      description: `${food.calories} kcal • ${food.protein}g protein`,
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "stats":
        return <StatsView />;
      case "history":
        return <HistoryView />;
      case "profile":
        return <ProfileView />;
      default:
        return (
          <>
            <DailyProgress
              calories={{ consumed: totalCalories, goal: 2000 }}
              protein={{ consumed: totalProtein, goal: 150 }}
              carbs={{ consumed: totalCarbs, goal: 250 }}
              fat={{ consumed: totalFat, goal: 65 }}
            />

            <section className="mt-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
              <QuickActions
                onScanFood={() => setIsScanOpen(true)}
                onSearchFood={() => toast.info("Search coming soon!")}
                onQuickAdd={() => toast.info("Quick add coming soon!")}
                onLogMeal={() => toast.info("Log meal coming soon!")}
              />
            </section>

            <section className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">Today's Meals</h2>
                <button className="text-sm font-medium text-primary">See all</button>
              </div>
              <div className="space-y-3">
                {meals.map((meal, index) => (
                  <MealCard key={index} {...meal} />
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 pb-24">
        <Header userName="Alex" streak={12} />
        {renderContent()}
      </div>

      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onScan={() => setIsScanOpen(true)}
      />

      <ScanModal
        isOpen={isScanOpen}
        onClose={() => setIsScanOpen(false)}
        onFoodDetected={handleFoodDetected}
      />
    </div>
  );
};

export default Index;
