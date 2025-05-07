
import React from 'react';
import { TrendingUp, TrendingDown, Clock, AlertTriangle } from "lucide-react";
import StatsCard from "../dashboard/StatsCard";

const RupturaKPIs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Índice de Ruptura"
        value="4.6%"
        icon={AlertTriangle}
        trend={{
          value: 0.8,
          isPositive: true
        }}
      />
      <StatsCard
        title="Tempo Médio p/ Reposição"
        value="37 min"
        icon={Clock}
        trend={{
          value: 5,
          isPositive: false
        }}
      />
      <StatsCard
        title="SKUs em Ruptura"
        value="78"
        icon={AlertTriangle}
        trend={{
          value: 12,
          isPositive: true
        }}
      />
      <StatsCard
        title="Perda Estimada (Hoje)"
        value="R$ 8.720"
        icon={TrendingDown}
        trend={{
          value: 1450,
          isPositive: false
        }}
      />
    </div>
  );
};

export default RupturaKPIs;
