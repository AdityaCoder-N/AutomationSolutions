import React,{useState} from 'react'
import whiteBox from '../assets/Rectangle 14410.png'
import objects from '../assets/OBJECTS.png'
import rocket from '../assets/rocket.png'
import bulb from '../assets/bulb.png'
import chat from '../assets/chat.png'
const AboutUs = () => {

  const imageStyle = {
    filter: 'grayscale(100%) sepia(100%) hue-rotate(165deg)',
    /* Add other styles as needed */
  };
  const [servicesData, setServicesData] = useState([
    {
      heading: 'Domain Expertise',
      content: 'We have deep domain expertise across various industries, allowing us to understand your specific challenges and opportunities better.',
    },
    {
      heading: 'Advanced Technology Stack',
      content: 'Our arsenal includes the latest ML and AI tools and frameworks, ensuring that we stay at the forefront of technological advancements.',
    },
    {
      heading: 'Human-Centric Approach',
      content: 'We combine the power of AI with human intelligence to create solutions that not only drive efficiency but also enhance the user experience.',
    },
    {
      heading: 'Proven Track Record',
      content: 'Our track record of successful projects and satisfied clients speaks volumes about the quality and effectiveness of our services.',
    },
    {
      heading: 'Continuous Innovation',
      content: 'Innovation is in our DNA. We continuously explore new possibilities and techniques to provide you with cutting-edge solutions.',
    },
  ]);
  
  return (
    <div className='py-28 px-16'> 

      <div className='bg-[#084C83] w-full rounded-3xl flex relative items-center justify-between'>

        <img src={whiteBox} alt="" />

        <div className='absolute left-12 top-1/2 -translate-y-1/2 w-1/3'>
          <h1 className='text-black text-4xl font-bold'>About Us</h1>
          <p className='text-black my-6 text-xl '>Synthwave Technologies leads the way in providing cutting-edge Machine Learning and Artificial Intelligence solutions, transforming businesses through innovation.</p>

          <button className='bg-[#084C83] font-semibold text-base py-2 px-4 rounded-lg shadow-lg'>Explore More</button>
        </div>

        <img src={objects} alt="" className='h-3/4 mr-16'/>
      </div>

      <h1 className='text-4xl font-bold text-center mt-20'>Why our Services are Unique</h1>
      {/* service list */}
      <div className='my-8 p-4 px-20' >

        {
          servicesData.map((element,index)=>{
            return(
              <div className='mb-6 p-6  bg-white bg-opacity-30 rounded-[10px] backdrop-blur-[10px]' key={element.heading}>
                <h1 className='font-semibold text-xl'>{index+1}. {element.heading}</h1>
                <p className='text-lg mt-2'>{element.content}</p>
              </div>
            )
          })
        }

      </div>

      {/* vision-box */}

      <div className='px-6 py-10 grid grid-cols-2 gap-14 '>
        
        <div className='flex w-full gap-6'>

          <div className='w-1/4'>
            <img src={bulb} alt="" className='w-full h-full object-cover'/>
          </div>
          <div className='flex flex-col gap-4 w-3/4'>
            <h1 className='text-3xl font-semibold'>Vision</h1>
            <p className='text-lg leading-6'>Our vision is to be at the forefront of innovation in ML and AI, transforming industries, and improving lives through data-driven insights and intelligent solutions. We aim to create a world where businesses harness the full potential of data to achieve their goals.</p>
          </div>

        </div>

        <div className='flex w-full gap-6'>

          <div className='w-1/4'>
            <img src={rocket} alt="" className='w-full h-full object-cover'/>
          </div>
          <div className='flex flex-col gap-4 w-3/4'>
            <h1 className='text-3xl font-semibold'>Mission</h1>
            <p className='text-lg leading-6'>Our mission is to empower organizations with cutting-edge ML and AI services that drive growth, efficiency, and innovation. We are dedicated to delivering tailored solutions that solve complex challenges, guided by principles of ethics, transparency, and client-centricity.</p>
          </div>

        </div>
        <div className='flex w-full gap-6'>

          <div className='w-1/4'>
            <img src={rocket} alt="" className='w-full h-full object-cover'/>
          </div>
          <div className='flex flex-col gap-4 w-3/4'>
            <h1 className='text-3xl font-semibold'>Ethical Practices</h1>
            <p className='text-lg leading-6'>We prioritize ethical AI and data privacy, ensuring that our solutions are fair, transparent, and accountable.</p>
          </div>

        </div>
        <div className='flex w-full gap-6'>

          <div className='w-1/4'>
            <img src={bulb} alt="" className='w-full h-full object-cover'/>
          </div>
          <div className='flex flex-col gap-4 w-3/4'>
            <h1 className='text-3xl font-semibold'>Long Term Partnership</h1>
            <p className='text-lg leading-6'>We're not just a service provider; we're a partner in your journey. We're dedicated to building long-lasting relationships and supporting your growth</p>
          </div>

        </div>

      </div>

      <h1 className='text-center font-bold text-4xl my-12 mt-20'>Our Story</h1>

      <div className='relative w-full'>
        <img src={chat} alt="" className='h-full w-full' style={imageStyle}/>

        <div className='absolute top-48 left-1/2 -translate-x-1/2 w-3/4 flex flex-col gap-10'>
          <p className=' text-3xl w-full text-center'>
          At Synthwave Technologies, our story is one of ambition, innovation, and unwavering dedication. Founded in 2020, we embarked on a mission to revolutionize the landscape through the power of machine learning and artificial intelligence.
          </p>
          <p className=' text-3xl w-full text-center'>
          Over the years, we've forged a path of continuous growth, overcoming challenges and embracing opportunities. From humble beginnings to our current status as a leader in ML-based services, our journey is a testament to our resilience and commitment to excellence.
          </p>
        </div>
      </div>

      <h1 className='text-4xl font-bold text-center mt-20'>Why Choose Us</h1>
      <p className='text-lg text-center my-5'>Choosing Synthwave Technologies means choosing a partner committed to your success. Here's why clients trust us: Proven Results - Our track record of successful projects and satisfied clients speaks to our ability to deliver tangible results.</p>

      <div className='px-24 py-16 grid grid-cols-4 gap-10'>

        <div className='teal-gradient border border-white rounded-2xl p-8'>
          <h2 className='text-2xl text-white font-semibold'>Expertise</h2>
          <p className='my-6 leading-6'>Our deep domain knowledge and cutting-edge technology stack ensure that we deliver solutions that make a real impact.</p>
        </div>

        <div className='purp-gradient border border-white rounded-2xl p-8'>
          <h2 className='text-2xl text-white font-semibold'>Client Centric Approach</h2>
          <p className='my-6 leading-6'>Your goals are our goals. We work closely with you to understand your unique needs and tailor solutions that align perfectly with your objectives.</p>
        </div>

        <div className='blue-gradient border border-white rounded-2xl p-8'>
          <h2 className='text-2xl text-white font-semibold'>Future Ready Solutions</h2>
          <p className='my-6 leading-6'>Our solutions are built to scale with your business and adapt to future challenges, ensuring long-term sustainability.</p>
        </div>

        <div className='gold-gradient border border-white rounded-2xl p-8'>
          <h2 className='text-2xl text-white font-semibold'>Innovation</h2>
          <p className='my-6 leading-6'>We are at the forefront of industry trends, continuously innovating to provide clients with the latest advancements in ML and AI.</p>
        </div>
        

      </div>

        <p className='text-lg text-center my-5 w-2/3 ml-[50%] -translate-x-1/2'>
        Choose Synthwave Technologies for a collaborative and innovative approach to ML-based services that drive your organization forward.
        </p>


    </div>
  )
}

export default AboutUs