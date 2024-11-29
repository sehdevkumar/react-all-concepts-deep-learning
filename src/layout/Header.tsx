import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface HeaderProps {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <h2 className="text-lg font-semibold">React Deep Learning</h2>
          </div>
          <nav className="flex items-center space-x-2">

          </nav>
        </div>
      </div>
    </header>
  )
}