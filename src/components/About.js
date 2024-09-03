import React from 'react'
import { IoEyeSharp } from "react-icons/io5"
import resume from '../assets/hanumant jain Resume.pdf'

const About = () => {
  return (
    <div id='hanumant jain about' className='flex flex-col gap-20 ' >
        <div className='flex flex-col gap-4'>
            <div className=' text-center text-5xl'>About <span className='text-red-700'>Me</span></div>
            <hr className='mx-10 lg:mx-20'/>
        </div>
        <div>
            <div className='flex flex-col lg:flex-row justify-between px-20 text-xl 2xl:text-2xl gap-6'>
                <div className='flex flex-col gap-4 '>
                    <div>Name: <span className=' text-red-700'>Hanumant Jain</span></div>
                    <div>Postion: <span className=' text-red-700'>Student</span></div>
                    <div>Degree: <span className='text-red-700'>MS in CS</span></div>

                </div>
                <div className='flex flex-col gap-4'>
                      <div> Website: <span className='text-red-700'> hanumantjain.com</span></div>
                      {/* <h4 className='m-2 head'>{">"} Phone:<span className='font1'> +1 {"("}571{")"} 652 0959</span></h4> */}
                      <div>Location:<span className='text-red-700'> Washinton, DC</span></div>
                      {/* <h4 className=' m-2 head'>{">"} Degree:<span className='font1'> MS in CS</span> </h4> */}
                      <div> Email:<span className='text-red-700'> hanumantjain939@gmail.com</span></div>
                </div> 
            </div>
        </div>
        <div className='flex justify-center'>
            <a href={resume} target='_blank' rel="noreferrer"><button className='flex items-center justify-center gap-4 rounded-2xl p-2 px-5 text-lg bg-[#282828] hover:bg-red-700 2xl:text-2xl'>
                View Resume<span><IoEyeSharp /></span>
            </button></a>
        </div>
    </div>
  )
}

export default About