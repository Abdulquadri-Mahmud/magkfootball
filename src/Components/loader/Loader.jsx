import React from 'react'

export default function Loader() {
  return (
      <div className="shadow-md rounded-md relative">
        <div className="animate-pulseflex justify-center pt-0 md:w-[200px] h-[150px] w-[140px] mx-auto">
        </div>
        <button className="animate-pulse text-white cursor-pointer absolute top-3 right-3 w-[30px] h-[30px] rounded-full">
            {/* <IoHeart className='text-xl'/> */}
        </button>
        <div className="p-3">
            <h2 className='py-1 font-medium md:text-center truncate animate-pulse'></h2>
            <p className="truncate animate-pulse"></p>
            <div className="flex items-center justify-between">
                <p className="font-medium flex items-center"></p>
            </div>
            <button className='font-medium py-2 px-3 rounded-sm mt-3 w-full animate-pulse text-white text'>Add To Cart</button>
        </div>
  </div>
  )
}
