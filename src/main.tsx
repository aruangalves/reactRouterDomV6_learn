import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './templates/About/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)
