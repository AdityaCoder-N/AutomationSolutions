import React from 'react'
import '../static/testimonials.css'
import commas from '../assets/commas.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'


const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h1 className='font-bold'>What people are saying about us</h1>

        <div className="testimonials-container">

            <div className='testimonial-card hover'>
                <div className='comma'>
                    <img src={commas} alt="''" />
                </div>
                <div className='testimonial-content'>
                Working with Synthwave Technologies was a game-changer for our business. Their ML solutions boosted our productivity and decision-making.
                </div>

                <div className='testimonial-footer'>

                    <div>
                        <img src={user1} alt="" />
                    </div>
                    <div>
                        <h3>Amida Wang</h3>
                        <h5>CEO, Tech Innovations Inc.</h5>
                    </div>

                </div>
            </div>
            <div className='testimonial-card'>
                <div className='comma'>
                    <img src={commas} alt="''" />
                </div>
                <div className='testimonial-content'>
                "Synthwave Technologies not only met but exceeded our expectations. The automation services streamlined our processes, leading to significant cost savings."
                </div>

                <div className='testimonial-footer'>

                    <div>
                        <img src={user2} alt="" />
                    </div>
                    <div>
                        <h3>John Doe</h3>
                        <h5>CFO, Data Dynamics Ltd.</h5>
                    </div>

                </div>
            </div>
            <div className='testimonial-card'>
                <div className='comma'>
                    <img src={commas} alt="''" />
                </div>
                <div className='testimonial-content'>
                "The data analytics expertise at Synthwave Technologies provided us with actionable insights that had a direct impact on our strategic planning and growth."
                </div>

                <div className='testimonial-footer'>

                    <div>
                        <img src={user3} alt="" />
                    </div>
                    <div>
                        <h3>Alex Johnson</h3>
                        <h5>CTO, Future Enterprises Corp.</h5>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonials