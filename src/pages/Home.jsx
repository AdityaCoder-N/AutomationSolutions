import React from 'react'
import '../static/home.css'
import heroImage from '../assets/Other 07.png'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
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

                <button className='hero-btn'>About Us</button>
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


        <div className='hover rounded-xl w-2/3 ml-[50%] -translate-x-1/2 p-8 flex items-center justify-around mb-20'>
            <div>
                <h1 className='font-bold text-4xl'>Let's try our services Now !</h1>
                <p className='mt-2 w-2/3'>Everything you need to automate and grow your business anywhere on the planet</p>
            </div>
            <div>
                <button className='hero-btn text-black' >Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Home