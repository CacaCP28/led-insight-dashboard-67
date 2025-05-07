
import React, { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFilters } from "@/contexts/FilterContext";
import { format } from "date-fns";

// Base data
const baseData = [
  { name: '18-24', masculino: 120, feminino: 150 },
  { name: '25-34', masculino: 180, feminino: 160 },
  { name: '35-44', masculino: 220, feminino: 140 },
  { name: '45-54', masculino: 160, feminino: 120 },
  { name: '55-64', masculino: 100, feminino: 80 },
  { name: '65+', masculino: 60, feminino: 40 }
];

// Data for different days (just for simulation)
const alternativeData = {
  "2025-05-06": [
    { name: '18-24', masculino: 100, feminino: 170 },
    { name: '25-34', masculino: 150, feminino: 180 },
    { name: '35-44', masculino: 180, feminino: 160 },
    { name: '45-54', masculino: 140, feminino: 130 },
    { name: '55-64', masculino: 80, feminino: 90 },
    { name: '65+', masculino: 50, feminino: 60 }
  ],
  "2025-05-05": [
    { name: '18-24', masculino: 130, feminino: 140 },
    { name: '25-34', masculino: 190, feminino: 150 },
    { name: '35-44', masculino: 200, feminino: 150 },
    { name: '45-54', masculino: 150, feminino: 130 },
    { name: '55-64', masculino: 110, feminino: 70 },
    { name: '65+', masculino: 70, feminino: 30 }
  ],
  // Add more dates if needed
};

const GenderAgeComparisonChart = () => {
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
        { name: '18-24', masculino: 110, feminino: 160 },
        { name: '25-34', masculino: 170, feminino: 170 },
        { name: '35-44', masculino: 200, feminino: 150 },
        { name: '45-54', masculino: 150, feminino: 125 },
        { name: '55-64', masculino: 90, feminino: 85 },
        { name: '65+', masculino: 55, feminino: 50 }
      ];
    }
    
    // Default to base data
    return baseData;
  }, [date, dateRange, dateFilterType, filtersApplied]); // Include filtersApplied to force re-render

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
