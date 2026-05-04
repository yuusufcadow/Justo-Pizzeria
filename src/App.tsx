import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import SpecialOffers from "./components/SpecialOffers"
import Menu from "./pages/Menu"
import Franchises from "./pages/Franchises"
import ContactUs from "./pages/ContactUs"



function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/locations" element={<SpecialOffers />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/franchise" element={<Franchises />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
