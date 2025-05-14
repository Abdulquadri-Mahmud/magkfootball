import React from 'react';

const Advert = () => {
  return (
    <div className=" text-gray-800 rounded-2xl border border-gray-200 bg-white p-2 my-5">
      <div className="">
        {/* Image Section */}
        <div className="w-full">
          <div className="w-full h-64 px-4 bg-gray-300 rounded-lg overflow-hidden shadow-inner flex items-center justify-center">
            {/* Replace below div with an <img> tag if you have a real image */}
            <span className="text-gray-600 p-2 rounded-xl text-center bg-white">
              {/* Image Placeholder (e.g. Logo, Product, or Banner) */}
              <img src="/logo.jpg" alt="Advert logo" className="max-w-full max-h-full  rounded-xl object-cover" />
            </span>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full p-3">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            MAGKK FOOTBALL TALK
          </h2>
          <p className="text-sm mb-2 leading-relaxed text-gray-800">
            MAGKK FOOTBALL TALK is your premier destination for sports insights,
            featuring in-depth football analysis, betting tips, and expertly curated betslips!
          </p>
          <p className="text-sm mb-2 leading-relaxed text-gray-800">
            Our mission is to empower you with reliable information, top-tier analysis, and strategies
            to make your sports betting experience both thrilling and rewarding.
          </p>
          <p className="text-sm leading-relaxed text-gray-800">
            But that’s not all — we also sell clean, affordable, and durable phones and video gaming
            gadgets. Shop with us today and take your gaming experience to the next level!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advert;
