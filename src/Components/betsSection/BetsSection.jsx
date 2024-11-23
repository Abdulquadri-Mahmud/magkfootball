import React from 'react'
import { RiVipCrownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function BetsSection() {
  return (
    <div className="mb-10" id='booking'>
        
        <div className="text-center">
            <h1 className='font-medium md:text-4xl text-2xl pb-2'>BETSLIPS</h1>
            <p className="text-sm text-gray-500">We have provided the best and the most accurate bestlip for you</p>
            <p className="text-sm text-gray-500">Click on the link and get started</p>
        </div>

        <div className='mt-4 xl:max-w-[95%] w-[95%] mx-auto flex flex-wrap gap-3 justify-center items-center'>
    
            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md flex justify-center items-center bg-gray-800 ">
                <Link to={'/bet9ja-betslips'}>
                    <div className="text-white">
                        <div className="text-center flex justify-center items-center flex-col gap-2 h-full">
                            <h1 className='text-5xl font-medium text-red-600'>Bet<span className="text-green-600">9ja</span></h1>
                            {/* <p className="font-medium pt-4">Click To See Available <br /> Betslip</p> */}
                        </div>
                    </div>
                </Link>
            </div>

            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md sporty flex justify-center items-center bg-gray-800 ">
                <Link to={'/sporty-betslips'}>
                    <div className=" text-white">
                        <div className="text-center flex justify-center items-center flex-col gap-2 h-full">
                            <h1 className='text-4xl font-medium'>SportyBet</h1>
                            <p className="font-medium pt-4">Click To See Available <br /> Betslip</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md betking flex justify-center items-center bg-gray-800 ">
                <Link to={'/betking-betslips'}>
                    <div className=" text-white">
                        <div className="text-center flex justify-center items-center flex-col gap-2 h-full">
                            <h1 className='text-4xl  font-medium flex'>Bet <span className="relative"><RiVipCrownFill className='absolute -top-5 left-0 text-[26px] text-yellow-400'/><span>K</span></span>ing</h1>
                            <p className="font-medium pt-4">Click To See Available <br /> Betslip</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md xbet flex justify-center items-center bg-gray-800 ">
                <Link to={'/xbet-betslips'}>
                    <div className=" text-white">
                        <div className="text-center flex justify-center items-center flex-col gap-2 h-full">
                            <h1 className='md:text-4xl text-2xl font-medium'>1X<span className="text-cyan-400">BET</span></h1>
                            <p className="font-medium pt-4">Click To See Available <br /> Betslip</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md batano flex justify-center items-end bg-gray-800 ">
                <Link to={'/batano-betslips'}>
                    <div className="text-white">
                        {/* <img src="sporty.jpeg" alt="" className='rounded-md max-w-full'/> */}
                        <div className="text-center flex justify-center items-center flex-col gap-2 h-full">
                            {/* <h1 className='md:text-4xl text-2xl font-medium'>BETANO</h1> */}
                            <p className="font-medium pt-4">Click To See Available <br /> Betslip</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md msport flex justify-center items-end ">
                <Link to={'/msport-betslips'}>
                    <div className="flex justify-center flex-col gap-2 items-center">
                        <h1 className='text-4xl  font-medium text-white'>MSp<span className="text-yellow-400">ort</span></h1>       
                    </div>
                    <div className="text-center flex justify-end items-center flex-col gap-2 h-full">
                        <p className="font-medium pt-4">Click To See Available <br /> Betslip</p>
                    </div>
                </Link>
            </div>

            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md pari flex justify-center items-end ">
                <Link to={'/parimatch-betslips'}>
                    <div className="text-white">
                        <div className="text-center flex justify-end items-center flex-col gap-2 h-full">
                            <p className="font-medium pt-4">Click To See Available <br /> Betslip</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="md:w-[300px] w-[100%] md:h-[250px] h-[200px] rounded-md Tbet flex justify-center items-end ">    
                <Link to={'/22bet-betslips'}>
                    <div className="text-white">
                        {/* <img src="sporty.jpeg" alt="" className='rounded-md max-w-full'/> */}
                        <div className="text-center flex justify-end items-center flex-col gap-2 h-full">
                            {/* <p className="font-medium pt-4">Click To See Available <br /> Betslip</p> */}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
