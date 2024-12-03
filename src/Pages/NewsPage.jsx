import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
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

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://fake-api-one-rust.vercel.app/api/news/all_news`;
  
      const res = await fetch(url);
  
      const data = await res.json();
  
      if (data.success === false) {
        setError('Error while fetching data!');
      }
  
      setNews(data);
    }; fetchNews();
  }, []);
  
  return (
    <div>
        <div className='xl:max-w-[80%] max-w-[97%] mx-auto py-10 flex flex-wrap gap-2'>
          <div className="flex-1 overflow-hidden shadow-md p-2 rounded-md">
            
            <div className="">
              <div className="video flex-1">
                <video loop muted controls autoPlay src='/aboutus.mp4' className='border-slate-100 border-4 rounded-md'/>
            </div>

              <div className="border-t border-b border-gray-300 py-2 mt-3 flex justify-between items-center gap-2">
                <p className="text-[12px] text-gray-500">Created by: admin</p>
                <p className="text-[12px] text-gray-500">Date: 21/11/2024</p>
                {/* <p className="text-sm text-gray-500">Created by: admin</p> */}
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <p className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></p>
                  <h2 className='text-3xl font-medium'>Lates News</h2>
                </div>
                <p className="text-sm pt-3 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ex nulla sequi voluptatem rem? Officia, tenetur. Nulla facere magni incidunt, veniam vel quisquam, eaque accusamus, rerum molestiae eos neque obcaecati? <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia soluta, odio, aut ut cupiditate quaerat, impedit aspernatur excepturi dicta quasi fugit harum obcaecati non praesentium. Commodi, error quasi? Nostrum.</p>
              </div>

            </div>
          </div>

          <div className="md:w-[350px] w-full shadow-md p-2 rounded-md">

            <div className="">
              <h2 className='font-medium text-xl border-l-4 border-l-blue-500 text-blue-500 pl-2'>Latest News</h2>
            </div>

            <div className="pt-4 flex flex-col gap-4">
              {
                news.length > 0 && news.map((news) => {
                  return (
                  <div className="flex items-center gap-3">
                    <img src={news.image} alt="ps" className='max-w-[70px] h-[70px] object-cover rounded-full'/>
                    <div className="flex flex-col lg:w-[50%] w-[80%]">
                      <h1 className='font-medium truncate break-words'>{news.title}</h1>
                      <p className="text-sm pt-1 truncate">{news.description}</p>
                      <div className="text-red-600 mt-3 text-sm underline font-medium">
                        <Link to={`/readmore/${news._id}`} >Read more</Link>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
            </div>

          </div>
        </div>

    </div>
  )
}
