import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-10 text-center'>
        <div>
            <h1>Hanumant Jain</h1>
        </div>
        <div className='flex flex-col gap-4 px-5'>
            <div className=' rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500'>Home</div>
            <div className=' rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500'>About</div>
            <div className=' rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500'>Education & Experience</div>
            <div className=' rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500'>Projects</div>
            <div className=' rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500'>Contact</div>
        </div>
        <div>
            Get In Touch
        </div>
        
    </div>
  )
}

export default Navbar