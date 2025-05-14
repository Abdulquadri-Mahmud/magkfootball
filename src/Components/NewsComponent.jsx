import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsComponentContext } from "../Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations

export default function NewsComponent() {
  const data = useContext(NewsComponentContext);

  // Initialize AOS animations when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for animation
      easing: "ease-in-out", // Easing for smooth animations
      once: true, // Ensures animations happen only once
    });
  }, []);

  return (
    <div key={data._id} className="bg-white shadow-lg border border-gray-200 rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="relative h-[200px] mb-4">
            <img src={data?.source} alt={data?.title}
                className="w-full h-full object-cover rounded-md" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 rounded-md"></div>
        </div>
        <div className="py-2">
            <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
            <p className="text-sm text-gray-600 mt-2">
                {data.description.length > 120
                ? data.description.slice(0, 120) + "..."
                : data.description}
            </p>
        </div>
        <div className="flex justify-between datas-center mt-4">
            <Link to={`/readmore/${data._id}`}
                className="text-blue-600 text-sm font-medium hover:underline">
                Read More
            </Link>
            <p className="text-xs text-gray-500">{data.date}</p>
        </div>
    </div>
  );
}
