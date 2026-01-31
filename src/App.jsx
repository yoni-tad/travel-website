import './App.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from './components/ui/tooltip'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  )
}

export default App
