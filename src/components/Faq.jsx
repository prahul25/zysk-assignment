"use client"
import React from 'react'

import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import Image from 'next/image';

function Faq() {
  const [openItem, setOpenItem] = React.useState(null);

  // Function to handle opening and closing an item
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null); // If the item is already open, close it
    } else {
      setOpenItem(index); // Open the clicked item and close others
    }
  };

  return (
    <div className='flex flex-col items-center mt-32'>
      <div>
        <div className='text-center text-4xl font-semibold tracking-wide'>Frequently asked questions</div>
        <div className='text-[#475467] text-center px-4 text-[22px] mt-6'>Everything you need to know about the product and billing.</div>
      </div>
     
      <div className="flex flex-col w-full max-w-4xl mx-auto mt-16 gap-6 px-4">
        
        <div className="border-b border-gray-300 ">
          <button
            className="flex justify-between items-center w-full py-1 text-left "
            onClick={() => toggleItem(1)}
          >
            <span className="text text-[#101828] font-medium">Is there a free trial available?</span>
            {openItem === 1 ? <GrSubtractCircle  className='h-5 w-5'/> : <IoAddCircleOutline className='h-5 w-5'/>  }
          </button>
          {openItem === 1 && (
            <div className=" text-gray-600 mb-8">
              Yes, we offer a 30-day free trial with full access to all features. You can explore the product thoroughly during this period before committing to a paid plan.
            </div>
          )}
        </div>

       
        <div className="border-b border-gray-300 ">
          <button
            className="flex justify-between items-center w-full py-1 text-left "
            onClick={() => toggleItem(2)}
          >
            <span className="text text-[#101828] font-medium">Can I change my plan later?</span>
            {openItem === 2 ? <GrSubtractCircle  className='h-5 w-5'/> : <IoAddCircleOutline className='h-5 w-5'/>  }
          </button>
          {openItem === 2 && (
            <div className=" text-gray-600 mb-8">
              Absolutely! You can upgrade or downgrade your plan at any time from your account settings, depending on your business needs.
            </div>
          )}
        </div>

       
        <div className="border-b border-gray-300 ">
          <button
            className="flex justify-between items-center w-full py-1 text-left "
            onClick={() => toggleItem(3)}
          >
            <span className="text text-[#101828] font-medium">What is your cancellation policy?</span>
            {openItem === 3 ? <GrSubtractCircle  className='h-5 w-5'/> : <IoAddCircleOutline className='h-5 w-5'/>  }
          </button>
          {openItem === 3 && (
            <div className=" text-gray-600 mb-8">
              You can cancel your subscription at any time, and you will retain access until the end of the current billing cycle.
            </div>
          )}
        </div>

        
        <div className="border-b border-gray-300 ">
          <button
            className="flex justify-between items-center w-full py-1 text-left "
            onClick={() => toggleItem(4)}
          >
            <span className="text text-[#101828] font-medium">Can other info be added to an invoice?</span>
            {openItem === 4 ? <GrSubtractCircle  className='h-5 w-5'/> : <IoAddCircleOutline className='h-5 w-5'/>  }
          </button>
          {openItem === 4 && (
            <div className=" text-gray-600 mb-8">
              Yes, you can add your company&apose;s tax information, billing address, and other details to the invoice from your account settings.
            </div>
          )}
        </div>

        
        <div className="border-b border-gray-300 ">
          <button
            className="flex justify-between items-center w-full py-1 text-left "
            onClick={() => toggleItem(5)}
          >
            <span className="text text-[#101828] font-medium">How does billing work?</span>
            {openItem === 5 ? <GrSubtractCircle  className='h-5 w-5'/> : <IoAddCircleOutline className='h-5 w-5'/>  }
          </button>
          {openItem === 5 && (
            <div className=" text-gray-600 mb-8">
              Billing is monthly or annually, depending on your plan. You&spose;ll receive invoices and can manage payment methods from your account dashboard.
            </div>
          )}
        </div>

        
        <div className="border-b border-gray-300 ">
          <button
            className="flex justify-between items-center w-full py-1 text-left "
            onClick={() => toggleItem(6)}
          >
            <span className="text text-[#101828] font-medium">How do I change my account email?</span>
            {openItem === 6 ? <GrSubtractCircle className='h-5 w-5'/> : <IoAddCircleOutline className='h-5 w-5'/>  }
          </button>
          {openItem === 6 && (
            <div className=" text-gray-600 mb-8">
              You can easily update your email address from your account settings. Just navigate to the profile section and save your new email.
            </div>
          )}
        </div>
      </div>
      <div className='mt-10 bg-[#f1f1f2] w-11/12 md:w-9/12 flex rounded-2xl py-6 flex-col items-center'>
        <div>
          <Image src="/AvatarGroup.png" alt='Avatar Group Image' height={100} width={100} quality={100}/>
        </div>
        <div className='font-semibold text-lg tracking-wide mt-3'>Still have questions?</div>
        <div className='text-[#475467] mt-4 text-center px-4'>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</div>
        <div className='mt-4'>
        <button className='px-6 py-2 flex justify-center gap-2 items-center bg-[#7F56D9] text-white rounded-lg'>
        Get in touch
      </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
