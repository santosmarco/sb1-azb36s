"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  {
    revenue: 400,
    date: "Jan 1",
  },
  {
    revenue: 300,
    date: "Jan 2",
  },
  {
    revenue: 500,
    date: "Jan 3",
  },
  {
    revenue: 700,
    date: "Jan 4",
  },
  {
    revenue: 400,
    date: "Jan 5",
  },
  {
    revenue: 600,
    date: "Jan 6",
  },
  {
    revenue: 800,
    date: "Jan 7",
  },
]

export function Overview() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Revenue
                        </span>
                        <span className="font-bold text-muted-foreground">
                          ${payload[0].value}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="revenue"
            activeDot={{
              r: 6,
              style: { fill: "hsl(var(--primary))" },
            }}
            style={
              {
                stroke: "hsl(var(--primary))",
              } as React.CSSProperties
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}