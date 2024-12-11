import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About_page() {
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="my-10 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
      {/* About Us Header */}
      <div className="text-center mb-8" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-900">
          About Us
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Discover who we are and what drives us!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap items-center justify-center gap-5 px-2">
        {/* Video Section */}
        <div className="video flex-1" data-aos="fade-up">
          <video loop muted controls autoPlay src="/aboutus.mp4" className="border-slate-100 border-4 rounded-md w-full"/>
        </div>

        {/* Context Section */}
        <div className="context md:w-[40%] w-[100%]" data-aos="fade-up" data-aos-delay="200">
          <div className="mt-4 text-start">
            <p className="leading-8 mt-2 text-gray-800">
              <span className="font-bold text-purple-600">MAGKK FOOTBALL TALK</span> is your premier destination for in-depth football analysis, betting tips, and expertly curated betslips! Our mission is to empower you with reliable information, top-tier analysis, and strategies to make your sports betting experience both thrilling and rewarding. 
            </p>
            <p className="leading-8 mt-4 text-gray-800">
              We also sell clean, affordable, and durable phone and video gaming gadgets. Shop with us today and elevate your gaming experience to the next level!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
