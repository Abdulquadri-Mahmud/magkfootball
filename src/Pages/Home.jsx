import React, { createContext, Suspense, useEffect, useState } from 'react'
import Hero from '../Components/Hero'

import About_page from './About_page'
import { BeatLoader } from "react-spinners";
import { addToCart } from '../store/cart/cartReducer';
import { useDispatch } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';

import { FaChartLine, FaFootballBall, FaGamepad } from "react-icons/fa";

const PRODUCTS_PER_PAGE = 8;

const GadgetShowcase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fake-api-one-rust.vercel.app/api/gadget/all_products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const cartItem = {
      productID: product._id,
      productName: product.name,
      productImage: product.image,
      productPrice: product.price,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const indexOfLast = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirst = indexOfLast - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 max-w-7xl mx-auto shadow-lg my-10">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900">🎮 Gaming & Gadget Store</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 border-b">
                  <div className="h-36 flex items-center justify-center bg-gray-50 p-2 rounded">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-green-700 font-medium text-base">
                    ₦{Number(product.price).toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-blue-700 text-white py-2 mt-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-800 transition"
                  >
                    <FaCartShopping /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 text-sm rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const ExpertAnalysis = () => {
  const articles = [
    { title: "Top 5 Weekend Sure Bets", summary: "Value picks and confidence bets." },
    { title: "Avoid These Betting Mistakes", summary: "Key lessons from losing tickets." },
    { title: "Live Betting Strategy Guide", summary: "How to bet smart during games." },
    { title: "Understanding Odds", summary: "Breakdown of odds types and how to read them." },
    { title: "Bankroll Management Tips", summary: "Avoid going broke with structured betting." },
    { title: "Underdog Wins Explained", summary: "Spotting high-value upsets before kickoff." },
  ];

  return (
    <div className="bg-gray-100 rounded-xl p-6 my-6">
      <h2 className="text-2xl font-bold mb-6">Expert Analysis</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl shadow-lg max-w-6xl mx-auto my-10 p-6 md:p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Why Choose <span className="text-yellow-400">MAGKK?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-blue-950 rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300">
          <FaFootballBall className="text-yellow-400 text-3xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Elite Football Insight</h3>
          <p className="text-sm text-gray-200">
            Get data-driven match predictions, betting tips, and weekly betslips created by seasoned analysts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-blue-950 rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300">
          <FaChartLine className="text-yellow-400 text-3xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Winning Strategies</h3>
          <p className="text-sm text-gray-200">
            Learn smart betting habits and avoid common mistakes with curated content built for results.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-blue-950 rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300">
          <FaGamepad className="text-yellow-400 text-3xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Tech & Gaming Store</h3>
          <p className="text-sm text-gray-200">
            Shop clean, affordable, and durable gadgets handpicked for performance and price.
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-300 mt-8">
        MAGKK FOOTBALL TALK — Your all-in-one destination for success and entertainment.
      </p>
    </div>
  );
};

const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      quote: "MAGKK's tips helped me win 5x in one week! Highly recommended.",
      author: "- Chinedu from Lagos",
    },
    {
      id: 2,
      quote: "Best gadgets at great prices. I got my PS controller and it's top quality.",
      author: "- Zainab from Abuja",
    },
    {
      id: 3,
      quote: "I've tried many tipsters but MAGKK is consistently accurate.",
      author: "- Emeka from Enugu",
    },
  ];

  return (
    <section className="py-16 px-6 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonies.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">“{item.quote}”</p>
            <p className="font-semibold mt-2">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="py-16 px-6 bg-gray-900 text-white text-center">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
    <p className="mb-4">Join our Telegram or reach out via WhatsApp or Email.</p>
    <div className="flex justify-center gap-4">
      <a href="#" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Join Telegram</a>
      <a href="#" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">WhatsApp</a>
    </div>
  </section>
);


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
      <ExpertAnalysis/>
      <PromotionBanner/>
      <div className="mt-8">
        {/* <BetsSection/> */}
      </div>

      {/* News Grid with Suspense */}
      <div className="my-20 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto bg-blue-900 rounded-xl">
        {/* Brief Content Section */}
        <div className="text-center lg:max-w-[50%] max-w-[90%] mx-auto bg-white rounded-b-xl md:p-4 p-2 md:mt -mt-6">
          <div className="mb-5">
            <h1 className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800 md:text-5xl text-3xl">
              MAGKK Football News & Insights
            </h1>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Get expert analysis, betting trends, and football updates — all in one place. Stay sharp with insights that keep you ahead of the game.
          </p>
        </div>

        {/* News Grid with Suspense */}
        <div className="mt-7 lg:py-5 lg:px-5 py-3 px-3 grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl">
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
      <GadgetShowcase />
      <Testimonials />
      <ContactSection />
    </div>
  )
}