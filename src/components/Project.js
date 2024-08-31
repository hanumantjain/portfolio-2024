import React from 'react'
import img from '../assets/img1.png'


const Project = () => {
    
  return (
    <div id='projects' className='mt-40'>
        <div className='flex flex-col gap-4 pb-10'>
            <div className='text-center text-5xl'>My <span className='text-red-700'>Projects</span></div>
            <hr className='mx-10 lg:mx-20'/>
        </div>
        <div className='mx-20'>
            <div className='border-2 border-white w-full lg:w-1/3 h-auto rounded-xl relative overflow-hidden'>
              <div className='bg-white h-4 rounded-t-md '>
                <div className=' flex gap-1 absolute left-2 top-0.5 '>
                  <div className='bg-red-500 w-2 h-2  rounded-full'></div>
                  <div className='bg-red-500 w-2 h-2  rounded-full'></div>
                  <div className='bg-red-500 w-2 h-2  rounded-full'></div>
                </div>
    
                <div className='absolute bg-gray-400 w-32 h-2 rounded-full top-0.5 left-16'></div>
    
                <div className='absolute border border-gray-500 w-1.5 h-1.5 right-2.5 top-1'></div>
              </div>
              <div className='relative cursor-pointer hover:blur-sm'>
                <img src={img} alt="pic" className='w-full h-full object-cover' /> 
                
              </div>
              
              
            </div>
        </div>
        
    </div>
  )
}

export default Project