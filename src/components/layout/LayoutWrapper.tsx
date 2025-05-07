
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NewSidebar } from './NewSidebar';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';

export function LayoutWrapper() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useMobile();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar for desktop, or when opened on mobile */}
      {(sidebarOpen || !isMobile) && (
        <div className={cn(
          "fixed inset-y-0 left-0 z-50",
          isMobile && "w-full"
        )}>
          <NewSidebar />
          {isMobile && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>
      )}

      {/* Main content */}
      <div className={cn(
        "flex-1 flex flex-col h-full transition-all duration-300 overflow-y-auto",
        !isMobile && (sidebarOpen ? "ml-64" : "ml-16")
      )}>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default LayoutWrapper;
