import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import Settings from './settings/Settings'
import { GiSoccerKick } from 'react-icons/gi'

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
    <div className=" bg-blue-900 shadow-md py-2 top-0 sticky z-20">

        <div className='xl:max-w-[90%] mx-auto text-white md:px-0 px-2 '>
            <div className='flex justify-between items-center'>
                <div className="">
                    <Link to={'/'}>
                        {/* <img src="/logo.jpg" alt="logo" className='max-w-[150px] rounded-'/> */}
                        <h1 className='text font-bold md:text-2xl text-xl flex items-center'>MagkkFootballTalk <GiSoccerKick className='text-2xl'/></h1>
                    </Link>
                </div>
                <div className={`flex items-center md:gap-4 ${currentUser ? 'gap-4' : 'gap-2'}`}>
                    <div className="relative">
                        <FaCartShopping className='mt-1 text-xl'/>
                        <p className="text-sm font-medium absolute -top-3 -right-1">{cartLength}</p>
                    </div>
                    {
                        currentUser ? (
                            <>
                                <Settings/>
                            </>
                        ) : (
                            <div className="flex item-center font-medium md:gap-4 gap-2 py-1">
                                <Link to={'/signin'} className='py-1'>Log in</Link>
                                {/* <span>|</span> */}
                                <div className="hidden md:block md:w-16 w-16  text-center uppercase bg-cyan-400 py-1 rounded-full">
                                    <Link to={'/signup'} className=''>Join</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

        <div className="pt-2">
            <div className="hidde md:block xl:max-w-[90%] mx-auto">
                <div className=" nav flex md:gap-7 gap-4 font-medium justify-center items-center text-[15px] nav">
                    <Link to={'/'} className=' text-white link hover:text-blue-500 duration-200'>Home</Link>
                    <Link to='/news' className=' text-white link hover:text-blue-500 duration-200'>News</Link>
                    <Link to='/gadgets' className=' text-white link hover:text-blue-500 duration-200'>Gadgets</Link>
                    <Link to={'/bookings'} className=' text-white link hover:text-blue-500 duration-200'>Booking Codes</Link>
                </div>
            </div>
        </div>

    </div>
  )
}
