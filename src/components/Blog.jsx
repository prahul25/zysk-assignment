import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Blog() {
  return (
    <div className='flex flex-col items-center w-full px-4 md:px-28 mt-28'>
      <div className="w-full">
        <div className='flex justify-between items-center w-full mb-4'>
          <p className='text-[#6941C6] font-semibold'>Our blog</p>
          <button className='px-6 py-2 flex justify-center gap-2 items-center bg-[#7F56D9] text-white rounded-lg'>
            View all posts
          </button>
        </div>
        <h2 className='text-3xl font-semibold mb-2'>Latest blog posts</h2>
        <p className='text-[#475467] mb-8'>Tools and strategies modern teams need to help their companies grow.</p>
      </div>
      
      <div className="grid gap-7 grid-cols-1 md:grid-cols-3 mt-8">
        
        <div className='w-full'>
          <Image 
            src="/Blog1.png" 
            alt='UX review presentations' 
            height={1000} 
            width={1000} 
            quality={100} 
            layout='responsive'
          />
          <p className='text-[#6941C6] text-sm font-semibold mt-4'>Design</p>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-lg'>UX review presentations</h3>
            <MdArrowOutward className='h-5 w-5'/>
          </div>
          <p className='text-[#475467] text-[15px]'>
            How do you create compelling presentations that wow your colleagues and impress your managers?
          </p>
          <div className='flex items-center gap-3 mt-4'>
            <Image 
              src="/Profile1.png" 
              alt='Olivia Rhye' 
              height={30} 
              width={30} 
              quality={100}
            />
            <div>
              <p className='font-semibold text-xs'>Olivia Rhye</p>
              <p className='text-[#475467] text-xs'>20 Jan 2024</p>
            </div>
          </div>
        </div>

        
        <div className='w-full'>
          <Image 
            src="/Blog2.png" 
            alt='Migrating to Linear 101' 
            height={1000} 
            width={1000} 
            quality={100} 
            layout='responsive'
          />
          <p className='text-[#6941C6] text-sm font-semibold mt-4'>Product</p>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-lg'>Migrating to Linear 101</h3>
            <MdArrowOutward className='h-5 w-5'/>
          </div>
          <p className='text-[#475467] text-[15px]'>
            Linear helps streamline software projects, sprints, tasks, and bug tracking. Here&apos;s how to get started.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            <Image 
              src="/Profile2.png" 
              alt='Phoenix Baker' 
              height={30} 
              width={30} 
              quality={100}
            />
            <div>
              <p className='font-semibold text-xs'>Phoenix Baker</p>
              <p className='text-[#475467] text-xs'>19 Jan 2024</p>
            </div>
          </div>
        </div>

        
        <div className='w-full'>
          <Image 
            src="/Blog3.png" 
            alt='Building your API stack' 
            height={1000} 
            width={1000} 
            quality={100} 
            layout='responsive'
          />
          <p className='text-[#6941C6] text-sm font-semibold mt-4'>Software Engineering</p>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-lg'>Building your API stack</h3>
            <MdArrowOutward className='h-5 w-5'/>
          </div>
          <p className='text-[#475467] text-[15px]'>
            The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            <Image 
              src="/Profile3.png" 
              alt='Lana Steiner' 
              height={30} 
              width={30} 
              quality={100}
            />
            <div>
              <p className='font-semibold text-xs'>Lana Steiner</p>
              <p className='text-[#475467] text-xs'>18 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;
