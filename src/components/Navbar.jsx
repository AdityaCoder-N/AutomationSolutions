import React,{useState} from 'react'
import  '../static/navbar.css'
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu =()=>{
    setShowMenu(!showMenu)
  }
  return (
    <nav className='navbar'>

        <div className='nav-logo'>
            Synthwave Solutions
        </div>
        <div className='nav-items'>

            <Link to="/" className='nav-item hidden sm:block'>Home</Link>
            <Link to="/services" className='nav-item hidden sm:block'>Our Services</Link>
            <Link to="/about" className='nav-item hidden sm:block'>About Us</Link>
            <Link to="/contact" className='nav-item hidden sm:block'>Contact Us</Link>

            <HiMenu
              className="text-white text-2xl cursor-pointer sm:hidden"
              onClick={toggleMenu}
            />

        </div>
        {
          showMenu && (
          <div className='fixed bg-[#7972E4] h-full w-2/3 z-20 left-0 top-0 flex flex-col justify-center items-center gap-16 transition-all duration-200 ease-in-out'>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/services" className='nav-item'>Our Services</Link>
            <Link to="/about" className='nav-item'>About Us</Link>
            <Link to="/contact" className='nav-item'>Contact Us</Link>
            <HiX className='text-white text-3xl cursor-pointer'/>
          </div>
          )
        }

    </nav>
  )
}

export default Navbar