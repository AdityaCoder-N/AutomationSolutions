import React , {useState} from 'react'
import OurServices from '../components/OurServices'
import automation from '../assets/automation.png'
import analytics from '../assets/data-analtics.png'
import ai from '../assets/ai.png'

import '../static/ourServices.css'
const Services = () => {

  const [automationData, setAutomationData] = useState([
    {
      heading: 'Automation Services',
      content: 'Harness the power of automation bots to execute repetitive tasks, reduce errors, and improve productivity.'
    },
    {
      heading: 'Workflow Automation',
      content: 'Harness the power of automation bots to execute repetitive tasks, reduce errors, and improve productivity.'
    },
    {
      heading: 'Industrial Automation',
      content: 'Implement smart solutions for manufacturing processes to increase production efficiency and minimize downtime.'
    },
    {
      heading: 'Chatbots and Virtual Assistants',
      content: 'Enhance customer support and engagement with AI-powered chatbots and virtual assistants.'
    }
  ]);

  const [analystData, setAnalystData] = useState([
    {
      heading: 'Data Visualization',
      content: 'Create visually appealing and informative dashboards to present data in a meaningful way.'
    },
    {
      heading: 'Data Cleaning and Preparation',
      content: 'Ensure data accuracy and consistency through thorough cleaning and preprocessing.'
    },
    {
      heading: 'Statistical Analysis',
      content: 'Leverage statistical techniques to uncover trends, correlations, and patterns within your data.'
    },
    {
      heading: 'Predictive Analytics',
      content: 'Predict future outcomes and trends using advanced modeling and machine learning algorithms.'
    }
  ]);

  const [aiData, setAIData] = useState([
    {
      heading: 'Custom Machine Learning Models',
      content: 'Develop bespoke ML models that address your unique business challenges.'
    },
    {
      heading: 'Natural Language Processing (NLP)',
      content: 'Utilize NLP to extract insights from unstructured text data, enhance chatbots, and automate content analysis.'
    },
    {
      heading: 'Computer Vision',
      content: 'Implement computer vision solutions for image and video analysis, object detection, and recognition.'
    },
    {
      heading: 'Predictive Maintenance',
      content: 'Proactively maintain equipment and reduce downtime by predicting maintenance needs.'
    }
  ]);



  return (
    <div className='services-page pt-28'>
      <OurServices/>

      {/* automation service */}
      <div className='px-20 py-24 flex items-center w-full justify-around '>
        <div className='w-1/3'>
            <img src={automation} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='w-1/2 h-full '>
          <h1 className='font-bold text-5xl text-customViolet'>Automation Services</h1>
          <p className='my-16 leading-8'>In today's highly competitive business world, automation is no longer a mere option for businesses to survive but a necessity to stay ahead of the curve. At Synthwave Technologies, we recognize the challenges businesses face in handling complex processes and achieving operational efficiency. For this reason, we provide a comprehensive range of automation solutions tailored to streamline your operations, improve productivity, and drive growth.</p>

          <button className='px-6 py-3 bg-customViolet text-white rounded-md border border-white'>Get Started</button>
        </div>
      </div>

      <h1 className='text-center text-3xl font-bold'>Subsections</h1>
      {/* subsections -container  */}
      <div className='px-24 py-16 grid grid-cols-4 gap-10 '>
        {
          automationData.map((element)=>{
            return (
              <div className='purp-gradient border border-white rounded-2xl p-8 ' key={element.heading}>

                <h2 className='text-2xl text-white font-semibold'>{element.heading}</h2>
                <p className='my-6 leading-6'>{element.content}</p>

                <button className='px-6 py-2 bg-[#322B65] text-white rounded-md border border-white'>Learn More</button>

              </div>
            )
          })
        }
      </div>


      {/* dataanalyst service */}
      <div className='px-20 py-24 flex items-center w-full justify-around '>
        
        <div className='w-1/2 h-full '>
          <h1 className='font-bold text-5xl text-[#178573]'>Data Analyst Services</h1>
          <p className='my-12 leading-8'>Unlock the true potential of your data with Synthwave's comprehensive data analyst services. We help you turn raw data into actionable insights for informed decision-making.
In today's data-driven world, organizations are awash in a sea of information. However, extracting valuable insights from this vast amount of data can be a daunting task. That's where our team of experienced data analysts comes in. We provide comprehensive data analytics services that help businesses transform their data into actionable insights, driving strategic decision-making and fueling growth.</p>

          <button className='px-6 py-3 bg-[#178573] text-white rounded-md border border-white'>Get Started</button>
        </div>

        <div className='w-1/3'>
            <img src={analytics} alt="" className='w-full h-full object-cover'/>
        </div>
      </div>

      <h1 className='text-center text-3xl font-bold'>Subsections</h1>
      {/* subsections -container  */}
      <div className='px-24 py-16 grid grid-cols-4 gap-10 '>
        {
          analystData.map((element)=>{
            return (
              <div className='teal-gradient border border-white rounded-2xl p-8 ' key={element.heading}>

                <h2 className='text-2xl text-white font-semibold'>{element.heading}</h2>
                <p className='my-6 leading-6'>{element.content}</p>

                <button className='px-6 py-2 bg-[#178573] text-white rounded-md border border-white'>Learn More</button>

              </div>
            )
          })
        }
      </div>

      {/* ML/AI service */}
      <div className='px-20 py-24 flex items-center w-full justify-around '>
        
        <div className='w-4/7'>
            <img src={ai} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='w-1/2 h-full '>
          <h1 className='font-bold text-5xl text-white'> ML/AI-Based Services</h1>
          <p className='my-12 leading-8'>Experience the transformational power of machine learning and artificial intelligence with Synthwave Technologies's expert services. We tailor ML/AI solutions to your specific needs.In today's rapidly evolving technological landscape, Machine Learning (ML) and Artificial Intelligence (AI) are transforming industries, optimizing processes, and driving innovation. At Synthwave Technologies, we specialize in providing cutting-edge ML/AI-based services that empower businesses to harness the power of these technologies and achieve their goals.
Our team of experienced ML/AI engineers and data sci</p>

          <button className='px-6 py-3 bg-[#AD906E] text-white rounded-md border border-white'>Get Started</button>
        </div>

      </div>


      <h1 className='text-center text-3xl font-bold'>Subsections</h1>
      {/* subsections -container  */}
      <div className='px-24 py-16 grid grid-cols-4 gap-10 '>
        {
          aiData.map((element)=>{
            return (
              <div className='gold-gradient border border-white rounded-2xl p-8 ' key={element.heading}>

                <h2 className='text-2xl text-white font-semibold'>{element.heading}</h2>
                <p className='my-6 leading-6'>{element.content}</p>

                <button className='px-6 py-2 bg-[#AD906E] text-white rounded-md border border-white'>Learn More</button>

              </div>
            )
          })
        }
      </div>



    </div>
  )
}

export default Services