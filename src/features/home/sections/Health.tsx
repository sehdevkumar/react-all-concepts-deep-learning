import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, TrendingUp } from "lucide-react"

export default function Health() {
  const healthMetrics = [
    {
      title: "Heart Rate",
      value: "72 BPM",
      change: "+2%",
      icon: <Heart className="h-4 w-4 text-red-500" />,
    },
    {
      title: "Activity",
      value: "8,234 steps",
      change: "+12%",
      icon: <Activity className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Progress",
      value: "87%",
      change: "+5%",
      icon: <TrendingUp className="h-4 w-4 text-blue-500" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Health Dashboard</h2>
        <Button>Update Metrics</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        {healthMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Health Summary</CardTitle>
          <CardDescription>
            Your health metrics and progress over the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground">
            Health chart visualization will go here
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View Detailed Report</Button>
        </CardFooter>
      </Card>
    </div>
  )
}