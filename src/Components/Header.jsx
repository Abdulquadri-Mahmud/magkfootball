import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import Settings from './settings/Settings'
import { GiSoccerKick } from 'react-icons/gi'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const [cartLength, setCartLength] = useState(0);
    const { items } = useSelector((state) => state.cart);

    useEffect(() => {

        if (items.length >= 1) {
            setCartLength(items.length);
            return;
        }else{
            setCartLength(0);
        }

    })
    
  return (
    <div className=" bg-white pt-2 top-0 sticky z-20">
        <div className='xl:max-w-[90%] mx-auto text-gray-800 md:px-0 px-2 '>
            <div className='flex justify-between items-center md:pb-0 pb-2'>
                <div className="">
                    <Link to={'/'}>
                        {/* <img src="/logo.jpg" alt="logo" className='max-w-[150px] rounded-'/> */}
                        <h1 className='text font-bold md:text-2xl text-xl flex items-center'>Magkk <span className="text-blue-800">Football</span> Talk <GiSoccerKick className='text-2xl'/></h1>
                    </Link>
                </div>
                <div className={`flex items-center md:gap-4 ${currentUser ? 'gap-4' : 'gap-2'}`}>
                    <div className="relative">
                        <Link to={'/cart'}>
                            <FaCartShopping className='mt-1 text-xl'/>
                            <p className="text-sm font-medium absolute -top-3 -right-1">{cartLength}</p>
                        </Link>
                    </div>
                    {
                        currentUser ? (
                            <>
                                <Settings/>
                            </>
                        ) : (
                            <div className="font-semibold md:w-16 w-16  text-center uppercase bg-cyan-400 py-1 rounded-full">
                                <Link to={'/signin'} className='py-1'>Log in</Link>
                            </div>
                        )
                    }
                    <div className="">
                        <Link to={'/admin-login'} className=''>
                            <span className="hidden md:block font-semibold">Admin</span>
                            <MdOutlineAdminPanelSettings className='block md:hidden text-2xl text-blue-900'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-2 bg-blue-900 rounded-t-full max-w-md mx-auto text-white">
            <div className="hidde md:block xl:max-w-[90%] mx-auto">
                <div className=" nav flex md:gap-7 gap-4 font-medium justify-center items-center text-[15px] nav">
                    <Link to={'/'} className='link hover:text-blue-500 duration-200'>Home</Link>
                    <Link to='/news' className='link hover:text-blue-500 duration-200'>News</Link>
                    <Link to='/gadgets' className='link hover:text-blue-500 duration-200'>Our Products</Link>
                    <Link to={'/bookings'} className='link hover:text-blue-500 duration-200'>Booking Codes</Link>
                </div>
            </div>
        </div>

    </div>
  )
}
