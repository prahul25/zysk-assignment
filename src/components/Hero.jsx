import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { CgPlayButtonO } from "react-icons/cg";
import Image from 'next/image';

function Hero() {
  return (
    <div className='flex items-center flex-col gap-4 py-12'>
      <div className='bg-[#F9F5FF] text-[#6941C6] text-sm flex p-1 rounded-full gap-3 items-center border border-[#E9D7FE]'>
        <div className='px-2 bg-white rounded-full border border-[#D6BBFB]'>New feature</div>
        <div>Check out the team dashboard</div>
        <div><FaArrowRightLong/></div>
      </div>
      <div className='md:text-6xl text-4xl font-semibold text-center'>Beautiful analytics to grow smarter</div>
      <div className='text-[#475467] text-lg px-4 md:w-6/12 text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</div>
      <div className='flex md:flex-row justify-center flex-col gap-4 py-4 w-full px-4'>
      <button className='px-6 py-3 flex justify-center w-full md:w-28 gap-2 items-center border border-gray-200 rounded-lg'>
        <CgPlayButtonO/>
        Demo
      </button>
      <button className='px-6 py-3 flex justify-center w-full md:w-28 gap-2 items-center bg-[#7F56D9] text-white rounded-lg'>
        Sign up
      </button>
      </div>
      <div className='hidden md:block'>
        <Image src="/Content.png" alt='Desktop Banner' layout='responsive' height={500} width={1200} quality={100} />
      </div>

      {/* Mobile Image (Visible on screens smaller than md) */}
      <div className='block md:hidden'>
        <Image src="/Container.png" alt='Mobile Banner' layout='responsive' height={500} width={600} quality={100} />
      </div>
    </div>
  )
}

export default Hero