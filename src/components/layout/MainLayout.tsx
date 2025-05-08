
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NewSidebar from "./NewSidebar";
import { useMediaQuery } from "../../hooks/use-mobile";
import GlobalFooter from "./GlobalFooter";

const MainLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && (
          <aside className="w-64 flex-shrink-0">
            <NewSidebar />
          </aside>
        )}
        <main className="flex-grow overflow-auto">
          <div className="container mx-auto py-6 px-4">
            <Outlet />
          </div>
        </main>
      </div>
      <GlobalFooter />
    </div>
  );
};

export default MainLayout;
