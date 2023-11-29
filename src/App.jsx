
import './App.css'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from './pages/Services';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className='home-page'>
        <Navbar/>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/services" element={<Services/>} />
            
        </Routes>
      </div>
    </Router>
  )
}

export default App
