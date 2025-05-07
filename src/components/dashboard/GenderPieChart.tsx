
import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useFilters } from "@/contexts/FilterContext";
import { format, isBefore, isAfter, startOfDay } from "date-fns";

// Base data
const baseData = [
  { name: "Masculino", value: 58 },
  { name: "Feminino", value: 42 }
];

// Data for different days (just for simulation)
const alternativeData = {
  "2025-05-06": [
    { name: "Masculino", value: 45 },
    { name: "Feminino", value: 55 }
  ],
  "2025-05-05": [
    { name: "Masculino", value: 50 },
    { name: "Feminino", value: 50 }
  ],
  "2025-05-04": [
    { name: "Masculino", value: 65 },
    { name: "Feminino", value: 35 }
  ],
  // Add more dates if needed
};

// Device-specific data
const deviceData = {
  "camera-1": [
    { name: "Masculino", value: 62 },
    { name: "Feminino", value: 38 }
  ],
  "camera-2": [
    { name: "Masculino", value: 53 },
    { name: "Feminino", value: 47 }
  ],
  "camera-3": [
    { name: "Masculino", value: 48 },
    { name: "Feminino", value: 52 }
  ],
  "camera-4": [
    { name: "Masculino", value: 66 },
    { name: "Feminino", value: 34 }
  ],
};

// Multiple devices data
const multiDeviceData = [
  { name: "Masculino", value: 56 },
  { name: "Feminino", value: 44 }
];

const COLORS = ["#9b87f5", "#D946EF"];

const GenderPieChart = () => {
  const { date, dateRange, dateFilterType, selectedDevices, filtersApplied } = useFilters();

  // Generate synthetic data based on selected date and devices
  const data = useMemo(() => {
    // Handle device selection first
    if (selectedDevices.length === 1 && selectedDevices[0] !== "todos") {
      // Single device selected
      const deviceId = selectedDevices[0];
      return deviceData[deviceId] || baseData;
    } else if (selectedDevices.length > 1) {
      // Multiple devices selected
      return multiDeviceData;
    }
    
    // If "todos" is selected or date filtering is applied
    const dateKey = format(date, "yyyy-MM-dd");
    
    // Check if we have predefined data for this date
    if (dateFilterType === "single" && alternativeData[dateKey]) {
      return alternativeData[dateKey];
    }
    
    // If it's a range, calculate an average or use special data
    if (dateFilterType === "range" && dateRange?.from && dateRange?.to) {
      // For demo purposes, just use different data for ranges
      return [
        { name: "Masculino", value: 52 },
        { name: "Feminino", value: 48 }
      ];
    } 
    
    // For "from" only ranges
    if (dateFilterType === "range" && dateRange?.from && !dateRange?.to) {
      return [
        { name: "Masculino", value: 55 },
        { name: "Feminino", value: 45 }
      ];
    }
    
    // Default to base data
    return baseData;
  }, [date, dateRange, dateFilterType, filtersApplied, selectedDevices]); // Include selectedDevices to update on device change

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
