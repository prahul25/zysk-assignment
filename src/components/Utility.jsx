import Image from 'next/image'
import React from 'react'
import { FaRegShareSquare } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { RiFlashlightLine } from 'react-icons/ri'

function Utility() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col gap-4 items-center'>
      <p className='text-[#6941C6] text-center font-semibold py-2 px-4 border border-[#cba6ff] bg-[#f6f0ff] rounded-full'>Features</p>
      <p className='text-center text-4xl font-semibold tracking-wide'>Cutting-edge features for advanced analytics</p>
      <p className='text-[#475467] text-center md:w-8/12 px-4 text-[22px]'>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className='mt-16'>
        <Image className="hidden md:block" src="/UtilityImage.png" alt="Utility Image" width={1300} quality={100} height={1000}/>
        <Image className="md:hidden block" src="/UtilityImagesecond.png" alt="Utility Image" width={1300} quality={100} height={1000}/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 px-10 mt-24 md:mt-0 md:px-28'>
      <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <IoChatbubblesOutline size={24} />
          </div>
          <div className='font-semibold'>Share team inboxes</div>
          <div className='text-[#475467] mt-2'>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </div>
          <div className='mt-4 text-[#6941C6] text-sm flex px-2 rounded-full gap-3 items-center'>
            <div>Learn more</div>
            <div><FaArrowRightLong/></div>
          </div>
        </div>

        
        <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <RiFlashlightLine size={24} />
          </div>
          <div className='font-semibold'>Deliver Instant answers</div>
          <div className='text-[#475467] mt-2'>
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </div>
          <div className='mt-4 text-[#6941C6] text-sm flex px-2 rounded-full gap-3 items-center'>
            <div>Learn more</div>
            <div><FaArrowRightLong/></div>
          </div>
        </div>

       
        <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <FaRegShareSquare size={24} />
          </div>
          <div className='font-semibold'>Manage your team with reports</div>
          <div className='text-[#475467] mt-2'>
            Measure what matters with Untitled&apos;s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
          </div>
          <div className='mt-4 text-[#6941C6] text-sm flex px-2 rounded-full gap-3 items-center'>
            <div>Learn more</div>
            <div><FaArrowRightLong/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utility