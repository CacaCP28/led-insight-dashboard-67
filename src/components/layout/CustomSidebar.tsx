
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutGrid, 
  Users, 
  BarChart3, 
  HardDrive, 
  Settings
} from "lucide-react";

const CustomSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutGrid size={20} />,
      path: "/",
      activeBackground: "bg-purple-900/40"
    },
    {
      title: "Jornada do Cliente",
      icon: <Users size={20} />,
      path: "/customer-journey",
      activeBackground: "bg-purple-900/40"
    },
    {
      title: "Ruptura",
      icon: <BarChart3 size={20} />,
      path: "/ruptura",
      activeBackground: "bg-purple-900/40"
    },
    {
      title: "Relatórios",
      icon: <BarChart3 size={20} />,
      path: "/reports",
      activeBackground: "bg-purple-900/40"
    },
    {
      title: "Dispositivos",
      icon: <HardDrive size={20} />,
      path: "/devices",
      activeBackground: "bg-purple-900/40"
    },
    {
      title: "Configurações",
      icon: <Settings size={20} />,
      path: "/settings",
      activeBackground: "bg-purple-900/40"
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#1A1F2C] text-white w-[240px] min-w-[240px]">
      {/* Logo Area */}
      <div className="p-4 mb-6 mt-2">
        <div className="flex flex-col items-center mb-2">
          <img 
            src="/lovable-uploads/d7ba8bb0-950e-4bbd-b353-48a4fd72f72a.png" 
            alt="THE LED Logo" 
            className="w-full max-w-[180px] mb-2" 
          />
          <div className="text-xs text-gray-400 text-center">INFINITAS POSSIBILIDADES</div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1">
        <nav>
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-md transition-all ${
                      isActive
                        ? `${item.activeBackground} text-purple-300`
                        : "text-gray-300 hover:bg-purple-900/20"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 mt-auto">
        <div className="bg-[#323a52] rounded-md p-2 flex items-center">
          <span className="text-xs text-purple-300 mr-1">Desenvolvido por</span>
          <span className="text-white font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent px-1">
            GlobalAI
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;
