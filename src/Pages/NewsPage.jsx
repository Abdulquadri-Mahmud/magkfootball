import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarPage, setSidebarPage] = useState(1); // New state for sidebar pagination
  const itemsPerPage = 5; // Number of news items per page
  const sidebarItemsPerPage = 3; // Items per page for the sidebar

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://fake-api-one-rust.vercel.app/api/news/all_news`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.success === false) {
        console.error("Error while fetching data!");
      }
      setNews(data);
    };
    fetchNews();
  }, []);

  // Calculate pagination for main content
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = news.slice(startIndex, endIndex);

  // Calculate pagination for sidebar content
  const sidebarTotalPages = Math.ceil(news.length / sidebarItemsPerPage);
  const sidebarStartIndex = (sidebarPage - 1) * sidebarItemsPerPage;
  const sidebarEndIndex = sidebarStartIndex + sidebarItemsPerPage;
  const sidebarNews = news.slice(sidebarStartIndex, sidebarEndIndex);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSidebarPageChange = (page) => setSidebarPage(page);

  return (
    <div>
      <div className="xl:max-w-[80%] max-w-[97%] mx-auto py-10 flex flex-wrap gap-2">
        <div className="flex-1 overflow-hidden shadow-md p-2 rounded-md">
          {/* Main Content */}
          <div>
            {currentNews.map((item) => (
              <div className="my-4" key={item._id}>
                <div className="md:h-[350px] rounded-md">
                  <img src={item.source} alt="" className="w-[100%] md:h-[350px] rounded-md object-top"/>
                </div>
                <div className="border-t border-b border-gray-300 py-2 mt-3 flex justify-between items-center gap-2">
                  <p className="text-[12px] text-gray-500">Created by: admin</p>
                  <p className="text-[12px] text-gray-500">Date: {item.date}</p>
                </div>
                <div className="pt-3">
                  <h2 className="font-medium text-xl">{item.title}</h2>
                </div>
                <div className="w-full text-sm mt-2">
                  <p className="pb-2" dangerouslySetInnerHTML={{
                      __html: item.description.replace(/\n/g, "<br />").slice(0, 400),
                    }}
                  ></p>
                  <Link to={`/readmore/${item._id}`} className="text-sm text-red-600">
                    Read More...
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Main Pagination */}
          <div className="mt-6 flex justify-center items-center gap-2">
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50">
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="xl:w-[400px] md:w-[350px] w-full shadow-md p-2 rounded-md">
          <div className="">
            <h2 className="font-medium text-xl border-l-4 border-l-blue-500 text-blue-500 pl-2">
              Latest News
            </h2>
          </div>
          <div className="pt-4 flex flex-col gap-4">
            {sidebarNews.map((item) => (
              <div className="flex items-center gap-3" key={item._id}>
                <img src={item.source} alt="ps" className="max-w-[70px] h-[70px] object-cover rounded-full"/>
                <div className="flex flex-col lg:w-[70%] w-[80%]">
                  <h1 className="font-medium truncate break-words">{item.title}</h1>
                  <p className="text-sm pt-1 truncate">{item.description}</p>
                  <div className="text-red-600 mt-3 text-sm underline font-medium">
                    <Link to={`/readmore/${item._id}`}>Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Pagination */}
          {/* <div className="mt-6 flex justify-center items-center gap-2">
            <button
              disabled={sidebarPage === 1}
              onClick={() => handleSidebarPageChange(sidebarPage - 1)}
              className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(sidebarTotalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleSidebarPageChange(index + 1)}
                className={`px-3 py-1 rounded-md ${
                  sidebarPage === index + 1
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={sidebarPage === sidebarTotalPages}
              onClick={() => handleSidebarPageChange(sidebarPage + 1)}
              className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
