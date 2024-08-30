import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About";

function App() {
  return (
    <div className="flex ">
      <div className="w-1/4 bg-[#111] content-center">
        <Navbar />
      </div>
      <div className="w-3/4 bg-black content-center">
        <Home />
        <About />
      </div>
    </div>
  )
}

export default App;
