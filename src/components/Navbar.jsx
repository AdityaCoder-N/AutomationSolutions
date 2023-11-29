import React from 'react'
import  '../static/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>

        <div className='nav-logo'>
            Synthwave Solutions
        </div>
        <div className='nav-items'>

            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/services" className='nav-item'>Our Services</Link>
            <Link to="/about" className='nav-item'>About Us</Link>
            <Link to="/contact" className='nav-item'>Contact Us</Link>

        </div>

    </nav>
  )
}

export default Navbar