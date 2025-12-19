import { TrendingUp, TrendingDown, Target, Award } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const weeklyData = [
  { day: "Mon", calories: 1850 },
  { day: "Tue", calories: 2100 },
  { day: "Wed", calories: 1920 },
  { day: "Thu", calories: 1780 },
  { day: "Fri", calories: 2050 },
  { day: "Sat", calories: 2200 },
  { day: "Sun", calories: 1650 },
];

const stats = [
  { label: "Weekly Avg", value: "1,936", unit: "kcal", icon: Target, trend: "+2%" },
  { label: "Best Streak", value: "12", unit: "days", icon: Award, trend: null },
  { label: "This Week", value: "-1.2", unit: "kg", icon: TrendingDown, trend: "Great!" },
  { label: "Protein Avg", value: "118", unit: "g/day", icon: TrendingUp, trend: "+8%" },
];

export const StatsView = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Your Stats</h2>
        <p className="text-sm text-muted-foreground">Weekly overview & insights</p>
      </div>

      <div className="bg-card rounded-3xl p-5 shadow-card">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Calorie Intake (This Week)</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="calorieGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(158 64% 42%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(158 64% 42%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(160 10% 45%)", fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0 0% 100%)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                labelStyle={{ color: "hsl(160 30% 15%)", fontWeight: 600 }}
              />
              <Area
                type="monotone"
                dataKey="calories"
                stroke="hsl(158 64% 42%)"
                strokeWidth={3}
                fill="url(#calorieGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-2xl p-4 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              {stat.trend && (
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {stat.trend}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.unit} • {stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-hero rounded-3xl p-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="font-bold text-foreground">You're on fire! 🔥</p>
            <p className="text-sm text-muted-foreground">5 days under calorie goal this week</p>
          </div>
        </div>
      </div>
    </div>
  );
};
