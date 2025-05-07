
import React from 'react';
import { Card } from "../ui/card";
import { TrendingUp, TrendingDown, Clock, AlertTriangle } from "lucide-react";

const RupturaKPI = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  positive = true 
}: { 
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  positive?: boolean;
}) => {
  return (
    <Card className="p-4 bg-gray-900 border-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h3 className="text-white text-2xl font-bold mt-1">{value}</h3>
          <div className={`flex items-center mt-2 ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {positive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
        <div className="bg-purple-900 bg-opacity-30 p-3 rounded-full">
          <Icon size={24} className="text-purple-400" />
        </div>
      </div>
    </Card>
  );
};

const RupturaKPIs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <RupturaKPI
        title="Índice de Ruptura"
        value="4.6%"
        change="Redução de 0.8%"
        icon={AlertTriangle}
        positive={true}
      />
      <RupturaKPI
        title="Tempo Médio p/ Reposição"
        value="37 min"
        change="Aumento de 5 min"
        icon={Clock}
        positive={false}
      />
      <RupturaKPI
        title="SKUs em Ruptura"
        value="78"
        change="Redução de 12"
        icon={AlertTriangle}
        positive={true}
      />
      <RupturaKPI
        title="Perda Estimada (Hoje)"
        value="R$ 8.720"
        change="Aumento de R$ 1.450"
        icon={TrendingDown}
        positive={false}
      />
    </div>
  );
};

export default RupturaKPIs;
