"use client"

import React, { useState } from 'react'
import Logo from "../../public/assets/Logo.png"
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from 'next/link';
import { links } from '../../public/data/data';

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-full bg-black/75 p-2 flex justify-between items-center z-20'>
        <Link href="/" className='lg:ml-4'>
          <div className='flex gap-x-2 items-center'>
            <Image className='2xl:w-20 2xl:h-20 3xl:w-28 3xl:h-28' src={Logo} alt="logo" width={52} height={52} />
            <p className='hidden lg:block text-white uppercase text-base 2xl:text-base 3xl:text-lg'>Evyco general trading</p>
          </div>
        </Link>
      {/* burger menu and sidebar that is visible by default, hidden on large screens */}
      <RxHamburgerMenu 
        className='text-white text-4xl lg:hidden'
        onClick={() => setSidebar(true)}
      />
      {
        sidebar && (
          <div className='lg:hidden fixed top-0 right-0 w-1/2 bg-[#4A4C4F] h-screen p-2 z-10'>
            <IoIosCloseCircleOutline 
              className='text-white text-3xl absolute top-2 right-2'
              onClick={() => setSidebar(false)} 
            />
            <ul className='mt-12'>
              {
                links.map((link, i) => (
                  <li key={i} className='mt-8'>
                    <a 
                      className='text-white text-2xl'
                      href={link.link}
                    >
                      {link.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
      {/* navlinks hidden by default, visible on large screens */}
      <ul className='hidden lg:block'>
        {
          links.map((link, i) => (
            <li key={i} className={`${i === 2 && 'mr-8'} inline-block ml-8 hover:underline`}>
              <a 
                className='text-white text-normal 2xl:text-base 3xl:text-lg'
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))
        }
      </ul>


    
    
    </div>
  )
}

export default Navbar