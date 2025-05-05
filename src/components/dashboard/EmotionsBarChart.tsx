
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Neutro", value: 45 },
  { name: "Feliz", value: 28 },
  { name: "Surpreso", value: 10 },
  { name: "Triste", value: 8 },
  { name: "Irritado", value: 5 },
  { name: "Medo", value: 4 }
];

const EmotionsBarChart = () => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 20,
          }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            type="number"
            tickFormatter={(value) => `${value}%`}
            axisLine={false}
            tickLine={false} 
            tick={{ fill: "rgba(255,255,255,0.7)" }}
          />
          <YAxis 
            dataKey="name" 
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.7)" }}
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Percentual']}
            contentStyle={{ 
              backgroundColor: 'rgba(26, 31, 44, 0.9)', 
              border: 'none',
              borderRadius: '8px',
              color: '#fff' 
            }}
          />
          <Legend />
          <Bar 
            dataKey="value" 
            name="Percentual" 
            radius={[0, 4, 4, 0]} 
            fill="url(#colorGradient3)" 
          />
          <defs>
            <linearGradient id="colorGradient3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9b87f5" stopOpacity={1} />
              <stop offset="100%" stopColor="#D946EF" stopOpacity={1} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionsBarChart;
