
import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, ChevronDown, LogOut, Menu, User } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  title?: string;
  sidebarCollapsed?: boolean;
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  sidebarCollapsed, 
  toggleSidebar 
}) => {
  const today = new Date();
  const formattedDate = format(today, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-white/5 transition-all duration-300 ease-in-out sticky top-0 z-10 backdrop-blur-sm bg-led-dark/80">
      <div className="flex items-center">
        {toggleSidebar && isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 text-white hover:bg-white/10 hover:text-led-purple"
            onClick={toggleSidebar}
          >
            <Menu size={24} className="text-glow" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}
        
        {isMobile && (
          <div className="flex items-center mr-4">
            <h1 className="text-2xl sm:text-3xl font-bold bg-led-gradient-3 bg-clip-text text-transparent animate-fade-in">THE LED</h1>
          </div>
        )}
        {!isMobile && (
          <>
            <div className="flex items-center mr-6">
              <h1 className="text-3xl font-bold bg-led-gradient-3 bg-clip-text text-transparent animate-fade-in">
                THE LED
              </h1>
            </div>
            <div className="hidden sm:flex items-center text-white/70">
              <CalendarIcon size={18} className="mr-2 animate-pulse text-led-purple" />
              <span>{formattedDate}</span>
            </div>
          </>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-white/70">Online</span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 group border border-white/10 bg-white/5 hover:bg-white/10">
              <div className="size-7 rounded-full bg-gradient-to-br from-led-purple to-led-pink flex items-center justify-center overflow-hidden">
                <User size={16} className="text-white" />
              </div>
              <span className="hidden sm:inline text-white">Ana Silva</span>
              <ChevronDown size={16} className="text-white/70 group-data-[state=open]:rotate-180 transition-transform duration-200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 animate-fade-in bg-led-dark border border-white/10 text-white">
            <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
              <User size={16} className="mr-2" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="text-red-500 hover:bg-white/10 focus:bg-white/10">
              <LogOut size={16} className="mr-2" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
