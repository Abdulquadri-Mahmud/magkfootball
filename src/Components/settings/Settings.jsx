import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaCartShopping, FaUser } from 'react-icons/fa6';
import { IoBagHandleSharp, IoHandLeftOutline } from 'react-icons/io5';
import { TbLogout2 } from 'react-icons/tb';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Settings() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
        <div className="relative parent">
            <CgProfile className='text-2xl'/>
            <div className="child flex flex-col gap-3 absolute right-0 overflow-hidden w-[0px] bg-white text-black z-30 rounded-md font-medium">
                <p className="text-blue-500 flex items-center gap-1 text-center mb-4">Hi {currentUser.username} <IoHandLeftOutline /></p>
                <Link to={`/profile/${currentUser._id}`} className='flex items-center gap-2 hover:text-blue-500 duration-200'><FaUser className='text-blue-500' />My Profile</Link>
                <Link to={'/cart'} className=' flex items-center gap-2 hover:text-blue-500 duration-200'><FaCartShopping className='text-blue-500' />My Carts</Link>
                <Link to={''} className=' flex items-center gap-2 hover:text-blue-500 duration-200'><IoBagHandleSharp className='text-blue-500' />My Wishlists</Link>
                <button className='text- w-full text-start flex items-center gap-2 hover:text-blue-500 duration-200'><TbLogout2 className='text-blue-500'/>Log Out</button>
            </div>
        </div>
    </div>
  )
}
