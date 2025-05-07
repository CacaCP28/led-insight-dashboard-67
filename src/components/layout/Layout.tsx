
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CustomSidebar from "./CustomSidebar";
import Header from "./Header";
import { useIsMobile } from "../../hooks/use-mobile";

export const Layout = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-led-background to-led-dark-purple/80">
      {/* Desktop sidebar - always visible on desktop */}
      {!isMobile && (
        <div className="w-[240px] h-screen flex-shrink-0">
          <CustomSidebar />
        </div>
      )}
      
      {/* Mobile sidebar - shown when toggled */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={toggleSidebar}
          />
          <div className="absolute left-0 top-0 h-full w-[240px] animate-slide-in-right">
            <CustomSidebar />
          </div>
        </div>
      )}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-2 md:p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
