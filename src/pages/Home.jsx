import React from 'react'
import '../static/home.css'
import heroImage from '../assets/Other 07.png'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import Features from '../components/Features'
const Home = () => {
  return (
    <div className='home-page'>
        <Navbar/>
        <div className='hero-section'>
            
            <div className='ellipse'></div>
            <div className='hero-content'>
                <h1>
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

    </div>
  )
}

export default Home