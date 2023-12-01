
import './App.css'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
function App() {

  return (
    <Router>
      <div className='outer-container'>
        <div className='home-page'>
          <Navbar/>
          <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/services" element={<Services/>} />
              
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  )
}

export default App
