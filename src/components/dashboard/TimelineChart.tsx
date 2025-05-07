
import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useFilters } from "@/contexts/FilterContext";
import { format } from "date-fns";

// Base data
const baseData = [
  { time: "8:00", visitors: 12 },
  { time: "9:00", visitors: 18 },
  { time: "10:00", visitors: 26 },
  { time: "11:00", visitors: 35 },
  { time: "12:00", visitors: 42 },
  { time: "13:00", visitors: 38 },
  { time: "14:00", visitors: 32 },
  { time: "15:00", visitors: 41 },
  { time: "16:00", visitors: 45 },
  { time: "17:00", visitors: 38 },
  { time: "18:00", visitors: 30 },
  { time: "19:00", visitors: 24 },
  { time: "20:00", visitors: 18 },
];

// Data for different days (just for simulation)
const alternativeData = {
  "2025-05-06": [
    { time: "8:00", visitors: 15 },
    { time: "9:00", visitors: 22 },
    { time: "10:00", visitors: 30 },
    { time: "11:00", visitors: 38 },
    { time: "12:00", visitors: 45 },
    { time: "13:00", visitors: 40 },
    { time: "14:00", visitors: 36 },
    { time: "15:00", visitors: 44 },
    { time: "16:00", visitors: 48 },
    { time: "17:00", visitors: 42 },
    { time: "18:00", visitors: 35 },
    { time: "19:00", visitors: 28 },
    { time: "20:00", visitors: 20 },
  ],
  "2025-05-05": [
    { time: "8:00", visitors: 10 },
    { time: "9:00", visitors: 16 },
    { time: "10:00", visitors: 24 },
    { time: "11:00", visitors: 32 },
    { time: "12:00", visitors: 38 },
    { time: "13:00", visitors: 34 },
    { time: "14:00", visitors: 28 },
    { time: "15:00", visitors: 36 },
    { time: "16:00", visitors: 40 },
    { time: "17:00", visitors: 34 },
    { time: "18:00", visitors: 26 },
    { time: "19:00", visitors: 20 },
    { time: "20:00", visitors: 14 },
  ],
  "2025-05-04": [
    { time: "8:00", visitors: 8 },
    { time: "9:00", visitors: 14 },
    { time: "10:00", visitors: 20 },
    { time: "11:00", visitors: 28 },
    { time: "12:00", visitors: 34 },
    { time: "13:00", visitors: 30 },
    { time: "14:00", visitors: 26 },
    { time: "15:00", visitors: 32 },
    { time: "16:00", visitors: 36 },
    { time: "17:00", visitors: 30 },
    { time: "18:00", visitors: 24 },
    { time: "19:00", visitors: 18 },
    { time: "20:00", visitors: 12 },
  ]
};

// Range data
const rangeData = {
  week: [
    { time: "8:00", visitors: 14 },
    { time: "9:00", visitors: 20 },
    { time: "10:00", visitors: 27 },
    { time: "11:00", visitors: 36 },
    { time: "12:00", visitors: 43 },
    { time: "13:00", visitors: 39 },
    { time: "14:00", visitors: 34 },
    { time: "15:00", visitors: 42 },
    { time: "16:00", visitors: 46 },
    { time: "17:00", visitors: 40 },
    { time: "18:00", visitors: 32 },
    { time: "19:00", visitors: 26 },
    { time: "20:00", visitors: 19 },
  ],
  partial: [
    { time: "8:00", visitors: 13 },
    { time: "9:00", visitors: 19 },
    { time: "10:00", visitors: 25 },
    { time: "11:00", visitors: 33 },
    { time: "12:00", visitors: 40 },
    { time: "13:00", visitors: 36 },
    { time: "14:00", visitors: 31 },
    { time: "15:00", visitors: 38 },
    { time: "16:00", visitors: 42 },
    { time: "17:00", visitors: 37 },
    { time: "18:00", visitors: 29 },
    { time: "19:00", visitors: 23 },
    { time: "20:00", visitors: 16 },
  ]
};

const TimelineChart = () => {
  const { date, dateRange, dateFilterType, filtersApplied } = useFilters();

  // Generate data based on selected date/range
  const data = useMemo(() => {
    if (dateFilterType === "single") {
      const dateKey = format(date, "yyyy-MM-dd");
      return alternativeData[dateKey] || baseData;
    } 
    
    // If it's a range, provide different data
    if (dateFilterType === "range") {
      if (dateRange.from && dateRange.to) {
        return rangeData.week;
      } else if (dateRange.from) {
        return rangeData.partial;
      }
    }
    
    return baseData;
  }, [date, dateRange, dateFilterType, filtersApplied]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="time" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffff" }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false} 
            tick={{ fill: "#ffffff" }}
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
          <defs>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Line 
            type="monotone" 
            dataKey="visitors" 
            name="Visitantes" 
            stroke="#9b87f5" 
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
            fillOpacity={1} 
            fill="url(#colorVisitors)" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChart;
