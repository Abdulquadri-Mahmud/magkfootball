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

export default function NewsPage() {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    waitForAnimate: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
        <div className='xl:max-w-[80%] max-w-[97%] mx-auto py-10 flex flex-wrap gap-2'>
          <div className="flex-1 overflow-hidden shadow-md p-2 rounded-md">
            
            <div className="">
              <Slider {...settings}>
                <div className="">
                  <img src="/soccer.webp" className='w-full md:max-h-[370px] max-h-[300px] rounded-md' alt="" />
                </div>
                <div className="">
                  <img src="/soc.jpg" className='w-full md:max-h-[370px] max-h-[300px] rounded-md' alt="" />
                </div>
                <div className="">
                  <img src="/img1.jpeg" className='w-full md:max-h-[370px] max-h-[300px] rounded-md' alt="" />
                </div>
                <div className="">
                  <img src="/img2.webp" className='w-full md:max-h-[370px] max-h-[300px] rounded-md' alt="" />
                </div>
              </Slider>

              <div className="border-t border-b border-gray-300 py-2 mt-3 flex justify-between items-center gap-2">
                <p className="text-[12px] text-gray-500">Created by: admin</p>
                <p className="text-[12px] text-gray-500">Date: 21/11/2024</p>
                {/* <p className="text-sm text-gray-500">Created by: admin</p> */}
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <p className="w-3 h-3 rounded-full bg-green-600"></p>
                  <h2 className='text-3xl font-medium'>Lates News</h2>
                </div>
                <p className="text-sm pt-3 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ex nulla sequi voluptatem rem? Officia, tenetur. Nulla facere magni incidunt, veniam vel quisquam, eaque accusamus, rerum molestiae eos neque obcaecati? <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia soluta, odio, aut ut cupiditate quaerat, impedit aspernatur excepturi dicta quasi fugit harum obcaecati non praesentium. Commodi, error quasi? Nostrum.</p>
              </div>

            </div>
          </div>

          <div className="md:w-[350px] w-full shadow-md p-2 rounded-md">

            <div className="">
              <h2 className='font-medium border-l-4 border-l-blue-500 text-blue-500 pl-2'>Latest News</h2>
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src="/bg1.jpg" alt="ps" className='max-w-[70px] h-[70px] object-cover rounded-full'/>
                <div className="flex flex-col">
                  <h1 className='font-medium'>News</h1>
                  <p className="text-sm pt-1">We have got you new updates</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/soc.jpg" alt="ps" className='max-w-[70px] h-[70px] object-cover rounded-full'/>
                <div className="flex flex-col">
                  <h1 className='font-medium'>News</h1>
                  <p className="text-sm pt-1">We have got you new updates</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/ps1.png" alt="ps" className='max-w-[70px] h-[70px] object-cover rounded-full'/>
                <div className="flex flex-col">
                  <h1 className='font-medium'>News</h1>
                  <p className="text-sm pt-1">We have got you new updates</p>
                </div>
              </div>

            </div>

          </div>
        </div>

    </div>
  )
}
