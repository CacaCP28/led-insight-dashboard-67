
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import DeviceFilter from "@/components/filters/DeviceFilter";
import StatsCard from "@/components/dashboard/StatsCard";
import ChartCard from "@/components/dashboard/ChartCard";
import GenderPieChart from "@/components/dashboard/GenderPieChart";
import AgeGroupPieChart from "@/components/dashboard/AgeGroupPieChart";
import HairColorBarChart from "@/components/dashboard/HairColorBarChart";
import BeardTypeBarChart from "@/components/dashboard/BeardTypeBarChart";
import EmotionsBarChart from "@/components/dashboard/EmotionsBarChart";
import TimelineChart from "@/components/dashboard/TimelineChart";

import { Users, Handshake, Clock, PieChart } from "lucide-react";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-led-dark">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className={`flex-1 transition-all duration-300 ${
        sidebarCollapsed ? "ml-20" : "ml-64"
      }`}>
        <Header sidebarCollapsed={sidebarCollapsed} />
        
        <main className="p-6">
          <DeviceFilter />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <StatsCard
              title="Total de Visitantes"
              value="1,248"
              icon={Users}
              trend={{ value: 12, isPositive: true }}
            />
            <StatsCard
              title="Total de Contatos"
              value="532"
              icon={Handshake}
              trend={{ value: 8, isPositive: true }}
            />
            <StatsCard
              title="Tempo Médio de Permanência"
              value="14 min"
              icon={Clock}
              trend={{ value: 5, isPositive: false }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ChartCard title="Distribuição por Gênero">
              <GenderPieChart />
            </ChartCard>
            <ChartCard title="Distribuição por Faixa Etária">
              <AgeGroupPieChart />
            </ChartCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ChartCard title="Cor do Cabelo">
              <HairColorBarChart />
            </ChartCard>
            <ChartCard title="Tipos de Barba">
              <BeardTypeBarChart />
            </ChartCard>
            <ChartCard title="Emoções Detectadas">
              <EmotionsBarChart />
            </ChartCard>
          </div>
          
          <ChartCard title="Fluxo de Visitantes ao Longo do Dia">
            <TimelineChart />
          </ChartCard>
        </main>
      </div>
    </div>
  );
};

export default Index;
