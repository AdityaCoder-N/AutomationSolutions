import React from 'react'
import '../static/home.css'
import heroImage from '../assets/Other 07.png'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div >
        
        <div className='hero-section'>
            
            <div className='ellipse'></div>
            <div className='hero-content'>
                <h1 className='font-bold'>
                    Smart Solutions, Smarter Operations
                </h1>
                <p>Synthwave Technologies leads the way in providing cutting-edge Machine Learning and Artificial Intelligence solutions, transforming businesses through innovation.</p>

                <button className='hero-btn'><Link to='/about'>About Us</Link></button>
            </div>
            
            <div className='hero-image'>
                <img src={heroImage} alt="" />
            </div>

            <div className='ellipse'></div>
        </div>

        <OurServices/>
        <Features/>
        <Testimonials/>
        <Faq/>

        <div className='px-8'>
            <div className='hover rounded-xl w-full md:w-2/3  ml-[50%] -translate-x-1/2 p-4  md:p-8 md:flex items-center justify-around mb-20'>
                <div className='w-full md:w-2/3'>
                    <h1 className='font-bold md:text-4xl'>Let's try our services Now !</h1>
                    <p className='w-full mt-2 md:w-2/3'>Everything you need to automate and grow your business anywhere on the planet</p>
                </div>
                <div className=''>
                    <button className='hero-btn text-sm md:hero-btn text-black ' ><Link to='/services'>Get Started</Link></button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Home