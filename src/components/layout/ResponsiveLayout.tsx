
import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '@/components/ui/sidebar';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <div 
      className={`flex-1 transition-all duration-300 ease-in-out ${
        expanded ? 'ml-64' : 'ml-16'
      }`}
    >
      {children}
    </div>
  );
};
