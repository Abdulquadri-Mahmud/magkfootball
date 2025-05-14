import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFutbol, FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About_page() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-900">
            About MAGKK Football Talk
          </h1>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover who we are and what makes us your ultimate sports destination.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Video Section */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg border border-gray-200"
          >
            <video
              loop
              muted
              controls
              src="/aboutus.mp4"
              className="w-full  rounded-xl h-auto bg-white p-2 lg:p-4"
            />
          </div>

          {/* Text Content */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-1/2 space-y-6 bg-white p-6 rounded-xl shadow-md border"
          >
            <div className="flex items-center gap-3">
              <FaFutbol className="text-blue-600 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-800">Football & Betting Insights</h2>
            </div>
            <p className="text-gray-700 leading-7">
              <span className="font-bold text-blue-600">MAGKK FOOTBALL TALK</span> is your premier destination
              for in-depth football analysis, betting tips, and expertly curated betslips! We empower sports
              lovers with reliable info and data-driven betting strategies that elevate your winning chances.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <FaGamepad className="text-indigo-600 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-800">Gadgets & Gaming</h2>
            </div>
            <p className="text-gray-700 leading-7">
              We also sell clean, affordable, and durable video gaming gadgets. Shop with us today and elevate
              your gaming experience with the latest gear at unbeatable prices.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div data-aos="zoom-in" className="mt-12 relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-10 px-6 rounded-2xl text-center shadow-2xl overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>

          <h3 className="text-3xl font-extrabold mb-4 leading-tight">
            Ready to Win More & Game Better?
          </h3>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Join the <span className="font-bold text-yellow-300">MAGKK</span> community today and unlock the future of
            <span className="font-semibold text-blue-200"> football insights</span> and
            <span className="font-semibold text-blue-200"> unbeatable gadget deals</span>!
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Link to="/signup" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md">
              Join Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
