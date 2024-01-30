"use client"

import useContactForm from '@/hooks/useContactForm'
import React from 'react'

function ContactForm() {
  const { sendEmail, contactForm, setContactForm, form } = useContactForm()

  return (
    <form ref={form} onSubmit={sendEmail} className='bg-[#393939] py-12 flex flex-col items-center'>
      <p className='text-2xl text-white my-2 font-semibold'>Get in touch</p>
      <input className='w-4/5 p-2 text-black mt-2' type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} placeholder='NAME' name="user_name" />
      <input className='w-4/5 p-2 text-black mt-2' type="text" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} placeholder='EMAIL' name="user_email" />
      <textarea className='w-4/5 h-36 p-2 text-black mt-2' value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} placeholder='Message' name="message" />
      <input type="submit" className='w-4/5 bg-[#BB1A1A] text-white p-2 text-xl mt-2 hover:bg-red-300 cursor-pointer' value="Submit Message" />
    </form>
  )
}

export default ContactForm