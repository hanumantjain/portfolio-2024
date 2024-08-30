import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Project from "./components/Project"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="flex ">
      <div className="w-1/4 bg-[#111] h-screen content-center sticky top-0">
        <Navbar />
      </div>
      <div className="w-3/4 bg-black content-center ">
        <Home />
        <About />
        <Skills />
        <Education />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App;
