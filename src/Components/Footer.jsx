import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaNewspaper, FaWhatsapp } from 'react-icons/fa6'
import { IoIosFootball } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { MdContactPhone, MdOutlineAttachEmail } from 'react-icons/md'
import { SiEngadget } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-blue-900 to-blue-950 text-white'>
        <div className="xl:max-w-[90%] w-[97%] flex justify-between flex-col sm:flex-row gap-6 flex-wrap mx-auto md:py-10 py-10 px-3">
            
            <div className="md:w-[350px] w-full">
                <div className="flex items-center gap-1">
                    <div className="animate-spin ball">
                        <IoIosFootball className='text-2xl'/>
                    </div>
                    <h2 className='text-2xl'>About Us</h2>
                </div>
                <p className="pl-3 mt-7 text-sm">Muiz Ayolola also known as MAGkKFOOTBALL, begins is admiring of football analysis from childhood listening to Murphy Ijemba on brilla Fm 88.9, and also in school where we talk mostly about football any given time, I continue to pursue the dream even when I was in university making analysis for local team at OOU and now taking the central stage.</p>
                <Link to={'/about'} className='text-sm pl-3 underline text-blue-500 font-medium'>See more</Link>
                {/*  */}
            </div>

            <div className="">
                <div className="flex items-center gap-2">
                    <div className="">
                        <MdContactPhone className='text-2xl'/>
                    </div>
                    <h2 className='text-2xl'>Contact Us</h2>
                </div>
                <div className="mt-7 pl-3 flex flex-col gap-3 text-sm">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt />
                        <Link to={'tel:+2349073754047'}>+234 907 375 4047</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaWhatsapp />
                        <Link to={'tel:+2349073754047'}>+234 907 375 4047</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineAttachEmail />
                        <Link to={'mailto:abdulquadrimahmud06%gmail.com'}>abdulquadrimahmud06%gmail.com</Link>
                    </div>
                </div>
            </div>

            <div className="md:w-[350px] w-full">
                <div className="flex items-center gap-1">
                    <div className="animate-spin ball">
                        <IoIosFootball className='text-2xl'/>
                    </div>
                    <h2 className='text-2xl'>Fast Links</h2>
                </div>
                <div className="flex flex-col gap-3 mt-7 pl-3 text-sm">
                    <Link to={'/'} className='flex items-center gap-1'><IoHome/> Home</Link>
                    <Link to={'/'} className='flex items-center gap-1'><SiEngadget/> Gadgets</Link>
                    <Link to={'/'} className='flex items-center gap-1'><FaNewspaper/> News</Link>
                    <Link to={'/'} className='flex items-center gap-1'><SiEngadget/> Booking Slips</Link>
                </div>
            </div>

        </div>
        <div className="">
            <p className="text-[12px] text-center">&copy; 2024 MAGKKFOOTBALL </p>
        </div>
    </div>
  )
}
