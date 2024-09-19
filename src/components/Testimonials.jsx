import Image from 'next/image'
import React from 'react'

function Testimonials() {
  return (
    <div className='flex flex-col items-center gap-8 bg-[#F9FAFB] py-20'>
      <div className='flex items-center gap-2'>
        <Image src="/Testimonials.png" alt='Testimonial Image' width={20} height={20} quality={100}/>
        <p className='font-semibold text-lg'>Sisyphus</p>
      </div>
      <div className='text-2xl md:text-5xl text-center w-9/12'>

       We&apos;ve been using Untitled to kick start every new project and can&apos;t imagine working without it.
      </div>
      <div className='flex flex-col items-center gap-1'>
      <Image src="/Avatar.png" alt='Testimonial Image' width={50} height={50} quality={100}/>
      <p>
        Candice Wu
      </p>
      <p className='text-[#475467]'>
        Product Manager, Sisyphus
      </p>
      </div>
    </div>
  )
}

export default Testimonials