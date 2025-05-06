
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Loiro", value: 18 },
  { name: "Castanho", value: 45 },
  { name: "Preto", value: 28 },
  { name: "Ruivo", value: 6 },
  { name: "Outros", value: 3 }
];

const HairColorBarChart = () => {
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
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffff" }}
          />
          <YAxis 
            tickFormatter={(value) => `${value}%`}
            axisLine={false}
            tickLine={false} 
            tick={{ fill: "#ffffff" }}
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
          <Legend 
            formatter={(value) => <span style={{ color: '#ffffff' }}>{value}</span>}
          />
          <Bar 
            dataKey="value" 
            name="Percentual" 
            radius={[4, 4, 0, 0]} 
            fill="url(#colorGradient)" 
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9b87f5" stopOpacity={1} />
              <stop offset="100%" stopColor="#D946EF" stopOpacity={1} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HairColorBarChart;
