
import React from "react";
import { Outlet } from "react-router-dom";
import { NewSidebar } from "./NewSidebar";
import Header from "./Header";
import { useIsMobile } from "../../hooks/use-mobile";

export const Layout = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-led-background to-led-dark-purple/80">
      {/* Desktop sidebar - always visible on desktop */}
      {!isMobile && (
        <div className="h-screen flex-shrink-0">
          <NewSidebar />
        </div>
      )}
      
      {/* Mobile sidebar */}
      {isMobile && <NewSidebar />}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-2 md:p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
