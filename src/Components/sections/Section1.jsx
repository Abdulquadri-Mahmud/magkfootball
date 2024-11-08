import React from 'react'

export default function Section1() {
  return (
    <div className='my-10 xl:max-w-[95%] mx-auto text-black px-4'>
        <div className="">
            <h1 className='capitalize font-medium text-center text-xl'>Get your latest football news update, tips and news.</h1>
        </div>

        <div className="mt-6 flex justify-center flex-wrap gap-5">

          <div className="md:w-[350px] w-[350px] shadow-md rounded-md px-2 py-2">
            <img src="/soccer.webp" className='w-full h-[220px] rounded-md' alt="" />
            <div className="">
              <h1 className='font-medium text-xl pt-4'>Latest News and Updates</h1>
              <p className='text-sm pt-2 '>Stay ahead of the game with our live football updates! Get real-time scores, match previews, expert analysis, and the latest news on your favorite teams and leagues. Don’t miss a moment—follow us for all the action, all season long</p>
            </div>
          </div>

          <div className="md:w-[350px] w-[350px] shadow-md rounded-md px-2 py-2">
            <img src="/bet.jpg" className='w-full h-[220px] rounded-md' alt="" />
            <div className="">
              <h1 className='font-medium text-xl pt-4'>Betting Tips and Predictions</h1>
              <p className='text-sm py-2 '>Expert betting tips and predictions for upcoming games.</p>
              <p className="text-sm">Advice on potential winning strategies based on team form, player stats, and betting odds.</p>
            </div>
          </div>

          <div className="md:w-[350px] w-[350px] shadow-md rounded-md px-2 py-2">
            <img src="/ps5.webp" className='w-full h-[220px] rounded-md' alt="" />
            <div className="">
              <h1 className='font-medium text-xl pt-4'>Discover the Latest Tech at Unbeatable Prices!</h1>
              <p className='text-sm pt-2 '>Upgrade your tech game! Explore our top-quality gadgets at unbeatable prices—shop now for the latest in innovation and style!</p>
            </div>
          </div>
        </div>

    </div>
  )
}
