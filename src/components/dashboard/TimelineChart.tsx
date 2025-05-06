
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
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

const TimelineChart = () => {
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
