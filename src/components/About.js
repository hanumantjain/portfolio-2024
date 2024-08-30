import React from 'react'
import { IoEyeSharp } from "react-icons/io5"

const About = () => {
  return (
    <div className='flex flex-col'>
        <div className=' text-center py-3 text-5xl'>About <span className='text-yellow-500'>Me</span></div>
        <hr className='py-20 mx-20'/>
        <div>
            <div className='flex justify-between px-20 text-xl'>
                <div className='flex flex-col gap-4 '>
                    <div>Name: <span className=' text-yellow-500'>Hanumant Jain</span></div>
                    <div>Postion: <span className=' text-yellow-500'>Student</span></div>
                    <div>Degree: <span className='text-yellow-500'>MS in CS</span></div>

                </div>
                <div className='flex flex-col gap-4'>
                      <div> Website: <span className='text-yellow-500'> hanumantjain.com</span></div>
                      {/* <h4 className='m-2 head'>{">"} Phone:<span className='font1'> +1 {"("}571{")"} 652 0959</span></h4> */}
                      <div>Location:<span className='text-yellow-500'> Washinton, DC</span></div>
                      {/* <h4 className=' m-2 head'>{">"} Degree:<span className='font1'> MS in CS</span> </h4> */}
                      <div> Email:<span className='text-yellow-500'> hanumantjain939@gmail.com</span></div>
                </div> 
            </div>
        </div>
        <div className=' '>
            <button className='flex items-center justify-center gap-4 rounded-2xl p-1 px-5 text-lg bg-[#1a1a1a] hover:bg-yellow-500'>
                View Resume<span><IoEyeSharp /></span>
            </button>
        </div>
        
    </div>
  )
}

export default About