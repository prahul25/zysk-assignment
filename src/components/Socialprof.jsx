import Image from 'next/image'
import React from 'react'

function Socialprof() {
  return (
    <div className='flex flex-col items-center py-14'>
      <div className='text-[#475467] tracking-wide '>Join 4,000+ companies already growing</div>
      <div className='flex gap-6 py-8'>
        <div className='flex gap-2 items-center text-2xl font-semibold'>
          <Image src="/Boltshift.png" height={40} width={40} alt='Boltshift'/>
          Boltshift
        </div>
        <div className='flex gap-2 items-center text-2xl font-semibold'>
          <Image src="/Lighthouse.png" height={40} width={40} alt='Boltshift'/>
          Lightbox
        </div>
        <div className='flex gap-2 items-center text-2xl font-semibold'>
          <Image src="/FeatherDev.png" height={40} width={40} alt='Boltshift'/>
          FeatherDev
        </div>
        <div className='flex gap-2 items-center text-2xl font-semibold'>
          <Image src="/spehrule.png" height={40} width={40} alt='Boltshift'/>
          Spherule
        </div>
        <div className='flex gap-2 items-center text-2xl font-semibold'>
          <Image src="/GlobalBank.png" height={40} width={40} alt='Boltshift'/>
          GlobalBank
        </div>
        <div className='flex gap-2 items-center text-2xl font-semibold'>
          <Image src="/Neitze.png" height={40} width={40} alt='Boltshift'/>
          Nietzsche
        </div>
        
      </div>
    </div>
  )
}

export default Socialprof