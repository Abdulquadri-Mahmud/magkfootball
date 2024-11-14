import React from 'react'
import Header from './Header'
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

export default function Hero() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className='overflow-hidden md:px-0 px-6 md:h-[75vh] sm:h-[75vh] h-[85vh] hero bg-gradient-to-t from-blue-600 to-blue-950 flex justify-center items-center'>
      <div className="xl:max-w-[90%] mx-auto flex flex-wrap md:flex-row flex-col-reverse justify-around items-center w-full">
        
        <div className="flex-1 md:text-start text-center w-full">
          <h1 className='text-white md:text-[3rem] text-[1.6rem] font-medium break-words md:leading-[4rem] sm:leading-[3rem] leading-[2rem]'>WELCOME TO <br /> THE BEST SPORT UPDATES AND LIVE BETSLIPS</h1>
          <p className='text-white font-medium sm:mt-0 mt-3'>Click the Shop Now button below to start shopping </p>
          <button className='px-4 py-2 bg-cyan-500 text-white font-medium uppercase rounded-md mt-2'>Shop Now</button>
        </div>

        {/* image slider */}

        <div className="md:w-[40%] w-full">
          <Slider {...settings}>

            <div className="">
              <div className="flex justify-center">
                <img src="/ball.webp" className='rounded-full animate-spin md:max-w-[300px] max-w-[250px] drop-shadow-2xl ball' alt="" />
              </div>
            </div>

            <div className="">
              <div className="flex justify-center">
                <img src="/ps.png" className='animate- w-[100%] drop-shadow-2xl ball' alt="" />
              </div>
            </div>

            <div className="">
              <div className="flex justify-center">
                <img src="ps1.png" className='rounded-full md:max-w-[300px] w-[300px] drop-shadow-2xl ps ball' alt="" />
              </div>
            </div>

            <div className="">
              <div className="flex justify-center">
                <img src="ps4.png" className='rounded-full md:max-w-[300px] w-[300px] drop-shadow-2xl ps ball' alt="" />
              </div>
            </div>

            <div className="">
              <div className="flex justify-center">
                <img src="ps5.jpg" className='rounded-full md:max-w-[300px] w-[300px] drop-shadow-2xl ps ball' alt="" />
              </div>
            </div>

          </Slider>
        </div>

      </div>
    </div>
  )
}
