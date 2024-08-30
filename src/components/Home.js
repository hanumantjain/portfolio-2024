import React from 'react'
import { FaUser } from "react-icons/fa"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div id='home' className='h-screen px-20 content-center text-lg'>
        <h3 className='text-2xl py-2'>HI THERE !</h3>
        <h1 className='text-4xl pb-2'>I'm <span className=' text-yellow-500'>Hanumant Jain</span></h1>
        <p className='pb-3'>
            Highly motivated and result-oriented individual with a passion for implementing
            and launching new projects. Seeking a Software Developer / Web Developer position with a reputed
            firm driven by technology and innovation. Committed to leveraging my skills and
            expertise to contribute to the success of the organization and further advance my
            career in web development.
        </p>
        <Link className='flex items-center justify-center gap-4 rounded-2xl p-1 px-5 text-lg bg-[#1a1a1a] hover:bg-yellow-500' to="about" spy={true} smooth={true} offset={-40} duration={500}>
            Wanna know more about me <span><FaUser /></span>
        </Link>
    </div>
  )
}

export default Home