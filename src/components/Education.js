import React from 'react'
import { FaGraduationCap } from "react-icons/fa"

const Education = () => {
  return (
    <div id='hanumant jain education' className='mt-40'>
        <div className='flex flex-col gap-4'>
            <div className='text-center text-5xl'>My <span className='text-red-700'>Education</span></div>
            <hr className='mx-10 lg:mx-20'/>
        </div>
        <div className='flex pt-20 flex-col gap-20 lg:flex-row lg:justify-around mx-20'>
            <div className='pl-10 border-l-2 border-white relative text-xl'>
                <FaGraduationCap className='absolute -top-6 -left-5 rounded-full p-2 text-4xl text-center text-white bg-red-700'/>
                <span className='2xl:text-2xl'>2023 - 2025</span>
                <h3 className='2xl:text-2xl'>MS in CS</h3>
                <p className='2xl:text-2xl'>George Washington University</p>
            </div>
            <div className='pl-10 border-l-2 border-white relative text-xl'>
                <FaGraduationCap className='absolute -top-6 -left-5 rounded-full p-2 text-4xl text-center text-white bg-red-700'/>
                <span className='2xl:text-2xl'>2018 - 2022</span>
                <h3 className='2xl:text-2xl'>BE in CS</h3>
                <p className='2xl:text-2xl'> Savitribai Phule Pune University</p>
            </div>
        </div>
    </div>
  )
}

export default Education