import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaCartShopping } from 'react-icons/fa6'

export default function Header() {
  return (
    <div className=" bg-blue-700 shadow-md py-2">

        <div className='xl:max-w-[90%] mx-auto text-white px-4'>
            <div className='flex justify-between items-center'>
                <div className="">
                    <h1 className='text font-bold text-xl ' style={{}}>MAGFOOTBALL</h1>
                </div>
                <div className="flex items-center gap-2">
                    <FaCartShopping />
                    <div className="flex item-center gap-1">
                        <Link to={'/'}>Sign up</Link>
                        <span>|</span>
                        <Link to={'/'}>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="">
            <div className="hidde md:block xl:max-w-[90%] mx-auto">
                <div className=" nav flex gap-3 justify-center items-center text-[15px] nav">
                    <Link to={'/'} className=' text-white link hover:text-blue-500 duration-200'>Home</Link>
                    <Link to={'/'} className=' text-white link hover:text-blue-500 duration-200'>Booking Codes</Link>
                    <Link to={'/'} className=' text-white link hover:text-blue-500 duration-200'>News</Link>
                    <Link to={'/'} className=' text-white link hover:text-blue-500 duration-200'>Gadgets</Link>
                </div>
            </div>
        </div>

    </div>
  )
}
