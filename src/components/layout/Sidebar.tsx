
import React from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  HardDrive, 
  Settings,
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
            <span className="text-xl font-bold tracking-tight led-gradient-text">THE LED</span>
          )}
          {collapsed && (
            <span className="text-xl font-bold tracking-tight led-gradient-text">LED</span>
          )}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
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
          active={true}
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
        <div className={cn(
          "flex items-center p-2 rounded-lg bg-led-gradient-1 text-white font-medium transition-all",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {collapsed ? (
            <img 
              src="/lovable-uploads/298f42a6-421f-420f-95a8-246670d2cd86.png" 
              alt="Global IA Logo" 
              className="h-8 w-auto"
            />
          ) : (
            <>
              <span className="text-sm">Desenvolvido por</span>
              <img 
                src="/lovable-uploads/298f42a6-421f-420f-95a8-246670d2cd86.png" 
                alt="Global IA Logo" 
                className="h-7 w-auto ml-2"
              />
            </>
          )}
        </div>
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
  return (
    <Link
      to={route}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg transition-colors duration-200",
        active 
          ? "bg-primary/20 text-primary" 
          : "hover:bg-primary/10 text-foreground"
      )}
    >
      <span>{icon}</span>
      {!collapsed && <span className="font-medium">{label}</span>}
    </Link>
  );
};

export default Sidebar;
