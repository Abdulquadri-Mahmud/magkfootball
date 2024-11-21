import React from 'react'
import { FaRegCopy } from 'react-icons/fa6'
import { RiVipCrownFill } from 'react-icons/ri'

export default function BetKing() {
  return (
    <div className='py-10 bg-zinc-100'>
        <div className="2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">

            <div className="w-[100%] md:h-[220px] h-[200px] rounded-md flex justify-center items-center betking ">
                <div className="text-white">
                    <div className="flex justify-center flex-col gap-1  items-center">
                        <h1 className='text-4xl  font-medium flex'>Bet <span className="relative"><RiVipCrownFill className='absolute -top-5 left-0 text-[26px] text-yellow-400'/><span>K</span></span>ing</h1>
                        <p className="text-4xl font-medium text-cyan-600">BES<span className="text-yellow-400">LIPS</span></p>
                        <p className="text-gray-400 text-sm text-center">Check out our reliable bestlips</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
                <div className="relative flex justify-center flex-wrap items-center py-5 px-3 bg-white rounded-md">
                    <p className="absolute top-2 left-2 text-gray-500 font-medium text-sm">Betslips</p>
                    <h2 className="font-medium py-10 text-3xl cursor-pointer">BHDGSFFJ</h2>
                    <p className="absolute top-2 right-2 text-xl text-gray-500"><FaRegCopy /></p>
                    <div className="">
                        <p className="text-sm text-gray-500 font-medium">22 - Nov - 2024</p>
                    </div>
                </div>
                
                <div className="relative flex justify-center flex-wrap items-center py-5 px-3 bg-white rounded-md">
                    <p className="absolute top-2 left-2 text-gray-500 font-medium text-sm">Betslips</p>
                    <h2 className="font-medium py-10 text-3xl">BHDGSFFJ</h2>
                    <p className="absolute top-2 right-2 text-xl text-gray-500"><FaRegCopy /></p>
                    <div className="">
                        <p className="text-sm text-gray-500 font-medium">22 - Nov - 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
