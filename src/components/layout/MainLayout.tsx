
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { NewSidebar } from "./NewSidebar";
import { useIsMobile } from "../../hooks/use-mobile";
import GlobalFooter from "./GlobalFooter";

const MainLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="fixed top-0 left-0 right-0 z-50" />
      <div className="flex flex-1 pt-16 overflow-hidden">
        {!isMobile && (
          <aside className="w-64 flex-shrink-0 fixed left-0 top-16 bottom-0 flex flex-col">
            <div className="flex-grow overflow-y-auto">
              <NewSidebar />
            </div>
            <GlobalFooter />
          </aside>
        )}
        <main className="flex-grow overflow-auto pl-0 md:pl-64">
          <div className="container mx-auto py-6 px-4">
            <Outlet />
          </div>
        </main>
      </div>
      {isMobile && <GlobalFooter />}
    </div>
  );
};

export default MainLayout;
