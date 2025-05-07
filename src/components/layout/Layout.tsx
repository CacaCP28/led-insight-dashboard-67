
import React from "react";
import { Outlet } from "react-router-dom";
import CustomSidebar from "./CustomSidebar";
import Header from "./Header";
import { useIsMobile } from "../../hooks/use-mobile";

const Layout: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen overflow-hidden">
      {!isMobile && <CustomSidebar />}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
