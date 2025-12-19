import { MealCard } from "./MealCard";
import { Calendar } from "lucide-react";

const mealHistory = [
  {
    date: "Today",
    meals: [
      { name: "Avocado Toast with Eggs", time: "8:30 AM", calories: 420, protein: 18, carbs: 32, fat: 24, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=200&fit=crop" },
      { name: "Greek Salad", time: "12:45 PM", calories: 280, protein: 12, carbs: 18, fat: 16, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=200&fit=crop" },
    ],
  },
  {
    date: "Yesterday",
    meals: [
      { name: "Oatmeal with Berries", time: "7:15 AM", calories: 320, protein: 10, carbs: 52, fat: 8, image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=200&h=200&fit=crop" },
      { name: "Grilled Chicken Wrap", time: "1:00 PM", calories: 480, protein: 35, carbs: 42, fat: 18, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&h=200&fit=crop" },
      { name: "Salmon & Vegetables", time: "7:30 PM", calories: 520, protein: 42, carbs: 22, fat: 28, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=200&fit=crop" },
    ],
  },
];

export const HistoryView = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">Meal History</h2>
          <p className="text-sm text-muted-foreground">Track your nutrition journey</p>
        </div>
        <button className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center">
          <Calendar className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {mealHistory.map((day) => (
        <div key={day.date}>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">{day.date}</h3>
          <div className="space-y-3">
            {day.meals.map((meal, index) => (
              <MealCard key={index} {...meal} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
