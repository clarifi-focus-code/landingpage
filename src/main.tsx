import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import AOS from 'aos' // this imports aos for animations when scrolling
import 'aos/dist/aos.css' // adds the styling for animations

AOS.init()  // initializes animations

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
