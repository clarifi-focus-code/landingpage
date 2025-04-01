// Importing functions
import { useState } from 'react'
// Importing Media
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Importing Style
import './styles/App.css'
// Importing Sections
import HeroSection from "./sections/HeroSection"
import ProblemSection from './sections/ProblemSection'
import SolutionSection from './sections/SolutionSection'
import DemoSection from './sections/DemoSection'
import TestimonialsSection from './sections/TestimonialsSection'
import TeamSection from './sections/TeamSection'
import CTASection from './sections/CTASection'
import Footer from './sections/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      </div>

      <h1>clarifi</h1>

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <Footer />

    </>
  )
}

export default App
