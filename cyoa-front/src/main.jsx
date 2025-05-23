import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

import Layout from './components/Layout';
import Home from './pages/Home'
import Cyoa from './pages/Cyoa'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cyoa" element={<Cyoa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
