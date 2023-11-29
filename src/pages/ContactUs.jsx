import React from 'react'
import '../static/contact.css'
import img from '../assets/img.png'

const ContactUs = () => {
  return (
    <div className='contact-page'>
        
        <div className='contact-us'>

            <div className='contact-img'>
                <img src={img} alt="" />
            </div>
            <form className='contact-form'>

                <h1 className='font-bold'>Reach Out to Us</h1>

                <input type="text" placeholder='Enter Your Name'/>
                <input type="email" placeholder='Enter Your Email'/>
                <textarea type="text" placeholder='Enter Your Message Here'/>


                <button>Send Message</button>
            </form>

        </div>
    </div>
  )
}

export default ContactUs