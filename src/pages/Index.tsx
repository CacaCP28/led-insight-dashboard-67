import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import DeviceFilter from "@/components/filters/DeviceFilter";
import StatsCard from "@/components/dashboard/StatsCard";
import ChartCard from "@/components/dashboard/ChartCard";
import GenderPieChart from "@/components/dashboard/GenderPieChart";
import AgeGroupPieChart from "@/components/dashboard/AgeGroupPieChart";
import HairColorBarChart from "@/components/dashboard/HairColorBarChart";
import BeardTypeBarChart from "@/components/dashboard/BeardTypeBarChart";
import EmotionsBarChart from "@/components/dashboard/EmotionsBarChart";
import TimelineChart from "@/components/dashboard/TimelineChart";
import GenderAgeComparisonChart from "@/components/dashboard/GenderAgeComparisonChart";
import { FilterProvider, useFilters } from "@/contexts/FilterContext";
import { useIsMobile } from "@/hooks/use-mobile";

import { Users, Handshake, Clock, PieChart } from "lucide-react";

// Stats cards section as a separate component using the context
const StatsSection = () => {
  const { currentStats } = useFilters();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
        <StatsCard
          title="Total de Visitantes"
          value={currentStats.totalVisitors.value}
          icon={Users}
          trend={currentStats.totalVisitors.trend}
        />
      </div>
      <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
        <StatsCard
          title="Total de Contatos"
          value={currentStats.totalContacts.value}
          icon={Handshake}
          trend={currentStats.totalContacts.trend}
        />
      </div>
      <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
        <StatsCard
          title="Tempo Médio de Permanência"
          value={currentStats.averageTime.value}
          icon={Clock}
          trend={currentStats.averageTime.trend}
        />
      </div>
    </div>
  );
};

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };
  
  return (
    <FilterProvider>
      <div className="flex min-h-screen bg-led-dark overflow-hidden">
        {/* Animated background with floating particles */}
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none z-0"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-led-purple/10 blur-3xl animate-float pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-led-pink/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-1.5s"}}></div>
        <div className="absolute top-2/3 right-1/4 w-20 h-20 rounded-full bg-led-orange/10 blur-3xl animate-float pointer-events-none" style={{animationDelay: "-2.5s"}}></div>
        
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        
        <div className={`flex-1 transition-all duration-300 ${
          isMobile ? "" : (sidebarCollapsed ? "ml-20" : "ml-64")
        }`}>
          <Header sidebarCollapsed={sidebarCollapsed} title="Dashboard" toggleSidebar={toggleSidebar} />
          
          <main className="p-6">
            <div className="mb-6 animate-fade-in">
              <h1 className="text-2xl font-bold mb-2 bg-led-gradient-3 bg-clip-text text-transparent">Dashboard Analytics</h1>
              <p className="text-white/70">Monitoramento em tempo real de visitantes</p>
            </div>
            
            <DeviceFilter />
            
            {/* Using the stats section component */}
            <StatsSection />
            
            {/* New Gender and Age Comparison Chart */}
            <div className="mb-6 animate-fade-in" style={{animationDelay: "0.35s"}}>
              <ChartCard title="Comparação de Gênero por Faixa Etária">
                <GenderAgeComparisonChart />
              </ChartCard>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
                <ChartCard title="Distribuição por Gênero">
                  <GenderPieChart />
                </ChartCard>
              </div>
              <div className="animate-fade-in" style={{animationDelay: "0.5s"}}>
                <ChartCard title="Distribuição por Faixa Etária">
                  <AgeGroupPieChart />
                </ChartCard>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="animate-fade-in" style={{animationDelay: "0.6s"}}>
                <ChartCard title="Cor do Cabelo">
                  <HairColorBarChart />
                </ChartCard>
              </div>
              <div className="animate-fade-in" style={{animationDelay: "0.7s"}}>
                <ChartCard title="Tipos de Barba">
                  <BeardTypeBarChart />
                </ChartCard>
              </div>
              <div className="animate-fade-in" style={{animationDelay: "0.8s"}}>
                <ChartCard title="Emoções Detectadas">
                  <EmotionsBarChart />
                </ChartCard>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.9s"}}>
              <ChartCard title="Fluxo de Visitantes ao Longo do Dia">
                <TimelineChart />
              </ChartCard>
            </div>
          </main>
        </div>
      </div>
    </FilterProvider>
  );
};

export default Index;
