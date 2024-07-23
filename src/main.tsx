import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './templates/About/index.tsx'
import { Menu } from './components/Menu/index.tsx'
import { Post } from './components/Post/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)
