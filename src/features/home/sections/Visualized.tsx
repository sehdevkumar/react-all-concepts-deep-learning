import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Visualized() {
  const metrics = {
    daily: {
      steps: "10,234",
      calories: "2,345",
      distance: "5.2 km",
      active: "5h 23m",
    },
    weekly: {
      steps: "72,145",
      calories: "16,420",
      distance: "36.5 km",
      active: "38h 12m",
    },
    monthly: {
      steps: "291,678",
      calories: "65,890",
      distance: "145.8 km",
      active: "152h 45m",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Activity Visualization</h2>
        <Button>Export Data</Button>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        {Object.entries(metrics).map(([period, data]) => (
          <TabsContent key={period} value={period}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.steps}</div>
                  <div className="h-[80px] flex items-center justify-center text-muted-foreground text-sm">
                    Steps chart will go here
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Calories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.calories}</div>
                  <div className="h-[80px] flex items-center justify-center text-muted-foreground text-sm">
                    Calories chart will go here
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Distance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.distance}</div>
                  <div className="h-[80px] flex items-center justify-center text-muted-foreground text-sm">
                    Distance chart will go here
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.active}</div>
                  <div className="h-[80px] flex items-center justify-center text-muted-foreground text-sm">
                    Active time chart will go here
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Activity Overview</CardTitle>
          <CardDescription>
            Detailed breakdown of your activity metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Detailed activity chart will go here
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Previous Period</Button>
          <Button variant="outline">Next Period</Button>
        </CardFooter>
      </Card>
    </div>
  )
}