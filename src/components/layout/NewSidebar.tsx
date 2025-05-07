
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronLeft, Grid2x2, LayoutList, ChartBar, Laptop, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    icon: <Grid2x2 className="h-5 w-5" />,
    label: 'Dashboard',
    path: '/',
  },
  {
    icon: <LayoutList className="h-5 w-5" />,
    label: 'Jornada do Cliente',
    path: '/customer-journey',
  },
  {
    icon: <ChartBar className="h-5 w-5" />,
    label: 'Relatórios',
    path: '/reports',
  },
  {
    icon: <Laptop className="h-5 w-5" />,
    label: 'Dispositivos',
    path: '/devices',
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: 'Configurações',
    path: '/settings',
  },
];

export function NewSidebar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMobile();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cn(
      "flex flex-col h-screen bg-[#1A1F2C] text-white relative transition-all duration-300",
      collapsed ? "w-16" : isMobile ? "w-full" : "w-64"
    )}>
      {/* Sidebar Header */}
      <div className="flex items-center p-4 h-16">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="flex">
              <div className="h-6 w-2 bg-purple-500 rounded-sm" />
              <div className="h-6 w-2 bg-blue-500 rounded-sm" />
              <div className="h-6 w-2 bg-green-500 rounded-sm" />
              <div className="h-6 w-2 bg-yellow-500 rounded-sm" />
            </div>
            <div>
              <div className="font-bold text-lg">THE LED</div>
              <div className="text-xs text-gray-400">INSIGHTS PERSONALIZADOS</div>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex mx-auto">
            <div className="h-6 w-1 bg-purple-500 rounded-sm" />
            <div className="h-6 w-1 bg-blue-500 rounded-sm" />
            <div className="h-6 w-1 bg-green-500 rounded-sm" />
            <div className="h-6 w-1 bg-yellow-500 rounded-sm" />
          </div>
        )}
        {!isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto text-white hover:bg-[#2A2F3C] rounded-full"
            onClick={toggleSidebar}
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
          </Button>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-grow">
        <nav className="mt-4 px-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg text-sm",
                isActive ? "bg-[#36304A] text-[#9b87f5]" : "text-white hover:bg-[#2A2F3C]",
                collapsed && "justify-center"
              )}
            >
              <div>{item.icon}</div>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className={cn(
          "flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-orange-500 p-2",
          collapsed && "justify-center"
        )}>
          {!collapsed && <span className="text-sm">Desenvolvido por</span>}
          <a href="https://globalia.com.br" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lovable-uploads/2ebdaa22-5e48-4118-9f3e-0d9083f4df44.png" 
              alt="GlobalIA" 
              className="h-4" 
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewSidebar;
