// Types
export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    name: string
  }
}

// Constants
export const AUTH_TOKEN_KEY = 'auth_token'

// Helper functions
export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY)
export const setAuthToken = (token: string) => localStorage.setItem(AUTH_TOKEN_KEY, token)
export const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN_KEY)

// API functions (mock implementations)
export const loginApi = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // Mock API call - replace with actual API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Simulate API validation
  if (credentials.email && credentials.password) {
    return {
      token: 'mock_jwt_token',
      user: {
        id: '1',
        email: credentials.email,
        name: 'Demo User'
      }
    }
  }
  
  throw new Error('Invalid credentials')
}

export const logoutApi = async (): Promise<void> => {
  // Mock API call - replace with actual API call
  await new Promise(resolve => setTimeout(resolve, 500))
  removeAuthToken()
}

export const validateToken = async (token: string): Promise<boolean> => {
  // Mock token validation - replace with actual API call
  await new Promise(resolve => setTimeout(resolve, 500))
  return token === 'mock_jwt_token'
}

// Route protection helper
export const isProtectedRoute = (pathname: string): boolean => {
  const publicRoutes = ['/login', '/register', '/forgot-password']
  return !publicRoutes.includes(pathname)
}