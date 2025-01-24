import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
