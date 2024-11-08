import React from 'react'
import Header from './Header'

export default function Hero() {
  return (
    <div className='overflow-hidden h-[85vh] bg-gray-00 hero bg-gradient-to-b from-blue-700 to-blue-900 flex justify-center items-center'>
      <div className="flex flex-wrap md:flex-row flex-col-reverse justify-around items-center w-full">
        <div className="md:w-[50%] md:text-start text-center mt-6 md:mt-0 w-full">
          <h1 className='text-white text-[2rem] font-medium break-words leading-[3rem]'>WELCOME TO <span className="md:text-6xl text-[2.7rem]">MAGKKFOOTBALLNEWS</span></h1>
          <p></p>
        </div>
        <div className="rounded-full animate-spin max-w-[250px] md:max-w-[300px] ball">
          <img src="/ball.webp" className='max-w-full rounded-full drop-shadow-[0_25px_25px_#0007' alt="" />
        </div>
      </div>
    </div>
  )
}
