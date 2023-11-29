import React from 'react'
import '../static/ourServices.css'
import paperPlane from '../assets/paper-plane.png'
import analytics from '../assets/analytics.png'
import code from '../assets/code.png'


const OurServices = () => {
  return (
    <div className='our-services'>
        
        <h1 className='font-bold'>Services We Offer</h1>
        <p>Explore a spectrum of cutting-edge services tailored to elevate your business , we are dedicated to transforming your operations and driving unparalleled success.</p>


        <div className='services-card-container'>

            <div className='services-card'>
                <div className='card-img'>
                    <img src={paperPlane} alt="" />
                </div>
                <h1 className='font-bold text-xl'>Automation Services</h1>
                <p>
                Revolutionize the way you operate with our state-of-the-art automation solutions. Our experts tailor automation strategies to your business needs, streamlining processes and enhancing overall efficiency. Embrace the future of seamless operations with us. Experience seamless operations and increased efficiency with our automation solutions.
                </p>

                <button className='hero-btn text-black'>Learn More</button>

            </div>
            <div className='services-card'>
                <div className='card-img'>
                    <img src={analytics} alt="" />
                </div>
                <h1 className='font-bold text-xl'>Data Analyst Services</h1>
                <p>
                Uncover actionable insights from your data goldmine with our Data Analyst Services. Our team of skilled analysts employs advanced techniques to extract, analyze, and interpret data, empowering your business to make informed decisions and stay ahead of the curve.
                </p>

                <button className='hero-btn text-black'>Learn More</button>

            </div>
            <div className='services-card'>
                <div className='card-img'>
                    <img src={code} alt="" />
                </div>
                <h1 className='font-bold text-xl'>ML/AI-Based Services</h1>
                <p>
                Embrace innovation and intelligence with our ML/AI-Based Services. Leverage the power of machine learning and artificial intelligence to gain a competitive edge. From predictive analytics to intelligent decision support systems, we bring cutting-edge technology to drive success in your organization.
                </p>

                <button className='hero-btn text-#010024'>Learn More</button>

            </div>

        </div>

    </div>
  )
}

export default OurServices