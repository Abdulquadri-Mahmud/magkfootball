import React, { useEffect, useState } from 'react'

export default function About_page() {
    const [autoplay, setAutoplay] = useState(true);
    
  return (
    <div className='my-10 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto'>
        <div className="flex flex-wrap items- justify-center gap-5 px-2">
            <div className="video flex-1">
                <video loop muted controls autoPlay src='/aboutus.mp4' className='border-slate-100 border-4 rounded-md'/>
            </div>
            <div className="context md:w-[40%] w-[100%]">
                <h1 className="text-4xl font-medium border-b pb-2 text-start">About Us</h1>
                <div className="mt-4 text-start ">
                    {/* <p className="leading-6">
                        Muiz Ayolola also known as MAGkKFOOTBALL, begins is admiring of football analysis from childhood listening to Murphy Ijemba on brilla Fm 88.9, and also in school where we talk mostly about football any given time, I continue to pursue the dream even when I was in university making analysis for local team at OOU and now taking the central stage.
                    </p> */}
                    <p className='leading-6 mt-2'>
                        MAGKK FOOTBALL TALK is premier destination for sports insightsof in-depth football analysis, betting tips, and expertly curated betslips! Our mission is to empower you with reliable information, top-tier analysis, and strategies to make your sports betting experience both thrilling and rewarding. We also sell clean affordable durable phone and video gaming,  gadgets, shop with us today and take your gaming experience to top-tier.
                    </p>
                </div>
            </div>
        </div>        
    </div>
  )
}