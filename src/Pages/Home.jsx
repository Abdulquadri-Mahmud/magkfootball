import React, { createContext, Suspense, useEffect, useState } from 'react'
import Hero from '../Components/Hero'

import About_page from './About_page'
import { BeatLoader } from "react-spinners";

export const productContext = createContext();

export const NewsComponentContext = createContext();
const NewsComponent = React.lazy(() => import('../Components/NewsComponent'));

export default function Home() {
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        const url = 'https://fake-api-one-rust.vercel.app/api/news/all_news';
  
        const res = await fetch(url);
  
        const data = await res.json();

        setNews(data);

      }; fetchProduct();

    } catch (error) {
      setError(error)
    }
  }, []);

  // Calculate the news to display on the current page
  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Calculate the total number of pages
  const totalPages = Math.ceil(news.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=''>
        <Hero/>
        {/* <Section2/> */}
        <About_page/>
        <div className="mt-8">
          {/* <BetsSection/> */}
        </div>
      {/* News Grid with Suspense */}
      <div className="my-20 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
        {/* Brief Content Section */}
        <div className="text-center lg:max-w-[50%] max-w-[90%] mx-auto">
          <div className="mb-3">
            <h1 className="relative font-medium md:text-4xl text-2xl gadget">News</h1>
          </div>
          <p className="text-sm text-gray-500">
            Stay up-to-date with the latest news. Our curated stories bring you fresh insights, analysis, and more—explore now!
          </p>
        </div>

        {/* News Grid with Suspense */}
        <div className="mt-7 py-3 px-2 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentNews.length > 0 &&
            currentNews.map((item) => (
              <NewsComponentContext.Provider value={item} key={item._id}>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center">
                      <BeatLoader color="#1D4ED8" loading={true} size={15} />
                    </div>
                  }
                >
                  <NewsComponent news={item} />
                </Suspense>
              </NewsComponentContext.Provider>
            ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex gap-3 items-center">
              {/* Previous Button */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${
                  currentPage === 1 ? "bg-gray-300" : "bg-blue-600 hover:bg-blue-500"
                } text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out`}
              >
                Prev
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-blue-100"
                  } text-sm px-3 py-2 rounded-lg transition duration-300 ease-in-out`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next Button */}
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className={`${
                  currentPage === totalPages ? "bg-gray-300" : "bg-blue-600 hover:bg-blue-500"
                } text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out`}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}