
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { useMobile } from "@/hooks/use-mobile";
import SidebarLogo from "./SidebarLogo";

export interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  disabled?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
  className?: string;
}

export function NewSidebar({ items, className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMobile();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {isMobile && (
        <Button onClick={toggle} size="icon" variant="outline" className="fixed top-4 left-4 z-50">
          {open ? <X size={16} /> : <Menu size={16} />}
        </Button>
      )}

      <div
        className={cn(
          "min-h-screen border-r bg-background flex-col",
          isMobile ? "fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out w-[280px]" : "hidden md:flex w-[280px]",
          isMobile && !open && "-translate-x-full",
          isMobile && open && "translate-x-0",
          className
        )}
      >
        {/* Add SidebarLogo at the top */}
        <SidebarLogo />
        
        <Separator />

        <div className="flex flex-col gap-1 p-4">
          {items.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Button
                key={index}
                variant={isActive ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2 text-left", item.disabled && "opacity-50 pointer-events-none")}
                disabled={item.disabled}
                asChild
              >
                <Link to={item.disabled ? "#" : item.path}>
                  {item.icon}
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
