
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "18-24", value: 15 },
  { name: "25-34", value: 32 },
  { name: "35-44", value: 28 },
  { name: "45-54", value: 18 },
  { name: "55+", value: 7 }
];

const COLORS = ["#9b87f5", "#8064e8", "#6E59A5", "#D946EF", "#c639d8"];

const AgeGroupPieChart = () => {
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180;
    // Positioning the label inside the pie to ensure it stays within bounds
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#ffffff" 
        textAnchor="middle" 
        dominantBaseline="central"
        fontSize="10"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                className="hover-scale transition-all duration-300"
              />
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
          />
          <Legend 
            formatter={(value) => <span style={{ color: '#ffffff' }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgeGroupPieChart;
