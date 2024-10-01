import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Project from "./components/Project"
import Contact from "./components/Contact"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }, []) 

  return (
    <div className="flex">
      <div className="hidden lg:block w-1/4 bg-[#111] h-screen content-center sticky top-0">
        <Navbar />
      </div>
      <div className="w-full lg:w-3/4 bg-black content-center overflow-x-hidden">
        <Home />
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App;
