"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex justify-between h-20 items-center px-4 md:px-20 bg-[#eadcff]'>
      <div className='flex'>
        <div className='flex items-center'>
          <Image src="/Logomark.png" alt='Logo' width={40} height={30}/>
          <p className='font-bold text-lg px-1'>
            Unititled UI
          </p>
        </div>

        <div className='hidden md:flex gap-10 items-center px-6'>
          <p>Home</p>
          <p>Products</p>
          <p>Resources</p>
          <p>Pricing</p>
        </div>
      </div>

      <div className='hidden md:block'>
        <CgProfile className='text-3xl'/>
      </div>

      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-20 bg-[#f3edfd] left-0 w-full bg- flex items-center space-x-4 py-2 justify-around md:hidden'>
          <p>Home</p>
          <p>Products</p>
          <p>Resources</p>
          <p>Pricing</p>
          <div><CgProfile className='text-3xl'/></div>
        </div>
      )}
    </div>
  )
}

export default Navbar;
