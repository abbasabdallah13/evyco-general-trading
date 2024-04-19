import React from 'react'
import computerImg from '../../public/assets/computer-picture.png'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex flex-col items-center lg:h-screen z-[-1] w-full mt-[88px] lg:mt-0'>
      <div className='relative w-full h-full'>
        <div className='bg-black opacity-50 absolute top-0 left-0 w-full h-full'></div>
        <Image className='w-full h-full max-h-full' src={computerImg} alt="computer" />
      </div>
      <div className='text-center lg:absolute lg:text-white lg:right-16 lg:top-72'>
        <p className='font-merriweather-sans font-semibold lg:font-normal text-lg lg:text-6xl'>Connecting Markets, <br className='hidden lg:block' />Creating Value</p>
        <p className='font-michroma font- text-2xl lg:text-5xl lg:mt-4'>Welcome to Evyco</p>
      </div>
      <hr className='border-[1.2px] border-black w-[90%] m-4 lg:hidden'/>
    </div>
  )
}

export default Header