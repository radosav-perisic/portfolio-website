import { useState } from "react"
import Home from "./src/components/Home"
import Navbar from "./src/components/Navbar"
import About from "./src/components/About"
import Skills from "./src/components/Skills"
import Work from "./src/components/Work"
import Contact from "./src/components/Contact"
import Particle from "./src/components/Particle"
import Footer from "./src/components/Footer"
import Experience from "./src/components/Experience"

function App() {
  const [particles, setParticles] = useState(true)
  const particleClick = () => setParticles(!particles)
  return (
    <div>
      {particles ? <Particle/> : null}
      <Navbar particleClick={particleClick} />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
