import React from 'react'
import { Link } from 'react-scroll'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-10 text-center'>
        <div>
            <h1>Hanumant Jain</h1>
        </div>
        <div className='flex flex-col gap-4 px-5'>
            <Link className='cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500' to="about" spy={true} smooth={true} offset={-40} duration={500}>About</Link>
            <Link className='cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500' to="skills" spy={true} smooth={true} offset={-40} duration={500}>Skills</Link>
            <Link className='cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500' to="education" spy={true} smooth={true} offset={-40} duration={500}>Education</Link>
            <Link className='cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500' to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projects</Link>
            <Link className='cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-yellow-500' to="contact" spy={true} smooth={true} offset={-40} duration={500}>Contact</Link>
        </div>
        <div>
            <div>Get In Touch</div>
            <div className='flex gap-12 justify-center mt-5 text-2xl'>
            <a href="https://github.com/hanumantjain" target='_blank' rel="noreferrer"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/hanumant-jain-621745173" target='_blank' rel="noreferrer" ><AiFillLinkedin /></a>
            <a href="https://instagram.com/hanu_0108?igshid=NzZlODBkYWE4Ng==" target='_blank' rel="noreferrer"><AiFillInstagram /></a>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar