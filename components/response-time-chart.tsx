"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

const data = [
  {
    name: "Week 1",
    time: 65,
  },
  {
    name: "Week 2",
    time: 59,
  },
  {
    name: "Week 3",
    time: 52,
  },
  {
    name: "Week 4",
    time: 48,
  },
  {
    name: "Week 5",
    time: 45,
  },
  {
    name: "Week 6",
    time: 42,
  },
  {
    name: "Week 7",
    time: 40,
  },
  {
    name: "Week 8",
    time: 38,
  },
]

export function ResponseTimeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis unit=" min" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="time"
          name="Response Time"
          stroke="#3A36E0"
          fill="url(#colorTime)"
          strokeWidth={2}
        />
        <defs>
          <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3A36E0" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3A36E0" stopOpacity={0.1} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  )
}

