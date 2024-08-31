import React from 'react'
import { FaUser } from "react-icons/fa"
import { Link } from 'react-scroll'
import Particles from '../utils/Particle'

const Home = () => {
  return (
    <div id='home' className='h-screen px-20 content-center text-lg relative'>
      <Particles className=''/>
      <h3 className='text-2xl py-3 xl:py-4 2xl:text-4xl'>HI THERE !</h3>
      <h1 className='text-4xl pb-3 xl:pb-4 2xl:text-6xl'>
          I'm <span className='text-red-600'>Hanumant Jain</span>
      </h1>
      <p className='pb-4 lg:pb-6 2xl:text-2xl'>
          Highly motivated and result-oriented individual with a passion for implementing
          and launching new projects. Seeking a Software Developer / Web Developer position with a reputed
          firm driven by technology and innovation. Committed to leveraging my skills and
          expertise to contribute to the success of the organization and further advance my
          career in web development.
      </p>
      <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
          <button className='flex items-center justify-center gap-4 rounded-2xl p-1 px-5 text-lg bg-[#1a1a1a] hover:bg-red-700 2xl:text-2xl'>
              Wanna know more about me <span><FaUser /></span>
          </button>
      </Link>
    
      <Link className='fixed lg:right-12 lg:bottom-12 right-8 bottom-10 cursor-pointer' to="home" spy={true} smooth={true} offset={-40} duration={500}>
      <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-rocket-playground-icongeek26-flat-icongeek26.png" alt="external-rocket-playground-icongeek26-flat-icongeek26"/>
      </Link>
</div>
  )
}

export default Home