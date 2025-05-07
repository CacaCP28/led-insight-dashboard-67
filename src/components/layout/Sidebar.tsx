
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart2, Users, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface SidebarProps {
  collapsed?: boolean;
  setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, setCollapsed }) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  
  const handleToggle = () => {
    if (setCollapsed) {
      setCollapsed(prev => !prev);
    }
  };
  
  const navigationLinks = (
    <ul className="space-y-2">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-800 text-gray-300"
            } ${collapsed && !isMobile ? "justify-center" : ""}`
          }
          onClick={() => isMobile && setOpen(false)}
        >
          <BarChart2 size={20} />
          {(!collapsed || isMobile) && <span className="ml-3">Dashboard</span>}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/customer-journey"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-800 text-gray-300"
            } ${collapsed && !isMobile ? "justify-center" : ""}`
          }
          onClick={() => isMobile && setOpen(false)}
        >
          <Users size={20} />
          {(!collapsed || isMobile) && <span className="ml-3">Customer Journey</span>}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ruptura"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors ${
              isActive
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-800 text-gray-300"
            } ${collapsed && !isMobile ? "justify-center" : ""}`
          }
          onClick={() => isMobile && setOpen(false)}
        >
          <AlertTriangle size={20} />
          {(!collapsed || isMobile) && <span className="ml-3">Ruptura</span>}
        </NavLink>
      </li>
    </ul>
  );

  const userProfile = (
    <div className="border-t border-gray-700 pt-4 mt-4">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
          <span className="font-semibold text-lg">JS</span>
        </div>
        <div className="ml-3">
          <p className="font-medium">John Smith</p>
          <p className="text-sm text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
  
  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="h-[90%] bg-gray-900 text-white p-5 flex flex-col">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="text-2xl font-bold">LED Insight</h1>
          </div>
          <nav className="flex-1">
            {navigationLinks}
          </nav>
          <div className="mt-auto">
            {userProfile}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div className={`h-screen bg-gray-900 text-white p-5 flex flex-col transition-all duration-300 ${
      collapsed ? "w-20" : "w-64"
    }`}>
      <div className="mb-5 flex items-center justify-between">
        {!collapsed && <h1 className="text-2xl font-bold">LED Insight</h1>}
        <button 
          onClick={handleToggle} 
          className="p-1 rounded-md hover:bg-gray-800 ml-auto"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <nav className="flex-1">
        {navigationLinks}
      </nav>
      {!collapsed && (
        <div className="mt-auto">
          {userProfile}
        </div>
      )}
      {collapsed && (
        <div className="mt-auto flex justify-center pt-4">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="font-semibold text-lg">JS</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
