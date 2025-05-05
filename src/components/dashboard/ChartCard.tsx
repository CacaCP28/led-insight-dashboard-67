
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
      "led-card p-5 animate-fade-in bg-gradient-to-br from-muted to-card shadow-lg border-none", 
      className
    )}>
      <h3 className="text-sm font-medium text-white mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ChartCard;
