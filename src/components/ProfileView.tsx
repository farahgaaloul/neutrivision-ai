import { User, Target, Scale, Ruler, Activity, ChevronRight, Moon, Bell, Shield } from "lucide-react";
import { CircularProgress } from "./ui/CircularProgress";

const userProfile = {
  name: "Alex Johnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  calorieGoal: 2000,
  weight: 72,
  height: 175,
  activityLevel: "Moderate",
  goalProgress: 68,
};

const menuItems = [
  { icon: Target, label: "Nutrition Goals", value: `${userProfile.calorieGoal} kcal` },
  { icon: Scale, label: "Current Weight", value: `${userProfile.weight} kg` },
  { icon: Ruler, label: "Height", value: `${userProfile.height} cm` },
  { icon: Activity, label: "Activity Level", value: userProfile.activityLevel },
];

const settingsItems = [
  { icon: Bell, label: "Notifications" },
  { icon: Moon, label: "Dark Mode" },
  { icon: Shield, label: "Privacy" },
];

export const ProfileView = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-card rounded-3xl p-6 shadow-card text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-full h-full rounded-full object-cover border-4 border-primary"
          />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-foreground">{userProfile.name}</h2>
        <p className="text-sm text-muted-foreground">Premium Member</p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <CircularProgress
            value={userProfile.goalProgress}
            max={100}
            size={80}
            strokeWidth={6}
          >
            <span className="text-lg font-bold text-foreground">{userProfile.goalProgress}%</span>
          </CircularProgress>
          <div className="text-left">
            <p className="text-2xl font-bold text-foreground">12</p>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-3xl overflow-hidden shadow-card">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="font-semibold text-foreground">Personal Info</h3>
        </div>
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-foreground">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{item.value}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>
        ))}
      </div>

      <div className="bg-card rounded-3xl overflow-hidden shadow-card">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="font-semibold text-foreground">Settings</h3>
        </div>
        {settingsItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-foreground">{item.label}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
};
