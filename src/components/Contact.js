import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { IoIosSend } from "react-icons/io"
import { IoIosMail } from "react-icons/io"
import { IoIosPin } from "react-icons/io"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const form = useRef()

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.")
            return
        }

        setName("")
        setEmail("")
        setMessage("")

        emailjs.sendForm('service_1zwtb1o', 'template_2trnvf8', form.current, 'w8ZY_7yR9WdT_-Zu5')
            .then((result) => {
                alert("Message Sent!")
            }, (error) => {
                alert("Error - Message not sent!")
            })
    }

    return (
        <div id='contact' className='mt-40 text-xl min-h-screen 2xl:text-2xl'>
            <div className='flex flex-col gap-4'>
                <div className='text-center text-5xl'>Contact <span className='text-yellow-500'>Me</span></div>
                <hr className='mx-10 lg:mx-20'/>
            </div>
            <div className='flex flex-col gap-20 lg:flex-row lg:justify-between pt-20 mx-10 lg:mx-20'>
                <div className='flex flex-col gap-3'>
                    <div className='text-3xl '>Contact Information</div>
                    <div className='flex gap-2 items-center'><IoIosMail /><span className=' text-yellow-500'>hanumantjain939@gmail.com</span></div>
                    <div className='flex gap-2 items-center '><IoIosPin /><span className=' text-yellow-500'> Washington, DC</span></div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <form ref={form} onSubmit={sendEmail} >
                        <div className='flex flex-col gap-5'>
                            <div className=''>
                                <input type="text"
                                        id='name'
                                        placeholder='Name'
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        name='user_name'
                                        className=' w-full h-10 bg-[#111] rounded-lg py-1 px-3 focus:text-yellow-500' />
                            </div>
                            <div>
                                <input type="email"
                                        id='email'
                                        placeholder='E-mail'
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        name='user_email'
                                        required
                                        className=' w-full h-10 bg-[#111] rounded-lg  py-1 px-3 focus:text-yellow-500' />
                            </div>
                            <div>
                                <textarea name="message" 
                                          id="message"
                                          placeholder='Message'
                                          required
                                          onChange={e => setMessage(e.target.value)}
                                          value={message}
                                          className=' w-full h-32 bg-[#111] rounded-lg py-1 px-3 focus:text-yellow-500'></textarea>
                            </div>
                        </div>
                        <div className="flex justify-center p-2 w-full pt-5 ">
                            <button className='flex items-center justify-center gap-4 rounded-3xl p-2 px-8 bg-[#1a1a1a] hover:bg-yellow-500'>
                              Send <span><IoIosSend /></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
