import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      // Check localStorage for auth token
      const token = localStorage.getItem('auth_token')
      if (token) {
        // For demo, we'll create a mock user
        setUser({
          id: '1',
          email: 'user@example.com',
          name: 'Demo User'
        })
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      // Mock API call - replace with your actual login API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock successful login
      const mockUser = {
        id: '1',
        email,
        name: 'Demo User'
      }
      
      // Save token to localStorage
      localStorage.setItem('auth_token', 'mock_token')
      setUser(mockUser)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      // Mock API call - replace with your actual logout API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Clear local storage and state
      localStorage.removeItem('auth_token')
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider 
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}