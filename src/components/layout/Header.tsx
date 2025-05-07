
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

const Header: React.FC = () => {
  const today = new Date();
  const formattedDate = format(today, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-border/30 transition-all duration-300 ease-in-out sticky top-0 z-10 backdrop-blur-sm bg-led-dark/80">
      <div className="flex items-center">
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2"
          >
            <Menu size={20} />
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
            <div className="hidden sm:flex items-center text-muted-foreground">
              <CalendarIcon size={18} className="mr-2 animate-pulse" />
              <span>{formattedDate}</span>
            </div>
          </>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-muted-foreground">Online</span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 group">
              <div className="size-7 rounded-full bg-gradient-to-br from-led-purple to-led-pink flex items-center justify-center overflow-hidden">
                <User size={16} className="text-white" />
              </div>
              <span className="hidden sm:inline">Ana Silva</span>
              <ChevronDown size={16} className="group-data-[state=open]:rotate-180 transition-transform duration-200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 animate-fade-in">
            <DropdownMenuItem>
              <User size={16} className="mr-2" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">
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
