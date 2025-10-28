import { Icon } from '@iconify/react';
import React from 'react'
import Form from './Form';

const Contact = () => {

const year = new Date().getFullYear();

  return (
    <div className="h-auto md:min-h-screen lg:min-h-screen xl:h-auto py-4 px-8">
      <div className="flex justify-between">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Fill The Form Out</span>
        </p>
        <p className="font-semibold text-2xl">
          <span>&copy;</span>
          {year}
        </p>
      </div>
      <div className="flex rounded-md bg-red-200 w-32 h-10 justify-center text-center items-center gap-2 p-2 mt-20">
        <Icon icon="ph:paper-plane-tilt" className="w-4 h-4 text-[#5b1219] font-bold" />
        <p className="text-[#5b1219] text-sm font-semibold">Contact Now</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-2">
        <div className='space-y-4'>
          <h1 className='text-7xl font-bold'>Let&apos;s Connect</h1>
          <p className='font-semibold text-lg text-gray-500'>Let’s create something amazing together! Reach out <br /> I’d love to hear about your project and ideas.</p>
          <hr className='text-gray-200 w-3/4' />
          <p className="flex items-center gap-1">
            <span>
              <Icon
                icon="lucide:map-pin"
                className="w-10 h-8 text-[#5b1219]"
              />
            </span>{" "}
            <span className="font-bold text-3xl">Address</span>
          </p>
          <p className="ml-8 font-semibold text-lg text-gray-500 mb-4">Lagos, Nigeria</p>
          <hr className='text-gray-200 w-3/4' />
        </div>
        <Form />
      </div>
      <div>
      </div>
    </div>
  )
}

export default Contact