import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaRegLightbulb } from 'react-icons/fa6'
import { IoIosFootball } from 'react-icons/io'
import { IoDiamond } from 'react-icons/io5'
import { MdOutlineRocketLaunch } from 'react-icons/md'

export default function Section2() {
  return (
    <div className='my-10 xl:max-w-[95%] mx-auto text-black px-4'>
        <div className="flex justify-center gap-3 flex-wrap">
            
            <ScrollAnimation animateIn="fadeIn">
                <div className="relative h-[300px] rounded-md shadow-md border-b-4 border-b-blue-500 p-3 md:w-[350px] w-[100%] text-center">
                    <div className="flex justify-center pb-2">
                        <FaRegLightbulb className='text-5xl text-blue-500 animate-pulse'/>
                    </div>
                    <h1 className="md:text-[2rem] text-[1.7rem] font-medium mb-2">Our <span className="text-blue-500">Mission</span></h1>
                    <div className="absolute top-2 right-2 animate-spin ball">
                        <IoIosFootball className='text-blue-900 text-[2rem]'/>
                    </div>
                    <p className="">Our mission is to provide accurate, real-time sports news, expert insights, and responsible betting information that empowers sports fans and bettors to make well-informed, confident decisions, fostering a global community of passionate, engaged sports lovers.</p>
                </div>
            </ScrollAnimation> 
            
            <ScrollAnimation animateIn="fadeIn">    
                <div className="relative h-[300px] rounded-md shadow-md border-b-4 border-b-blue-500 p-3 md:w-[350px] w-[100%] text-center">
                    <div className="flex justify-center pb-2">
                        <MdOutlineRocketLaunch className='text-5xl text-blue-500 animate-pulse'/>
                    </div>
                    <h1 className="md:text-[2rem] text-[1.7rem] font-medium mb-2">Our <span className="text-blue-500">Vission</span></h1>
                    <div className="absolute top-2 right-2 animate-spin ball">
                        <IoIosFootball className='text-blue-900 text-[2rem]'/>
                    </div>
                    <p className="">To be the most trusted, insightful, and engaging platform for sports enthusiasts and betting professionals, inspiring informed, responsible, and thrilling sports experiences worldwide.</p>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">    
                <div className="relative h-[300px] rounded-md shadow-md border-b-4 border-b-blue-500 p-3 md:w-[350px] w-[100%] text-center">
                    <div className="flex justify-center pb-2">
                        <IoDiamond className='text-5xl text-blue-500 animate-pulse'/>
                    </div>
                    <h1 className="md:text-[2rem] text-[1.7rem] font-medium mb-2">Our <span className="text-blue-500">Value</span></h1>
                    <p className="">Providing unbiased, honest, and reliable sports news and betting information.</p>
                    <p className=""> Ensuring clear and fair communication, especially around betting odds, risks, and rewards.</p>
                    <div className="absolute top-2 right-2 animate-spin ball">
                        <IoIosFootball className='text-blue-900 text-[2rem]'/>
                    </div>
                    {/* <p className="">Leveraging technology to offer interactive and immersive sports and betting experiences</p> */}
                </div>
            </ScrollAnimation>
        </div>
    </div>
  )
}
