import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaCartShopping } from 'react-icons/fa6'

export default function Header() {
  return (
    <div className=" bg-blue-900 shadow-xl py-1">

        <div className='xl:max-w-[90%] mx-auto text-white px-4'>
            <div className='flex justify-between items-center'>
                <div className="">
                    <h1 className='text font-bold text-2xl ' style={{}}>MAGFOOTBALL</h1>
                </div>
                <div className="flex items-center md:gap-4 gap-2">
                    <div className="relative">
                        <FaCartShopping className='mt-1'/>
                        <p className="text-sm font-medium absolute -top-3 -right-1">0</p>
                    </div>
                    <div className="flex item-center font-medium md:gap-4 gap-2 py-1">
                        <Link to={'/signin'} className='py-1'>Log in</Link>
                        {/* <span>|</span> */}
                        <Link to={'/signup'} className='w-16 text-center uppercase bg-cyan-400 py-1 rounded-full'>Join</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-3">
            <div className="hidde md:block xl:max-w-[90%] mx-auto">
                <div className=" nav flex md:gap-7 gap-4 font-medium justify-center items-center text-[15px] nav">
                    <Link to={'/'} className=' text-white link hover:text-blue-500 duration-200'>Home</Link>
                    <Link to={'/news'} className=' text-white link hover:text-blue-500 duration-200'>News</Link>
                    <Link to={'/gadgets'} className=' text-white link hover:text-blue-500 duration-200'>Gadgets</Link>
                    <Link to={'/bookings'} className=' text-white link hover:text-blue-500 duration-200'>Booking Codes</Link>
                </div>
            </div>
        </div>

    </div>
  )
}
