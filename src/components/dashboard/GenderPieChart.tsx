
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Masculino", value: 58 },
  { name: "Feminino", value: 42 }
];

const COLORS = ["#9b87f5", "#D946EF"];

const GenderPieChart = () => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Percentual']}
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderPieChart;
