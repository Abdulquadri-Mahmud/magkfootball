import React from 'react'
import { FaRegCopy } from 'react-icons/fa6'

export default function PariMatch() {
  return (
    <div className='py-10 bg-zinc-100'>
        <div className="2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
            <div className="flex justify-center items-center">
                <h1 className='text-4xl font-medium text-red-600'>PARI<span className="text-green-600">MATCH</span></h1>       
                -<p className="text-4xl font-medium text-red-600">BES<span className="text-green-600">LIPS</span></p>
            </div>
            <p className="text-gray-400 text-sm text-center pt-4">Check out </p>

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
