
import React from "react";
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
  const [selectedProfile, setSelectedProfile] = React.useState('gerente');
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-led-background">
      {/* Animated background with gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none z-0"></div>
      
      {/* Floating orbs for visual effect */}
      <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-led-purple/10 blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-led-pink/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-1.5s"}}></div>
      <div className="absolute top-2/3 right-1/4 w-20 h-20 rounded-full bg-led-orange/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-2.5s"}}></div>
      
      <main className="relative z-10 p-6 w-full">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-2xl font-bold mb-2 bg-led-gradient-3 bg-clip-text text-transparent">Dashboard de Ruptura</h1>
          <p className="text-white/70">Monitoramento em tempo real de rupturas de estoque</p>
        </div>
        
        <div className="mb-6 flex justify-end">
          <select
            value={selectedProfile}
            onChange={(e) => setSelectedProfile(e.target.value)}
            className="bg-led-dark text-white border border-led-purple/20 rounded-lg px-3 py-2 shadow-lg"
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
  );
};

export default Ruptura;
