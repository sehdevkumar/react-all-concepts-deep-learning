import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./features/about/About"
import AiChat from "./features/ai-chat/AiChat"
import Home from "./features/home/Home"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Sidebar from "./layout/SideBar"
import { AuthProvider } from "./context/auth-context"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import LoginForm from "./components/auth/LoginForm"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen overflow-hidden">
          <Header toggleSidebar={() => { }} />

          <div className="flex flex-1" style={{ height: "calc(100% - 140px)" }}>
            <Sidebar isOpen={false} onClose={() => { }} />
            <div className="container mx-auto px-4 py-8 overflow-auto">
              <Routes>
                {/* Public routes */}
                <Route
                  path="/login"
                  element={
                    <ProtectedRoute requireAuth={false}>
                      <LoginForm />
                    </ProtectedRoute>
                  }
                />

                {/* Protected routes */}
                <Route
                  path="/*"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <ProtectedRoute>
                      <About />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/ai-chat"
                  element={
                    <ProtectedRoute>
                      <AiChat />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </div>

          <div className="flex">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App