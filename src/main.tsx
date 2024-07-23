import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './templates/About/index.tsx'
import { Menu } from './components/Menu/index.tsx'
import { Post } from './components/Post/index.tsx'
import { Redirect } from './components/Redirect/index.tsx'
import { NotFound } from './components/NotFound/index.tsx'
import { Nested } from './components/Nested/index.tsx'
import { NestedContent } from './components/Nested/NestedContent/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/nested" element={<Nested />}>
          <Route path=":id" element={<NestedContent />} />
        </Route>
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)
