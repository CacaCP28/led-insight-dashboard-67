
import React from "react";
import { cn } from "@/lib/utils";

interface GlobalFooterProps {
  className?: string;
}

const GlobalFooter = ({ className }: GlobalFooterProps) => {
  return (
    <div className={cn(
      "w-full py-3 px-3 bg-card border-t border-border flex items-center justify-center gap-1 backdrop-blur-sm",
      "bg-gradient-to-br from-purple-900/20 to-pink-900/20", 
      className
    )}>
      <span className="text-white text-xs whitespace-nowrap">Desenvolvido por:</span>
      <a 
        href="https://www.globalia.com.br" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <img 
          src="/lovable-uploads/0e5d21d8-c3ec-462e-a524-a02811576610.png" 
          alt="Globalia" 
          className="h-5" 
        />
      </a>
    </div>
  );
};

export default GlobalFooter;
