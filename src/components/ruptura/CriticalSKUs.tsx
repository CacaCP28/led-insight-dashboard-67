
import React from 'react';
import { Card } from "../ui/card";

type SKUData = {
  id: string;
  name: string;
  category: string;
  outOfStock: number; // em minutos
  impact: number; // em R$
  priority: 'high' | 'medium' | 'low';
};

const criticalSKUsData: SKUData[] = [
  { id: 'SKU001', name: 'Arroz Tipo 1 Marca X', category: 'Mercearia', outOfStock: 120, impact: 1450, priority: 'high' },
  { id: 'SKU002', name: 'Leite UHT Integral Marca Y', category: 'Laticínios', outOfStock: 85, impact: 980, priority: 'high' },
  { id: 'SKU003', name: 'Sabão em Pó Marca Z', category: 'Limpeza', outOfStock: 140, impact: 745, priority: 'high' },
  { id: 'SKU004', name: 'Refrigerante Cola 2L', category: 'Bebidas', outOfStock: 60, impact: 690, priority: 'medium' },
  { id: 'SKU005', name: 'Papel Higiênico 12un', category: 'Higiene', outOfStock: 105, impact: 620, priority: 'medium' },
  { id: 'SKU006', name: 'Café Torrado Marca A', category: 'Mercearia', outOfStock: 55, impact: 540, priority: 'medium' }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-900 text-red-400';
    case 'medium': return 'bg-yellow-900 text-yellow-400';
    case 'low': return 'bg-green-900 text-green-400';
    default: return 'bg-gray-900 text-gray-400';
  }
};

const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h${mins > 0 ? ` ${mins}m` : ''}`;
  }
  
  return `${mins}m`;
};

const CriticalSKUs = () => {
  return (
    <Card className="p-4 w-full bg-gray-900 border border-purple-500/30 rounded-xl shadow-lg shadow-purple-500/10">
      <div className="flex flex-col h-full">
        <div className="mb-3">
          <h3 className="font-bold text-white">SKUs Críticos</h3>
          <p className="text-xs text-gray-400">Produtos com maior tempo em ruptura e impacto financeiro</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-800">
                <th className="px-3 py-2">Produto</th>
                <th className="px-3 py-2">Categoria</th>
                <th className="px-3 py-2">Tempo em Ruptura</th>
                <th className="px-3 py-2">Impacto</th>
                <th className="px-3 py-2">Prioridade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {criticalSKUsData.map((sku) => (
                <tr key={sku.id} className="text-white hover:bg-gray-800">
                  <td className="px-3 py-3 font-medium">{sku.name}</td>
                  <td className="px-3 py-3 text-gray-400">{sku.category}</td>
                  <td className="px-3 py-3">{formatTime(sku.outOfStock)}</td>
                  <td className="px-3 py-3">R$ {sku.impact.toLocaleString('pt-BR')}</td>
                  <td className="px-3 py-3">
                    <span className={`${getPriorityColor(sku.priority)} text-xs px-2 py-1 rounded-full`}>
                      {sku.priority === 'high' ? 'Alta' : sku.priority === 'medium' ? 'Média' : 'Baixa'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default CriticalSKUs;
