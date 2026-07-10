import Navbar from "./Navbar"
import './App.css'
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Services from "./components/Services"
import { Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
    <Navbar />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>

    </>

  )
}

export default App
