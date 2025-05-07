
import React, { useState } from 'react';
import { Card } from "../ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// Dados simulados da linha do tempo
const timelineData = [
  { time: '08:00', rupturaLevel: 3.2, replenishment: 0 },
  { time: '09:00', rupturaLevel: 3.5, replenishment: 0 },
  { time: '10:00', rupturaLevel: 4.1, replenishment: 0 },
  { time: '11:00', rupturaLevel: 4.8, replenishment: 0 },
  { time: '12:00', rupturaLevel: 5.2, replenishment: 1 },
  { time: '13:00', rupturaLevel: 3.9, replenishment: 0 },
  { time: '14:00', rupturaLevel: 4.3, replenishment: 0 },
  { time: '15:00', rupturaLevel: 4.9, replenishment: 0 },
  { time: '16:00', rupturaLevel: 5.5, replenishment: 1 },
  { time: '17:00', rupturaLevel: 4.2, replenishment: 0 },
  { time: '18:00', rupturaLevel: 4.6, replenishment: 0 },
  { time: '19:00', rupturaLevel: 5.0, replenishment: 0 },
  { time: '20:00', rupturaLevel: 5.7, replenishment: 1 },
  { time: '21:00', rupturaLevel: 4.5, replenishment: 0 },
  { time: '22:00', rupturaLevel: 4.1, replenishment: 0 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-3 border border-gray-700 rounded shadow-md">
        <p className="text-white font-medium">{`Horário: ${label}`}</p>
        <p className="text-purple-400">{`Índice de Ruptura: ${payload[0].value.toFixed(1)}%`}</p>
        {payload[0].payload.replenishment > 0 && (
          <p className="text-green-400">Reposição realizada</p>
        )}
      </div>
    );
  }

  return null;
};

const TimelineChart = () => {
  const [selectedTime, setSelectedTime] = useState('15:00');
  
  // Encontrando o dado do horário selecionado
  const selectedData = timelineData.find(item => item.time === selectedTime);
  
  return (
    <Card className="p-4 w-full bg-gray-900 border-gray-800">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-white">Linha do Tempo</h3>
            <p className="text-xs text-gray-400">Evolução de ruptura durante o dia</p>
          </div>
          <div>
            <select 
              className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-1 text-sm"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {timelineData.map(item => (
                <option key={item.time} value={item.time}>
                  {item.time}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={timelineData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="time" stroke="#ccc" />
              <YAxis domain={[0, 8]} label={{ value: '% Ruptura', position: 'insideLeft', angle: -90, style: { textAnchor: 'middle', fill: '#ccc' } }} stroke="#ccc" />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="rupturaLevel" 
                stroke="#8b5cf6" 
                strokeWidth={2} 
                dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 4, fill: '#222' }} 
                activeDot={{ r: 6, fill: '#8b5cf6' }} 
              />
              {/* Linhas verticais para eventos de reposição */}
              {timelineData
                .filter(data => data.replenishment > 0)
                .map((data, index) => (
                  <ReferenceLine 
                    key={index} 
                    x={data.time} 
                    stroke="rgba(74, 222, 128, 0.5)" 
                    strokeDasharray="3 3" 
                    label={{ 
                      value: 'Reposição', 
                      position: 'insideTopRight', 
                      fill: '#4ade80', 
                      fontSize: 10 
                    }} 
                  />
                ))
              }
              {/* Linha vertical para o tempo selecionado */}
              <ReferenceLine 
                x={selectedTime} 
                stroke="#fff" 
                strokeWidth={1} 
              />
              {/* Linha horizontal para nível crítico */}
              <ReferenceLine 
                y={5} 
                stroke="rgba(239, 68, 68, 0.5)" 
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Nível Crítico', 
                  position: 'right', 
                  fill: '#ef4444', 
                  fontSize: 10 
                }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {selectedData && (
          <div className="mt-4 p-3 bg-gray-800 rounded-md">
            <h4 className="text-white font-medium mb-2">Detalhes às {selectedTime}</h4>
            <div className="flex space-x-6 text-sm">
              <div>
                <span className="text-gray-400">Índice de Ruptura:</span>
                <span className="ml-2 text-white">{selectedData.rupturaLevel.toFixed(1)}%</span>
              </div>
              <div>
                <span className="text-gray-400">Status:</span>
                <span className={`ml-2 ${selectedData.rupturaLevel >= 5 ? 'text-red-400' : 'text-yellow-400'}`}>
                  {selectedData.rupturaLevel >= 5 ? 'Crítico' : 'Atenção'}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Ação:</span>
                <span className={`ml-2 ${selectedData.replenishment > 0 ? 'text-green-400' : 'text-gray-400'}`}>
                  {selectedData.replenishment > 0 ? 'Reposição realizada' : 'Aguardando reposição'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TimelineChart;
