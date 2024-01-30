"use client"

import React from 'react'
import useContactForm from '@/hooks/useContactForm';
import { contactInfo } from '../../public/data/data';

function ContactSectionLG() {
    const { sendEmail, contactForm, setContactForm, form } = useContactForm()
  return (
    <div className='hidden lg:flex items-center relative bg-[#393939] my-36 h-[70vh]'>
        <form ref={form} onSubmit={sendEmail} className='w-1/2 2xl:h-4/5 p-4 flex flex-col items-center justify-around'>
            <p className='text-xl xl:text-3xl text-white my-2'>Get in touch</p>
            <input className='w-4/5 p-2 text-black mt-2 2xl:h-20 2xl:text-base 3xl:text-3xl' type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} placeholder='NAME' name="user_name" />
            <input className='w-4/5 p-2 text-black mt-2 2xl:h-20 2xl:text-base 3xl:text-3xl' type="text" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} placeholder='EMAIL' name="user_email" />
            <textarea className='w-4/5 h-36  2xl:h-44 p-2 text-black mt-2 2xl:text-base 3xl:text-3xl' value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} placeholder='Message' name="message" />
            <input type="submit" className='w-4/5 bg-[#BB1A1A] text-white p-2 3xl:p-6 text-xl 2xl:text-base 3xl:text-3xl mt-2 hover:bg-red-300 cursor-pointer' value="Submit Message" />
        </form>

        <div className='w-1/2 flex justify-center'>
            <div className='h-[80vh] relative w-[75%] max-w-[384px] 2xl:max-w-[420px] 3xl:min-w-[480px] p-2 bg-[#BB1A1A] text-white p-2 min-[2800px]:flex min-[2800px]:flex-col min-[2800px]:justify-center'>
                <p className='text-center text-3xl mt-14 2xl:mt-32 3xl:mt-48 min-[2800px]:mt-0 3xl:text-4xl'>Contact us</p>
                <div className='flex flex-col items-center mt-14'>
                {
                    contactInfo.map((item, i) => (
                    <div key={i} className='flex items-center mt-3 w-[310px] md:min-w-[330px] 2xl:w-full 2xl:text-base 3xl:text-2xl'>
                        <div className='w-10 h-10 bg-black p-2 text-3xl rounded-full flex justify-center items-center'>{item.icon}</div>
                        <p className='font-bold ml-2'>{item.title}:</p>
                        <p className="ml-[2px]">{item.value}</p>
                    </div>
                    ))
                }
                </div>
            </div>
        </div>        
    </div>
  )
}

export default ContactSectionLG