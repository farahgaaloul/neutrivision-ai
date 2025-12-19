import { Home, PieChart, Camera, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isCenter?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, isActive, isCenter, onClick }: NavItemProps) => {
  if (isCenter) {
    return (
      <button
        onClick={onClick}
        className="relative -mt-6 w-16 h-16 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
      >
        {icon}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 py-2 px-3 transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onScan?: () => void;
}

export const BottomNav = ({ activeTab, onTabChange, onScan }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 pb-safe">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        <NavItem
          icon={<Home className="w-5 h-5" />}
          label="Home"
          isActive={activeTab === "home"}
          onClick={() => onTabChange("home")}
        />
        <NavItem
          icon={<PieChart className="w-5 h-5" />}
          label="Stats"
          isActive={activeTab === "stats"}
          onClick={() => onTabChange("stats")}
        />
        <NavItem
          icon={<Camera className="w-6 h-6" />}
          label=""
          isCenter
          onClick={onScan}
        />
        <NavItem
          icon={<Clock className="w-5 h-5" />}
          label="History"
          isActive={activeTab === "history"}
          onClick={() => onTabChange("history")}
        />
        <NavItem
          icon={<User className="w-5 h-5" />}
          label="Profile"
          isActive={activeTab === "profile"}
          onClick={() => onTabChange("profile")}
        />
      </div>
    </nav>
  );
};
