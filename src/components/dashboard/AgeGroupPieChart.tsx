
import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useFilters } from "@/contexts/FilterContext";
import { format } from "date-fns";

// Base data
const baseData = [
  { name: "18-24", value: 15 },
  { name: "25-34", value: 32 },
  { name: "35-44", value: 28 },
  { name: "45-54", value: 18 },
  { name: "55+", value: 7 }
];

// Data for different days (just for simulation)
const alternativeData = {
  "2025-05-06": [
    { name: "18-24", value: 20 },
    { name: "25-34", value: 25 },
    { name: "35-44", value: 30 },
    { name: "45-54", value: 15 },
    { name: "55+", value: 10 }
  ],
  "2025-05-05": [
    { name: "18-24", value: 12 },
    { name: "25-34", value: 38 },
    { name: "35-44", value: 25 },
    { name: "45-54", value: 20 },
    { name: "55+", value: 5 }
  ],
  // Add more dates if needed
};

const COLORS = ["#9b87f5", "#8064e8", "#6E59A5", "#D946EF", "#c639d8"];

const AgeGroupPieChart = () => {
  const { date, dateRange, dateFilterType, filtersApplied } = useFilters();

  // Generate synthetic data based on selected date
  const data = useMemo(() => {
    const dateKey = format(date, "yyyy-MM-dd");
    
    // Check if we have predefined data for this date
    if (dateFilterType === "single" && alternativeData[dateKey]) {
      return alternativeData[dateKey];
    }
    
    // If it's a range, calculate an average or use special data
    if (dateFilterType === "range" && dateRange.from && dateRange.to) {
      // For demo purposes, just use different data for ranges
      return [
        { name: "18-24", value: 18 },
        { name: "25-34", value: 30 },
        { name: "35-44", value: 26 },
        { name: "45-54", value: 15 },
        { name: "55+", value: 11 }
      ];
    }
    
    // Default to base data
    return baseData;
  }, [date, dateRange, dateFilterType, filtersApplied]); // Include filtersApplied to force re-render

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

export default AgeGroupPieChart;
