import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    name: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
  },
  {
    name: "Subscriptions",
    value: "2,350",
    change: "+180.1%",
    trend: "up",
  },
  {
    name: "Active Users",
    value: "1,200",
    change: "-10.1%",
    trend: "down",
  },
  {
    name: "New Customers",
    value: "+573",
    change: "+201.1%",
    trend: "up",
  },
]

export function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stat.trend === "up" ? (
                <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
              )}
              <span
                className={
                  stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                }
              >
                {stat.change}
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}