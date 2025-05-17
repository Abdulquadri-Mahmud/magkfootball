import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Advert from "../Components/Advert";
import { GiSoccerKick } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartReducer";
import { FaCartShopping } from "react-icons/fa6";

const HeroSection = () => (
  <section className="bg-blue-900 text-white lg:pt-32 pt-20 pb-10 px-6 text-start flex gap-4 justify-between lg:flex-row flex-col flex-wrap">
    <div className="flex-1 max-w-lg mx-auto lg:text-start text-center ">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to MAGKK FOOTBALL TALK</h1>
      <p className="text-lg lg:text-xl">
        Your #1 destination for expert football insights, betting tips, and top-quality gaming gadgets.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-200 transition">
        <Link to={'https://x.com/footballbymagkk?t=xd8TFHhpxilWLUsJ791pGw&s=09'}>Join Twitter</Link>
      </button>
    </div>
    <div className="lg:w-1/2 h-[350px] w-full relative z-10 ">
      <img src="/soccer.png" alt="MAGKK FOOTBALL TALK"  className="w-full max-h-full border-2 border-white rounded-xl"/>
      <div className="w-[200px] h-[200px] absolute left-0 bottom-0 rounded-tr-full bg-white -z-10"></div>
      <div className="lg:w-[200px] w-[300px] lg:h-full h-[90%] absolute right-0 top-0 rounded-b-full bg-white -z-10"></div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-16 px-6 bg-white text-gray-800 text-center">
    <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
    <p className="text-lg max-w-3xl mx-auto">
      <h1 className='text font-bold md:text-2xl text-xl flex items-center'>Magkk <span className="text-blue-800">Football</span> Talk <GiSoccerKick className='text-2xl'/></h1>
       delivers in-depth football analysis, reliable betting tips, expertly curated betslips, and a curated selection of gaming gadgets including phones and consoles.
    </p>
  </section>
);


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
    <section className="py-16 px-6 bg-blue-200">
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


const PRODUCTS_PER_PAGE = 8;

const GadgetShowcase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fake-api-one-rust.vercel.app/api/gadget/all_products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
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

  // Pagination logic
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
    <div className="bg-white border border-gray-200 rounded-xl md:p-6 p-3 max-w-7xl mx-auto pb-8 shadow-md my-6">
      <h2 className="text-2xl font-bold mb-4">Gaming & Gadget Store</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
            {currentProducts.map((product) => (
              <div key={product._id} className="md:p-4 p-2 border rounded-lg hover:shadow-lg">
                <div className="h-32 bg-gray-300 rounded mb-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-green-700 mb-2">₦{Number(product.price).toLocaleString()}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-900 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300"
                >
                  <FaCartShopping /> Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const ContactSection = () => (
  <section className="py-16 px-6 bg-gray-900 text-white text-center">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
    <p className="mb-4">Join our Telegram or reach out via WhatsApp or Email.</p>
    <div className="flex justify-center gap-4">
      <Link to="https://x.com/footballbymagkk?t=xd8TFHhpxilWLUsJ791pGw&s=09" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Join Twitter</Link>
      <Link to="https://chat.whatsapp.com/JjS55KgMcBG8HmLqydYdUC" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">WhatsApp</Link>
    </div>
  </section>
);
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
    <div className="bg-white">
      <HeroSection />
      <AboutSection/>
      {/* <FeaturedTips/> */}
      <div className="xl:max-w-[75%] max-w-[97%] mx-auto py-10 flex flex-wrap gap-2">
        <div className="flex-1 min-w-0 border border-gray-200 overflow-hidden shadow-md bg-white p-2 rounded-md">
          {/* Main Content */}
          <div>
            {currentNews.map((item) => (
              <div className="my-4" key={item._id}>
                <div className="md:h-[350px] rounded-md">
                  <Link to={`/readmore/${item._id}`} className="text-sm text-red-600">
                    <img src={item.source} alt="" className="w-[100%] md:h-[350px] rounded-md object-top"/>
                  </Link>
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
        <div className='xl:w-[400px] md:w-[350px] w-full'>
          <div className='w-full'>
            <div className=" bg-white w-full md:px-2 p-2 py-4 border border-gray-200 rounded-md">
              <div className="">
                <h2 className="font-medium text-xl border-l-4 border-l-blue-500 text-blue-500 pl-2">
                  Latest News
                </h2>
              </div>
              <div className="pt-4 flex flex-col gap-4">
                {sidebarNews.map((item) => (
                  <div className="flex items-center gap-3" key={item._id}>
                    <div className="rounded-full border-4 border-blue-500">
                      <img src={item.source} alt="ps" className="max-w-[70px] h-[70px] object-cover rounded-full"/>
                    </div>
                    <div className="flex flex-col lg:w-[70%] w-[80%]">
                      <h1 className="font-medium truncate break-words">{item.title}</h1>
                      <p className="text-sm pt-1 truncate">{item.description}</p>
                      <div className="text-red-600 mt-3 text-sm underline font-medium">
                        <Link to={`/readmore/${item._id}`}>Read more</Link>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Sidebar Pagination */}
                <div className="mt-6 flex justify-center items-center gap-2">
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
                </div>
              </div>
            </div>
            <Advert/>
          </div>

        </div>
      </div>
      <GadgetShowcase/>
      <Testimonials/>
      <ContactSection/>
    </div>
  );
}
