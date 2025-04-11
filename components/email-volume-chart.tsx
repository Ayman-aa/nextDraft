"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Mon",
    sent: 45,
    received: 78,
  },
  {
    name: "Tue",
    sent: 52,
    received: 71,
  },
  {
    name: "Wed",
    sent: 48,
    received: 80,
  },
  {
    name: "Thu",
    sent: 61,
    received: 65,
  },
  {
    name: "Fri",
    sent: 55,
    received: 58,
  },
  {
    name: "Sat",
    sent: 18,
    received: 27,
  },
  {
    name: "Sun",
    sent: 10,
    received: 15,
  },
]

export function EmailVolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="received" name="Received" fill="#3A36E0" radius={[4, 4, 0, 0]} />
        <Bar dataKey="sent" name="Sent" fill="#0FCCCE" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

