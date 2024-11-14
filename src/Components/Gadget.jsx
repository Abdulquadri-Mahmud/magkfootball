import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { TbCurrencyNaira } from 'react-icons/tb'

export default function Gadget() {
  return (
    <div className='mb-10'>
        <div className="text-center">
            <h1 className='font-medium md:text-4xl text-2xl pb-2'>GADGETS</h1>
            <p className="text-sm text-gray-500">Upgrade your tech game! Explore our top-quality gadgets at unbeatable prices—shop now for the latest in innovation <br /> and style!</p>
        </div>

        <div className="mt-4 xl:max-w-[85%] w-[97%] mx-auto flex justify-center gap-3 flex-wrap">
            <div className="md:w-[200px] w-[180px] shadow-md rounded-md">
                <img src="/ps1.png" className='w-full rounded-md' alt="" />
                <div className="p-3">
                    <h2 className='font-medium pb-4'>PS4 PAD</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-medium flex items-center"><TbCurrencyNaira />40</p>
                        <button className='bg-blue-500 p-1 rounded-full text-white text'><FaCartShopping /></button>
                    </div>
                </div>
            </div>

            <div className="md:w-[200px] w-[180px] shadow-md rounded-md">
                <img src="/ps2.png" className='w-full rounded-md' alt="" />
                <div className="p-3">
                    <h2 className='font-medium pb-4'>PS4 PAD</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-medium flex items-center"><TbCurrencyNaira />40</p>
                        <button className='bg-blue-500 p-1 rounded-full text-white text'><FaCartShopping /></button>
                    </div>
                </div>
            </div>

            <div className="md:w-[200px] w-[180px] shadow-md rounded-md">
                <img src="/ps3.png" className='w-full rounded-md' alt="" />
                <div className="p-3">
                    <h2 className='font-medium pb-4'>PS4 PAD</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-medium flex items-center"><TbCurrencyNaira />40</p>
                        <button className='bg-blue-500 p-1 rounded-full text-white text'><FaCartShopping /></button>
                    </div>
                </div>
            </div>

            <div className="md:w-[200px] w-[180px] shadow-md rounded-md">
                <img src="/ps1.png" className='w-full rounded-md' alt="" />
                <div className="p-3">
                    <h2 className='font-medium pb-4'>PS4 PAD</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-medium flex items-center"><TbCurrencyNaira />40</p>
                        <button className='bg-blue-500 p-1 rounded-full text-white text'><FaCartShopping /></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
