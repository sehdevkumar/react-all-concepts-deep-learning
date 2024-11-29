import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./features/about/About"
import AiChat from "./features/ai-chat/AiChat"
import Home from "./features/home/Home"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Sidebar from "./layout/SideBar"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header toggleSidebar={() => { }} />

        <div className="flex flex-1" style={{height: "calc(100% - 140px)"}}>
          <Sidebar isOpen={false} onClose={() => { }} />
          <div className="container mx-auto px-4 py-8 overflow-auto">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ai-chat" element={<AiChat />} />
            </Routes>
          </div>
        </div>
       
       <div
      className="flex"
       >
        <Footer />

       </div>
      </div>
    </BrowserRouter>
  )
}

export default App