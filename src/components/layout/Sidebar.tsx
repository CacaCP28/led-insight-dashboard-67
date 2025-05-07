
// Este componente foi substituído pelo CustomSidebar.tsx
// Mantido apenas para referência caso seja necessário
// As importações foram mantidas caso sejam necessárias em outro lugar

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart2, Users, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface SidebarProps {
  collapsed?: boolean;
  setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, setCollapsed }) => {
  // Componente obsoleto, substituído por CustomSidebar
  return null;
};

export default Sidebar;
