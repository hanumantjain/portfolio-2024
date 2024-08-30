import React from 'react'
import { FaGraduationCap } from "react-icons/fa"

const Education = () => {
  return (
    <div id='education' className='mt-40 px-20'>
        <div className='flex flex-col gap-4'>
            <div className='text-center text-5xl'>My <span className='text-yellow-500'>Education</span></div>
            <hr className=''/>
        </div>
        <div className='flex pt-20 justify-between'>
            <div className='pl-10 border-l-2 border-white relative text-xl'>
                <FaGraduationCap className='absolute -top-6 -left-5 rounded-full p-2 text-4xl text-center text-white bg-yellow-500'/>
                <span>2023 - 2025</span>
                <h3>MS in CS</h3>
                <p>George Washington University</p>
            </div>
            <div className='pl-10 border-l-2 border-white relative text-xl'>
                <FaGraduationCap className='absolute -top-6 -left-5 rounded-full p-2 text-4xl text-center text-white bg-yellow-500'/>
                <span>2018 - 2022</span>
                <h3>BE in CS</h3>
                <p>Savitribai Phule Pune University</p>
            </div>
        </div>
    </div>
  )
}

export default Education