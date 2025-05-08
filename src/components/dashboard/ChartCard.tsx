
import React from "react";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ 
  title, 
  children,
  className 
}) => {
  return (
    <div className={cn(
      "rounded-xl p-5 animate-fade-in backdrop-blur-sm border border-white/5 shadow-md",
      "bg-gradient-to-br from-purple-600/10 to-pink-500/10 hover:-translate-y-1 transition-all duration-300", 
      "hover:shadow-purple-500/10 hover:border-purple-500/20",
      className
    )}>
      <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ChartCard;
