
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { 
  Menu, 
  X, 
  LayoutGrid, 
  Users, 
  BarChart3, 
  HardDrive, 
  Settings,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
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
  items?: SidebarItem[];
  className?: string;
}

// Default sidebar items with all the original pages
const defaultItems: SidebarItem[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <LayoutGrid size={16} />,
  },
  {
    title: "Jornada do Cliente",
    path: "/customer-journey",
    icon: <Users size={16} />,
  },
  {
    title: "Ruptura",
    path: "/ruptura",
    icon: <BarChart3 size={16} />,
  },
  {
    title: "Relatórios",
    path: "/reports",
    icon: <BarChart3 size={16} />,
  },
  {
    title: "Dispositivos",
    path: "/devices",
    icon: <HardDrive size={16} />,
  },
  {
    title: "Configurações",
    path: "/settings",
    icon: <Settings size={16} />,
  },
];

export function NewSidebar({ items = defaultItems, className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isMobile = useMobile();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {isMobile && (
        <Button onClick={toggleSidebar} size="icon" variant="outline" className="fixed top-4 left-4 z-50">
          {open ? <X size={16} /> : <Menu size={16} />}
        </Button>
      )}

      <div
        className={cn(
          "bg-background flex-col transition-all duration-300",
          isMobile 
            ? "fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out" 
            : "flex h-full",
          isMobile && !open && "-translate-x-full",
          isMobile && open && "translate-x-0",
          !isMobile && collapsed ? "w-[80px]" : "w-[280px]",
          className
        )}
      >
        <div className="flex items-center justify-between p-4">
          {/* Only show logo when not collapsed or on mobile */}
          {(!collapsed || isMobile) && <SidebarLogo />}
          
          {/* Collapse toggle button - only on desktop */}
          {!isMobile && (
            <Button 
              onClick={toggleCollapse} 
              size="icon" 
              variant="ghost" 
              className="ml-auto"
            >
              {collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
            </Button>
          )}
        </div>
        
        <Separator />

        <div className="flex flex-col gap-1 p-4 flex-grow overflow-y-auto">
          {items.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Button
                key={index}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2 text-left", 
                  item.disabled && "opacity-50 pointer-events-none",
                  collapsed && !isMobile && "justify-center px-2"
                )}
                disabled={item.disabled}
                asChild
              >
                <Link to={item.disabled ? "#" : item.path}>
                  {item.icon}
                  {(!collapsed || isMobile) && <span>{item.title}</span>}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}

