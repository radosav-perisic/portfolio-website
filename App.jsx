import Home from "./src/components/Home"
import Navbar from "./src/components/Navbar"
import About from "./src/components/About"
import Skills from "./src/components/Skills"
import Work from "./src/components/Work"
import Contact from "./src/components/Contact"
import Particle from "./src/components/Particle"

function App() {
  return (
    <div>
      <Particle/>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
