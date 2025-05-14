import React, { createContext, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import TypeWriter from './TypeWriter/TypeWriter';
import { Link } from 'react-router-dom';

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
    <div className="">
      <Slider {...settings}>
        <div className='overflow-hidden md:px-0 px-6 lg:h-[80vh] md:h-70vh] sm:h-[60vh] h-[85vh] hero flex justify-center items-center md:pt-[14rem] pt-[10rem] newshero'>
          <div className="xl:max-w-[70%] mx-auto flex flex-wrap lg:flex-row flex-col-reverse justify-around items-center w-full">
            <div className="flex-1 lg:text- text-center w-full">
              <TypeWriter/>
              <p className='text-white font-medium sm:mt-0 mt-3'>Click the Shop Now button below to start shopping </p>
              <button className='px-4 py-2 bg-blue-900 text-white font-medium uppercase rounded-md mt-2'><Link to={'/gadgets'}>Shop Now</Link></button>
            </div>
          </div>
        </div>
        <div className='overflow-hidden md:px-0 px-6 lg:h-[80vh] md:h-70vh] sm:h-[60vh] h-[85vh] hero flex justify-center items-center md:pt-[14rem] pt-[10rem] newshero2'>
          <div className="xl:max-w-[70%] mx-auto flex flex-wrap lg:flex-row flex-col-reverse justify-around items-center w-full">
            <div className="flex-1 lg:text- text-center w-full">
              <TypeWriter/>
              <p className='text-white font-medium sm:mt-0 mt-3'>Click the Shop Now button below to start shopping </p>
              <button className='px-4 py-2 bg-blue-900 text-white font-medium uppercase rounded-md mt-2'><Link to={'/gadgets'}>Shop Now</Link></button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}


{/* image slider */}

{/* <div className="lg:w-[45%] md:w-[90%] w-full hidden lg:block">
  <Slider {...settings}>

    <div className="">
      <div className="flex justify-center">
        <img src="/soccer.png" className='drop-shadow-2xl ' alt="" />
      </div>
    </div>

    <div className="">
      <div className="flex justify-center">
        <img src="ps.png" className='w-[100%] drop-shadow-2xl ps ball' alt="" />
      </div>
    </div>

    <div className="">
      <div className="flex justify-center">
        <img src="/gadget1.png" className='animate- w-[100%] drop-shadow-2xl ' alt="" />
      </div>
    </div>

  </Slider>
</div> */}
