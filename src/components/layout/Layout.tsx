
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CustomSidebar from "./CustomSidebar";
import Header from "./Header";
import { useIsMobile } from "../../hooks/use-mobile";

const Layout: React.FC = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-led-background to-led-dark-purple/80">
      {!isMobile && <CustomSidebar />}
      {isMobile && sidebarOpen && <CustomSidebar />}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
