import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu } from "lucide-react"

interface HeaderProps {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const { logout , isAuthenticated } = useAuth()

  return (
    <header className="bg-background border-b">
      <div className="flex w-[calc(100%-24px)] items-center justify-between py-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>

        <h2 className="text-lg font-semibold text-center">
          React Deep Learning
        </h2>

        {
          isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button variant="outline">Profile</Button>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
            </div>
          )
        }
      </div>
    </header>
  )
}