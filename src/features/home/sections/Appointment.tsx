import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function Appointment() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const upcomingAppointments = [
    {
      title: "Annual Checkup",
      doctor: "Dr. Smith",
      date: "Tomorrow at 10:00 AM",
      type: "General",
    },
    {
      title: "Dental Cleaning",
      doctor: "Dr. Johnson",
      date: "Next Week, Tuesday at 2:00 PM",
      type: "Dental",
    },
    {
      title: "Eye Examination",
      doctor: "Dr. Williams",
      date: "In 2 weeks, Friday at 11:30 AM",
      type: "Vision",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
        <Button>Schedule New</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>
              Select a date to view or schedule appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>
              Your scheduled appointments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 border-b last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{appointment.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {appointment.type}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>With {appointment.doctor}</p>
                    <p>{appointment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Appointments</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}