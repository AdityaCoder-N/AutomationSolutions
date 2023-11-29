import React from 'react'
import '../static/features.css'
import message from '../assets/message.png'
import shield from '../assets/shield.png'
import star from '../assets/star.png'

const Features = () => {
  return (
    <div className='features-container'>
        <div className='features-content'>
            <h1>Why Choose Synthwave Technologies ?</h1>
            <p>Synthwave Technologies is your go-to for cutting-edge, customized tech solutions. With expertise across industries, a commitment to quality, we deliver innovative projects tailored to your needs.</p>
            <button className='hero-btn'>Get Started</button>
        </div>
        <div className='features-list'>
            <div className='feature-list-item'>
                <div className='list-item-img'>
                    <img src={star} alt="" />
                </div>
                <div className='list-item-content'>
                    <h3>Expertise</h3>
                    <p>Our team of seasoned developers and data scientists ensures top-tier solutions.</p>
                </div>
            </div>
            <div className='feature-list-item'>
                <div className='list-item-img'>
                    <img src={shield} alt="" />
                </div>
                <div className='list-item-content'>
                    <h3>Success Stories</h3>
                    <p>Read testimonials, showcasing real-world examples of our impact.</p>
                </div>
            </div>
            <div className='feature-list-item'>
                <div className='list-item-img'>
                    <img src={message} alt="" />
                </div>
                <div className='list-item-content'>
                    <h3>Innovation</h3>
                    <p>Stay ahead with our commitment to the latest advancements in ML/AI.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features