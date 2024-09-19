import React from 'react'
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiFlashlightLine } from "react-icons/ri";
import { FaRegShareSquare } from "react-icons/fa";
import { RiChatSmile2Line } from "react-icons/ri";
import { LuCommand } from "react-icons/lu";
import { TbBubblePlus } from "react-icons/tb";

function Features() {
  return (
    <div className='py-12'>
      <div className='flex flex-col gap-4 items-center'>
        <p className='text-[#6941C6] text-center font-semibold'>Features</p>
        <p className='text-center text-4xl font-semibold'>Analytics that feels like it&apos;s from the future</p>
        <p className='text-[#475467] text-center w-4/6'>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full max-w-7xl mt-10'>
        
        <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <IoChatbubblesOutline size={24} />
          </div>
          <div className='font-semibold'>Share team inboxes</div>
          <div className='text-[#475467] mt-2'>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
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
        </div>

       
        <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <FaRegShareSquare size={24} />
          </div>
          <div className='font-semibold'>Manage your team with reports</div>
          <div className='text-[#475467] mt-2'>
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
          </div>
        </div>

       
        <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <RiChatSmile2Line size={24} />
          </div>
          <div className='font-semibold'>Connect with customers</div>
          <div className='text-[#475467] mt-2'>
            Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
          </div>
        </div>

        
        <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <LuCommand size={24} />
          </div>
          <div className='font-semibold'>Connect the tools you already use</div>
          <div className='text-[#475467] mt-2'>
            Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
          </div>
        </div>

        
        <div className='flex flex-col items-center text-center w-full p-4 border border-gray-200 rounded-lg'>
          <div className='p-2 border border-gray-300 rounded-md mb-4'>
            <TbBubblePlus size={24} />
          </div>
          <div className='font-semibold'>Our people make the difference</div>
          <div className='text-[#475467] mt-2'>
            We&apos;re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
