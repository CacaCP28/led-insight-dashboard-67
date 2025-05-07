
import React from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  HardDrive, 
  Settings,
  Route,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  return (
    <aside className={cn(
      "h-screen bg-led-sidebar fixed left-0 top-0 z-30 flex flex-col transition-all duration-300 ease-in-out border-r border-border/30",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-border/30">
        <div className={cn("flex items-center", collapsed ? "justify-center w-full" : "")}>
          {!collapsed && (
            <img 
              src="/lovable-uploads/23204e4f-5218-4b27-bf97-1000637fdf04.png" 
              alt="THE LED Logo" 
              className="h-12 w-auto" // Increased from h-10 to h-12
            />
          )}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-2 rounded-lg hover:bg-muted transition-colors duration-200",
            collapsed && "absolute right-0 -mr-4 bg-background shadow-lg border border-border/30 rounded-full"
          )}
        >
          {collapsed ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 18L5 12L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      <nav className="flex flex-col gap-2 p-4 grow">
        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          route="/"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Route size={20} />}
          label="Jornada do Cliente"
          route="/jornada"
          collapsed={collapsed}
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="Relatórios"
          route="/relatorios"
          collapsed={collapsed}
        />
        <NavItem
          icon={<HardDrive size={20} />}
          label="Dispositivos"
          route="/dispositivos"
          collapsed={collapsed}
        />
        <NavItem
          icon={<Settings size={20} />}
          label="Configurações"
          route="/configuracoes"
          collapsed={collapsed}
        />
      </nav>

      <div className="p-4 mt-auto">
        {!collapsed && (
          <a 
            href="https://globalia.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-led-purple to-led-orange text-white font-medium transition-all text-xs"
          >
            <span>Desenvolvido por</span>
            <img 
              src="/lovable-uploads/298f42a6-421f-420f-95a8-246670d2cd86.png" 
              alt="Global IA Logo" 
              className="h-4 w-auto ml-2" // Reverted back to h-4 from h-5
            />
          </a>
        )}
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  route: string;
  collapsed: boolean;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ 
  icon, 
  label, 
  route, 
  collapsed,
  active
}) => {
  // Check if this route is active by comparing with current location
  const isActive = window.location.pathname === route;
  
  return (
    <Link
      to={route}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group",
        isActive || active
          ? "bg-primary/20 text-primary" 
          : "hover:bg-primary/10 text-foreground"
      )}
    >
      <span className="relative">
        {icon}
        {(isActive || active) && (
          <span className="absolute -inset-1 rounded-full animate-pulse opacity-70 bg-primary/30 -z-10"></span>
        )}
      </span>
      {!collapsed && (
        <span className="font-medium transition-all duration-300">{label}</span>
      )}
    </Link>
  );
};

export default Sidebar;
