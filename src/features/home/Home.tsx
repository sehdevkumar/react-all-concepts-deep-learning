import { Button } from "@/components/ui/button"
import { Route, Routes, Link } from "react-router-dom"
import Health from "./sections/Health"
import Appointment from "./sections/Appointment"
import Visualized from "./sections/Visualized"

export default function Home() {
  return (
    <div className="overflow-auto h-[calc(100%-56px)] w-full grid">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Health Dashboard</h1>
        <div className="space-x-2">
          <Link to="/health">
            <Button variant="outline">Health</Button>
          </Link>
          <Link to="/appointment">
            <Button variant="outline">Appointments</Button>
          </Link>
          <Link to="/visualize">
            <Button variant="outline">Visualize</Button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/health" element={<Health />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/visualize" element={<Visualized />} />
        <Route path="/" element={<Health />} />
      </Routes>
    </div>
  )
}