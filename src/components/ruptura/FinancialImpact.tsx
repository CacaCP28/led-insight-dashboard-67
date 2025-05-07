
import React from 'react';
import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dados simulados de impacto financeiro
const financialData = [
  { name: 'Seg', lost: 12400, potential: 15000 },
  { name: 'Ter', lost: 15600, potential: 18200 },
  { name: 'Qua', lost: 9800, potential: 11500 },
  { name: 'Qui', lost: 14300, potential: 16800 },
  { name: 'Sex', lost: 18900, potential: 22000 },
  { name: 'Sáb', lost: 23500, potential: 27000 },
  { name: 'Dom', lost: 16700, potential: 19500 },
];

const formatCurrency = (value: number) => {
  return `R$ ${value.toLocaleString('pt-BR')}`;
};

const FinancialImpact = () => {
  const totalLost = financialData.reduce((sum, item) => sum + item.lost, 0);
  
  return (
    <Card className="p-4 w-full bg-gray-900 border-gray-800">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-white">Impacto Financeiro</h3>
            <p className="text-xs text-gray-400">Vendas perdidas por ruptura na última semana</p>
          </div>
          <div className="bg-red-900 bg-opacity-30 px-3 py-1 rounded-full">
            <span className="text-red-400 font-bold text-sm">
              Total perdido: {formatCurrency(totalLost)}
            </span>
          </div>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={financialData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis tickFormatter={(value) => `R$${value/1000}k`} stroke="#ccc" />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                labelFormatter={(label) => `Dia: ${label}`}
                contentStyle={{ backgroundColor: '#222', border: '1px solid #444', borderRadius: '4px' }}
              />
              <Legend />
              <Bar dataKey="lost" name="Vendas Perdidas" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="potential" name="Potencial" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default FinancialImpact;
