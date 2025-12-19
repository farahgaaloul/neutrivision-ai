import { Bell, Settings } from "lucide-react";

interface HeaderProps {
  userName: string;
  streak: number;
}

export const Header = ({ userName, streak }: HeaderProps) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between py-4 animate-fade-in">
      <div>
        <p className="text-sm text-muted-foreground">{today}</p>
        <h1 className="text-2xl font-bold text-foreground">
          Hello, <span className="text-gradient-primary">{userName}</span>
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 rounded-full">
          <span className="text-lg">🔥</span>
          <span className="text-sm font-semibold text-accent">{streak} days</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:shadow-card-hover transition-all">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:shadow-card-hover transition-all">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};
