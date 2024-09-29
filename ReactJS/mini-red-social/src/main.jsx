import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './views/Home'
import Rutas from './Rutas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas/>
  </StrictMode>,
)
