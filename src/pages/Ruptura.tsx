
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

// Opções do filtro de perfil
const profileOptions = [
  { value: 'gerente', label: 'Gerente' },
  { value: 'diretor', label: 'Diretor' },
  { value: 'repositor', label: 'Repositor' }
];

const Ruptura = () => {
  const [selectedProfile, setSelectedProfile] = useState('gerente');
  
  return (
    <div className="flex h-screen overflow-hidden bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Ruptura" />
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Dashboard de Ruptura</h1>
            <div>
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
          </div>
          
          {/* KPIs */}
          <div className="mb-6">
            <RupturaKPIs />
          </div>
          
          {/* Primeira linha de gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <StoreHeatmap />
            <Gondola3D />
          </div>
          
          {/* Segunda linha de gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <FinancialImpact />
            <TimelineChart />
          </div>
          
          {/* Terceira linha de gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <CriticalSKUs />
            <AssistantChat />
          </div>
          
          <div className="text-center text-gray-500 text-xs mt-4 mb-8">
            Última atualização: {new Date().toLocaleString('pt-BR')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ruptura;
