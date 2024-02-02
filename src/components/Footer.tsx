import Image from 'next/image'
import React from 'react'
import Logo from "../../public/assets/Logo.png"
import { contactInfo, links } from '../../public/data/data'

function Footer() {
  return (
    <div className='flex flex-col bg-[#F4EDED] text-black py-4'>
      <div className='flex items-center justify-center'>
        <Image src={Logo} alt="logo" width={50} height={50} />
        <p className='uppercase ml-2 font-semibold'>evyco general trading</p>
      </div>
      <ul className='flex justify-center'>
        {
          links.map((link, i) => (
            <li key={i} className={`inline-block ${i === 0 ? '' : 'border-l-2 border-black'} px-2 text-xs 3xl:text-base hover:underline`}>
              <a href={link.link}>
                {link.name}
              </a>
            </li>
          ))
        }
      </ul>
      <ul className='flex justify-center flex flex-wrap mt-2 gap-x-2'>
        {
          contactInfo.map((item, i) => (
            <li key={i} className={`text-xs 3xl:text-base`}>
              <label className='underline font-semibold'>{item.title}:</label>
              <span> {item.value}</span>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Footer