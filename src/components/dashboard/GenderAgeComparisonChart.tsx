
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '18-24', masculino: 120, feminino: 150 },
  { name: '25-34', masculino: 180, feminino: 160 },
  { name: '35-44', masculino: 220, feminino: 140 },
  { name: '45-54', masculino: 160, feminino: 120 },
  { name: '55-64', masculino: 100, feminino: 80 },
  { name: '65+', masculino: 60, feminino: 40 }
];

const GenderAgeComparisonChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.1} />
          <XAxis 
            dataKey="name" 
            stroke="#9b87f5" 
            tick={{fill: '#ffffff'}} 
          />
          <YAxis 
            stroke="#9b87f5" 
            tick={{fill: '#ffffff'}}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: 'rgba(26, 31, 44, 0.9)', 
              border: 'none',
              borderRadius: '8px',
              color: '#fff' 
            }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend 
            formatter={(value) => <span style={{ color: '#ffffff' }}>{value}</span>}
          />
          <Bar dataKey="masculino" name="Masculino" fill="#9b87f5" radius={[4, 4, 0, 0]} />
          <Bar dataKey="feminino" name="Feminino" fill="#D946EF" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderAgeComparisonChart;
