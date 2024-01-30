import React from 'react'
import { contactInfo } from '../../public/data/data'

function ContactUs() {
  return (
    <div className='p-2 bg-[#BB1A1A] text-white py-12'>
      <p className='text-center text-2xl font-semibold'>Contact us</p>
      <div className='flex flex-col items-center'>
      {
        contactInfo.map((item, i) => (
          <div key={i} className='flex items-center mt-3 w-[310px] md:min-w-[330px]'>
            <span className='w-10 h-10 bg-black p-2 text-3xl rounded-full flex justify-center items-center'>{item.icon}</span>
            <span className='font-bold ml-2'>{item.title}:</span>
            <span className="ml-[2px]">{item.value}</span>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default ContactUs