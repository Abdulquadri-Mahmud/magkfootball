import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SampleNextArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none",
        paddingTop: '5.5px', paddingLeft: '5.5px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", 
        paddingTop: '5.5px', paddingLeft: '5.5px',
      }}
      onClick={onClick}
    />
  );
}

export default function Section1() {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className=' rounded-md pb-6 pt-2  my-[3rem] xl:max-w-[85%] max-w-[97%] mx-auto text-black px-4'>
        <div className="py-2 rounded-t-md text-black">
            <h2 className='capitalize font-medium text-center md:text-4xl text-2xl'>OFFERS</h2>
            <p className='capitalize font-medium text-center text-sm pt-3 text-gray-500'>Get your latest football news update, tips and news.</p>
        </div>

        <div className="flex justify-center flex-wrap gap-5">

          <div className="md:w-[350px] w-[100%] border-b-4 border-l-4 bg-white shadow-md rounded-md px-2 py-2">
            
            <Slider {...settings}>
              <div className="">
                <img src="/soccer.webp" className='w-full h-[220px] rounded-md' alt="" />
              </div>
              <div className="">
                <img src="/soc.jpg" className='w-full h-[220px] rounded-md' alt="" />
              </div>
              <div className="">
                <img src="/img1.jpeg" className='w-full h-[220px] rounded-md' alt="" />
              </div>
              <div className="">
                <img src="/img2.webp" className='w-full h-[220px] rounded-md' alt="" />
              </div>
            </Slider>

            <div className="">
              <h1 className='font-medium text-xl pt-4'>Latest News and Updates</h1>
              <p className='text-sm pt-2 '>Stay ahead of the game with our live football updates! Get real-time scores, match previews, expert analysis, and the latest news on your favorite teams and leagues. Don’t miss a moment—follow us for all the action, all season long</p>
            </div>
          </div>

          <div className="md:w-[350px] w-[100%] border-b-4 border-l-4 bg-white shadow-md rounded-md px-2 py-2">
            <Slider {...settings}>
              <div className="">
                <img src="/bet.jpg" className='w-full h-[220px] rounded-md' alt="" />
              </div>
              <div className="">
                <img src="/bet1.jpg" className='w-full h-[220px] rounded-md' alt="" />
              </div>
            </Slider>
            <div className="">
              <h1 className='font-medium text-xl pt-4'>Betting Tips and Predictions</h1>
              <p className='text-sm py-2 '>Expert betting tips and predictions for upcoming games.</p>
              <p className="text-sm">Advice on potential winning strategies based on team form, player stats, and betting odds.</p>
            </div>
          </div>

          <div className="md:w-[350px] w-[100%] border-b-4 border-l-4 bg-white shadow-md rounded-md px-2 py-2">
          <Slider {...settings}>
            <div className="">
              <img src="/ps5.webp" className='w-full h-[220px] rounded-md' alt="" />
            </div>
            <div className="">
              <img src="/ps.png" className='w-full h-[220px] rounded-md' alt="" />
            </div>
          </Slider>
            <div className="">
              <h1 className='font-medium text-xl pt-4'>Discover the Latest Tech at Unbeatable Prices!</h1>
              <p className='text-sm pt-2 '>Upgrade your tech game! Explore our top-quality gadgets at unbeatable prices—shop now for the latest in innovation and style!</p>
            </div>
          </div>
        </div>

    </div>
  )
}
