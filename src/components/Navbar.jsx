import React from 'react'
import  '../static/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>

        <div className='nav-logo'>
            Synthwave Solutions
        </div>
        <div className='nav-items'>

            <a href="" className='nav-item'>Home</a>
            <a href="" className='nav-item'>Our Services</a>
            <a href="" className='nav-item'>About Us</a>
            <a href="" className='nav-item'>Contact Us</a>

        </div>

    </nav>
  )
}

export default Navbar