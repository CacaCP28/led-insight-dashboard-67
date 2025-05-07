
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ChartCard from "@/components/dashboard/ChartCard";
import { RouteFlow } from "@/components/journey/RouteFlow";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomerJourney = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-led-dark overflow-hidden relative">
      {/* Animated background with floating particles */}
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none z-0"></div>
      
      {/* Floating orbs - animated elements */}
      <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-led-purple/10 blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-led-pink/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-1.5s"}}></div>
      <div className="absolute top-2/3 right-1/4 w-20 h-20 rounded-full bg-led-orange/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-2.5s"}}></div>
      
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className={`flex-1 transition-all duration-300 relative z-10 ${
        isMobile ? "" : (sidebarCollapsed ? "ml-20" : "ml-64")
      }`}>
        <Header sidebarCollapsed={sidebarCollapsed} />
        
        <main className="p-6">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-2xl font-bold mb-2 bg-led-gradient-3 bg-clip-text text-transparent">Jornada do Cliente</h1>
            <p className="text-white/70">Visualização do fluxo de visitantes pela loja</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="animate-fade-in">
              <ChartCard title="Fluxo de Visitantes pelos Ambientes" className="h-[70vh] relative overflow-hidden">
                {/* Floor plan background image - updated to use the new image */}
                <div className="absolute inset-0 w-full h-full opacity-40 z-0">
                  <img 
                    src="/lovable-uploads/2de4d3ee-9bb2-4863-b631-14fb33780f8d.png" 
                    alt="Planta do estabelecimento com pontos mapeados" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Flow chart overlay */}
                <div className="relative z-10 w-full h-full">
                  <RouteFlow />
                </div>
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
                <div className="led-card p-5 gradient-border hover-lift">
                  <h3 className="text-sm font-medium text-white text-glow mb-2">Área Mais Visitada</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-led-purple/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-led-purple/50 flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold">LW</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white/70 text-xs">LED Workstation</p>
                      <p className="text-white text-lg font-bold">520 visitantes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
                <div className="led-card p-5 gradient-border hover-lift">
                  <h3 className="text-sm font-medium text-white text-glow mb-2">Tempo Médio por Área</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-led-orange/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-led-orange/50 flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold">12m</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white/70 text-xs">Tempo médio</p>
                      <p className="text-white text-lg font-bold">+15% que semana passada</p>
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
                      <p className="text-white/70 text-xs">Visitante → Cliente</p>
                      <p className="text-white text-lg font-bold">+8% que meta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="led-card p-5 gradient-border">
                <h3 className="text-sm font-medium text-white text-glow mb-3">Detalhes da Visualização</h3>
                <p className="text-white/80 text-sm mb-2">
                  O fluxograma acima representa o movimento dos clientes pelos diferentes equipamentos e instalações LED. 
                  Cada nó mostra um ponto específico do projeto com o número de visitantes registrados.
                </p>
                <p className="text-white/80 text-sm">
                  As linhas animadas indicam o caminho mais comum seguido pelos visitantes, com a espessura 
                  representando o volume de tráfego entre as áreas.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerJourney;
