import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NewSidebar } from "./NewSidebar";
import Header from "./Header";
import { useIsMobile } from "../../hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { X } from "lucide-react";

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
        <div className="h-screen flex-shrink-0">
          <NewSidebar />
        </div>
      )}
      
      {/* Mobile sidebar - shown in a drawer */}
      {isMobile && (
        <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <DrawerContent className="h-[90vh] bg-transparent border-none shadow-none">
            <div className="h-full">
              <div className="relative h-full">
                <NewSidebar />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40"
                >
                  <X size={20} />
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="flex-1 overflow-y-auto p-2 md:p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
