
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ChartCard from "@/components/dashboard/ChartCard";
import { RouteFlow } from "@/components/journey/RouteFlow";

const CustomerJourney = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-led-dark overflow-hidden relative">
      {/* Animated background with floating particles */}
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none z-0"></div>
      
      {/* Floating orbs - animated elements the user requested */}
      <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-led-purple/10 blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-led-pink/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-1.5s"}}></div>
      <div className="absolute top-2/3 right-1/4 w-20 h-20 rounded-full bg-led-orange/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-2.5s"}}></div>
      
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className={`flex-1 transition-all duration-300 relative z-10 ${
        sidebarCollapsed ? "ml-20" : "ml-64"
      }`}>
        <Header sidebarCollapsed={sidebarCollapsed} />
        
        <main className="p-6">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-2xl font-bold mb-2 bg-led-gradient-3 bg-clip-text text-transparent">Jornada do Cliente</h1>
            <p className="text-white/70">Visualização do fluxo de visitantes pela loja</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="animate-fade-in">
              <ChartCard title="Fluxo de Visitantes pelos Dispositivos" className="h-[70vh]">
                <RouteFlow />
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
                <div className="led-card p-5 gradient-border hover-lift">
                  <h3 className="text-sm font-medium text-white text-glow mb-2">Dispositivo Mais Visitado</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-led-purple/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-led-purple/50 flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold">D3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white/70 text-xs">Vitrine Principal</p>
                      <p className="text-white text-lg font-bold">468 visitantes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
                <div className="led-card p-5 gradient-border hover-lift">
                  <h3 className="text-sm font-medium text-white text-glow mb-2">Tempo Médio por Dispositivo</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-led-orange/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-led-orange/50 flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold">8m</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white/70 text-xs">Tempo médio</p>
                      <p className="text-white text-lg font-bold">+12% que semana passada</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{animationDelay: "0.5s"}}>
                <div className="led-card p-5 gradient-border hover-lift">
                  <h3 className="text-sm font-medium text-white text-glow mb-2">Taxa de Conversão</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-led-pink/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-led-pink/50 flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold">24%</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white/70 text-xs">Dispositivo → Venda</p>
                      <p className="text-white text-lg font-bold">+5% que meta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerJourney;
