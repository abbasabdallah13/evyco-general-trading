import React from 'react'
import { contactInfo } from '../../public/data/data'

function ContactUs() {
  return (
    <div className='p-2 bg-white text-black py-12'>
      <p className='text-center text-2xl font-semibold'>Contact us</p>
      <div className='flex flex-col items-center'>
      {
        contactInfo.map((item, i) => (
          <>
            { i < 3 ? (
            <a href={item.href} key={i} className='flex items-center mt-3 w-[310px] md:min-w-[330px] active:underline'>
              <span className={`${i === 1 ? 'text-[1.5rem]' : 'text-3xl'} w-10 h-10 bg-red-600 shadow-lg text-white p-2 text-3xl rounded-full flex justify-center items-center`}>{item.icon}</span>
              <span className='font-bold ml-2'>{item.title}:</span>
              <span className="ml-[2px]">{item.value}</span>
            </a>
            ) : (
            <div key={i} className='flex items-center mt-3 w-[310px] md:min-w-[330px]'>
              <span className={`${i === 1 ? 'text-[1.5rem]' : 'text-3xl'} w-10 h-10 bg-red-600 shadow-lg text-white p-2 text-3xl rounded-full flex justify-center items-center`}>{item.icon}</span>
              <span className='font-bold ml-2'>{item.title}:</span>
              <span className="ml-[2px]">{item.value}</span>
            </div>
            )}
          </>
        ))
      }
      </div>
    </div>
  )
}

export default ContactUs