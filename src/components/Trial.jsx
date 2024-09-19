import Image from 'next/image'
import React from 'react'

function Trial() {
  return (
    <div className='flex flex-col items-center gap-8 bg-[#F9FAFB] py-20 mt-20'>
      
      <div className='text-2xl md:text-5xl font-medium text-center w-9/12'>

       Start your free trial
      </div>
      <div className='text-2xl text-[#475467] tracking-wide font-medium text-center w-9/12'>

      Join over 4,000+ startups already growing with Untitled.
      </div>
      <div className='flex md:flex-row justify-center flex-col gap-4 py-4 w-full px-4'>
      <button className='px-6 py-3 flex justify-center items-center border border-gray-200 rounded-lg'>
        Learn more
      </button>
      <button className='px-6 py-3 flex justify-center items-center bg-[#7F56D9] text-white rounded-lg'>
        Get started
      </button>
      </div>
    </div>
  )
}

export default Trial