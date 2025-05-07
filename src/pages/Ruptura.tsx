
import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import RupturaKPIs from "../components/ruptura/RupturaKPIs";
import StoreHeatmap from "../components/ruptura/StoreHeatmap";
import Gondola3D from "../components/ruptura/Gondola3D";
import FinancialImpact from "../components/ruptura/FinancialImpact";
import TimelineChart from "../components/ruptura/TimelineChart";
import CriticalSKUs from "../components/ruptura/CriticalSKUs";
import AssistantChat from "../components/ruptura/AssistantChat";
import { useIsMobile } from "@/hooks/use-mobile";

// Opções do filtro de perfil
const profileOptions = [
  { value: 'gerente', label: 'Gerente' },
  { value: 'diretor', label: 'Diretor' },
  { value: 'repositor', label: 'Repositor' }
];

const Ruptura = () => {
  const [selectedProfile, setSelectedProfile] = useState('gerente');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen bg-led-dark overflow-hidden relative">
      {/* Animated background with floating particles */}
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none z-0"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-led-purple/10 blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-led-pink/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-1.5s"}}></div>
      <div className="absolute top-2/3 right-1/4 w-20 h-20 rounded-full bg-led-orange/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-2.5s"}}></div>
      
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className={`flex-1 transition-all duration-300 relative z-10 ${
        isMobile ? "" : (sidebarCollapsed ? "ml-20" : "ml-64")
      }`}>
        <Header sidebarCollapsed={sidebarCollapsed} title="Ruptura" />
        
        <main className="p-6">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-2xl font-bold mb-2 bg-led-gradient-3 bg-clip-text text-transparent">Dashboard de Ruptura</h1>
            <p className="text-white/70">Monitoramento em tempo real de rupturas de estoque</p>
          </div>
          
          <div className="mb-6 flex justify-end">
            <select
              value={selectedProfile}
              onChange={(e) => setSelectedProfile(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2"
            >
              {profileOptions.map(option => (
                <option key={option.value} value={option.value}>
                  Perfil: {option.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* KPIs */}
          <div className="mb-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <RupturaKPIs />
          </div>
          
          {/* Primeira linha de gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <StoreHeatmap />
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <Gondola3D />
            </div>
          </div>
          
          {/* Segunda linha de gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
              <FinancialImpact />
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.5s"}}>
              <TimelineChart />
            </div>
          </div>
          
          {/* Terceira linha de gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="animate-fade-in" style={{animationDelay: "0.6s"}}>
              <CriticalSKUs />
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.7s"}}>
              <AssistantChat />
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-xs mt-4 mb-8">
            Última atualização: {new Date().toLocaleString('pt-BR')}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Ruptura;
