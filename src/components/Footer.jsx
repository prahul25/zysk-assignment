import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className=' mt-20'>
      <div className='grid text-center md:grid-cols-6 grid-cols-2'>
        <div className='flex flex-col gap-2 text-[#242932] mb-10'>
          <p className='mb-4 text-[#667085]'>Product</p>
          <p>Overview</p>
          <p>Features</p>
          <p>Solutions</p>
          <p>Tutorials</p>
          <p>Pricing</p>
          <p>Releases</p>
        </div>
        <div className='flex flex-col gap-2 text-[#242932] mb-10'>
        <p className='mb-4 text-[#667085]'>Company</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Press</p>
          <p>News</p>
          <p>Media kit</p>
          <p>Contact</p>
          

        </div>
        <div className='flex flex-col gap-2 text-[#242932] mb-10'>
        <p className='mb-4 text-[#667085]'>Resources</p>
          <p>Blog</p>
          <p>Newsletter</p>
          <p>Events</p>
          <p>Help center</p>
          <p>Tutorial</p>
          <p>Support</p>
        </div>
        <div className='flex flex-col gap-2 text-[#242932] mb-10'>
        <p className='mb-4 text-[#667085]'>Use cases</p>
          <p>Startups</p>
          <p>Enterprise</p>
          <p>Government</p>
          <p>SaaS center</p>
          <p>Marketplaces</p>
          <p>Ecommerce</p>
          
        </div>
        <div className='flex flex-col gap-2 text-[#242932] mb-10'>
        <p className='mb-4 text-[#667085]'>Social</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Facebook</p>
          <p>GitHub</p>
          <p>AngelList</p>
          <p>Dribble</p>
         
        </div>
        <div className='flex flex-col gap-2 text-[#242932] mb-10'>
        <p className='mb-4 text-[#667085]'>Legal</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
          <p>Licences</p>
          <p>Settings</p>
          <p>Contact</p>
          
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center px-10 md:px-20 py-10'>
        <div className='flex items-center'>
          <Image src="/Logomark.png" alt='Logo' width={40} height={30}/>
          <p className='font-bold text-lg px-1'>
            Unititled UI
          </p>
          </div>
          <div className='text-[#667085]'>© 2077 Untitled UI. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer