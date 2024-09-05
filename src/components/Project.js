import React from 'react'
import projectData from '../utils/ProjectData'

const Project = () => {
  return (
    <div id='hanumant jain projects' className='mt-40'>
      <div className='flex flex-col gap-4 pb-20'>
        <div className='text-center text-5xl'>
          My <span className='text-red-500'>Projects</span>
        </div>
        <hr className='mx-10 lg:mx-20'/>
      </div>
      <div className='mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-20'>
        {projectData.slice().reverse().map((project) => (
          <div
            key={project.id}
            className='flex flex-col border-2 border-white h-auto rounded-xl relative overflow-hidden '
          >
            <div className='bg-white h-4 rounded-t-md 2xl:h-6'>
              <div className='flex gap-1 absolute left-2 top-0.5 2xl:top-1.5'>
                <div className='bg-red-500 w-2 h-2 rounded-full 2xl:h-3 2xl:w-3'></div>
                <div className='bg-red-500 w-2 h-2 rounded-full 2xl:h-3 2xl:w-3'></div>
                <div className='bg-red-500 w-2 h-2 rounded-full 2xl:h-3 2xl:w-3'></div>
              </div>
              <div className='absolute bg-gray-400 w-32 lg:w-56 h-2 rounded-full top-0.5 left-16 lg:left-24 2xl:top-1.5 2xl:h-3'></div>
              <div className='absolute border border-gray-500 w-1.5 h-1.5 right-2.5 top-1 2xl:h-3 2xl:w-3'></div>
            </div>
            <div className='relative cursor-pointer'>
              <img src={project.image} alt={project.alt} className='w-full h-auto object-cover hover:blur-md transition duration-300 opacity-70' />
              <div className='absolute top-0 right-0 w-full h-full flex flex-col justify-evenly bg-black p-4 bg-opacity-80 opacity-0 hover:opacity-100 transition duration-300'>
                <div className='flex flex-col items-center gap-2 text-xs lg:text-lg'>
                  <div className='text-red-500 text-lg font-bold'>{project.name}</div>
                  <div>{project.description}</div>
                    <div className='flex gap-8'>
                        <a href={project.website} className=" text-red-500" target='_blank' rel="noreferrer">Demo</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project
