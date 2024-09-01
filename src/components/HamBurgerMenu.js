import React, { useState } from 'react'
import { Link } from "react-scroll"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HamBurgerMenu = () => {
    const [isSmallScreen, setSmallScreen] = useState(false)
    const toggleMenu  = () => {
        setSmallScreen(!isSmallScreen)
    }
    const handleClick = () => {
        setSmallScreen(false)
    }

    return (
        <div>
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-2xl" aria-label="Open menu">
                    <span><RxHamburgerMenu /></span>
                </button>
            </div>
            {isSmallScreen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center lg:hidden h-screen">
                    <button onClick={toggleMenu} className="absolute top-10 right-20 text-white text-2xl" aria-label="Close menu">
                        <span><IoClose /></span>
                    </button>
                    <div className="flex flex-col w-full items-center text-center gap-6 text-lg text-white">
                        <Link className='w-1/2 cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-red-700 2xl:text-2xl' onClick={handleClick} to="home" spy={true} smooth={true} offset={-40} duration={500}>Home</Link>
                        <Link className='w-1/2 cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-red-700 2xl:text-2xl' onClick={handleClick} to="about" spy={true} smooth={true} offset={-40} duration={500}>About</Link>
                        <Link className='w-1/2 cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-red-700 2xl:text-2xl' onClick={handleClick} to="education" spy={true} smooth={true} offset={-40} duration={500}>Education</Link>
                        <Link className='w-1/2 cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-red-700 2xl:text-2xl' onClick={handleClick} to="skills" spy={true} smooth={true} offset={-40} duration={500}>Skills</Link>
                        <Link className='w-1/2 cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-red-700 2xl:text-2xl' onClick={handleClick} to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projects</Link>
                        <Link className='w-1/2 cursor-pointer rounded-2xl p-1 text-xl bg-[#1a1a1a] hover:bg-red-700 2xl:text-2xl' onClick={handleClick} to="contact" spy={true} smooth={true} offset={-40} duration={500}>Contact</Link>
                    </div>
                    <div className='mt-10 flex flex-col text-center gap-2'>
                        <div className='text-2xl'>Get In Touch</div>
                        <div className='flex gap-12 justify-center mt-5 text-2xl'>
                            <a href="https://github.com/hanumantjain" target='_blank' rel="noreferrer"><AiFillGithub /></a>
                            <a href="https://www.linkedin.com/in/hanumant-jain-621745173" target='_blank' rel="noreferrer" ><AiFillLinkedin /></a>
                            <a href="https://instagram.com/hanu_0108?igshid=NzZlODBkYWE4Ng==" target='_blank' rel="noreferrer"><AiFillInstagram /></a>
                        </div>
                    </div>
                </div>

            )}
            
        </div>
    )
}

export default HamBurgerMenu
