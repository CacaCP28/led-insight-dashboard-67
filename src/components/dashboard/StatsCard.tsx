
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
}) => {
  return (
    <div className={cn(
      "led-card p-5 flex flex-col animate-fade-in rounded-xl border border-white/10 shadow-xl",
      "bg-gradient-to-br from-led-purple/30 to-led-pink/30 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-white text-glow">{title}</h3>
        <div className="led-icon-container bg-white/15 backdrop-blur-md shadow-lg rounded-xl p-2">
          <Icon size={20} className="drop-shadow-md" />
        </div>
      </div>
      <div className="mt-auto">
        <div className="text-3xl font-bold text-white text-glow">{value}</div>
        {trend && (
          <div className="flex items-center mt-2">
            <span
              className={cn(
                "text-sm flex items-center",
                trend.isPositive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.isPositive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              )}
              <span className="ml-1">{trend.value}%</span>
            </span>
            <span className="text-xs ml-1 text-white/80">vs. última semana</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
