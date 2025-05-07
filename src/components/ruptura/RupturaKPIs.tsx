
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
        className="bg-gradient-to-br from-amber-500/30 to-purple-500/30"
      />
      <StatsCard
        title="Tempo Médio p/ Reposição"
        value="37 min"
        icon={Clock}
        trend={{
          value: 5,
          isPositive: false
        }}
        className="bg-gradient-to-br from-orange-500/30 to-pink-500/30"
      />
      <StatsCard
        title="SKUs em Ruptura"
        value="78"
        icon={AlertTriangle}
        trend={{
          value: 12,
          isPositive: true
        }}
        className="bg-gradient-to-br from-red-500/30 to-purple-500/30"
      />
      <StatsCard
        title="Perda Estimada (Hoje)"
        value="R$ 8.720"
        icon={TrendingDown}
        trend={{
          value: 1450,
          isPositive: false
        }}
        className="bg-gradient-to-br from-red-500/30 to-orange-500/30"
      />
    </div>
  );
};

export default RupturaKPIs;
