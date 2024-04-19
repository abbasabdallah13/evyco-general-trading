"use client"

import React, { useState } from 'react'
import Logo from "../../public/assets/Logo.png"
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from 'next/link';
import { links } from '../../public/data/data';
import NavbarDesign from '../../public/assets/navbar-design.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-full bg-white/75 flex justify-between items-center z-20'>
        <Image src={NavbarDesign} alt="black design" width={72} height={72} className='absolute right-0' />
        <Link href="/" className='lg:ml-4'>
          <div className='flex gap-x-2 items-center'>
            <Image className='2xl:w-20 2xl:h-20 3xl:w-28 3xl:h-28' src={Logo} alt="logo" width={72} height={72} />
            <div className='hidden lg:block flex flex-col items-center text-base 2xl:text-base 3xl:text-lg leading-3'>
              <p className='uppercase font-bold text-2xl text-center'>evyco</p>
              <p className='text-sm mr-2 relative text-[#769CB7] font-semibold text-center'>General Trading</p>
              <p className='italic text-[10px] relative mr-2 text-center'>Import Export</p>
            </div>
          </div>
        </Link>
        <div className='flex flex-col items-center lg:hidden relative right-2'>
          <p className='uppercase font-bold text-2xl'>evyco</p>
          <p className='text-sm mr-2 relative bottom-[5px] text-[#769CB7] font-semibold'>General Trading</p>
          <p className='italic text-[10px] relative bottom-[5px] mr-2'>Import Export</p>
        </div>
      {/* burger menu and sidebar that is visible by default, hidden on large screens */}
      <RxHamburgerMenu 
        className='text-gray-300 text-4xl lg:hidden z-10'
        onClick={() => setSidebar(true)}
      />
      {
        sidebar && (
          <div className='lg:hidden fixed top-0 right-0 w-1/2 bg-white h-screen p-2 z-10 border-l-2 border-black'>
            <IoIosCloseCircleOutline 
              className='text-black text-3xl absolute top-2 right-2'
              onClick={() => setSidebar(false)} 
            />
            <ul className='mt-12'>
              {
                links.map((link, i) => (
                  <li key={i} className='mt-12'>
                    <a 
                      className='text-black text-2xl font-semibold active:underline uppercase'
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
                className='text-black text-normal 2xl:text-base 3xl:text-lg'
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