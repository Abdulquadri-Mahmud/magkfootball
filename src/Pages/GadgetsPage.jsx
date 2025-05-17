import React, { useEffect, Suspense, useState, createContext } from 'react';
import Loader from '../Components/loader/Loader';
import { Link } from 'react-router-dom';

export const productsContext = createContext();

const GadgetHero = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Level Up Your Tech with MAGKK Gadgets
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-6">
            Explore clean, affordable, and durable gadgets—from gaming accessories to mobile tech. Shop smart. Game smarter.
          </p>
          <Link to="/gadgets"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Shop Now
          </Link>
        </div>

        {/* Image / Visual */}
        <div className="lg:w-1/2 w-full bg-white rounded-full">
          <img src="/gadget.png" alt="Gadget Showcase" className="w-full max-h-96 object-contain drop-shadow-lg"/>
        </div>
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

const AllProducts = React.lazy(() => import('../Components/AllProducts'));

export default function GadgetsPage() {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = 'https://fake-api-one-rust.vercel.app/api/gadget/all_products';
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);

        // Derive unique categories
        const categorySet = new Set(data.map((item) => item.category || 'Uncategorized'));
        setCategories(['All', ...Array.from(categorySet)]);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-slate-200">
      {/* Hero Section */}
      <GadgetHero />
      <div className="2xl:max-w-[80%] max-w-7xl py-10 bg-white rounded-xl my-10 mx-auto">
        {/* Page Heading */}
        <div className="text-center lg:max-w-[50%] max-w-[90%] mx-auto">
          <div className="mb-3">
            <h1 className="relative font-medium md:text-4xl text-2xl gadget">GADGETS</h1>
          </div>
          <p className="text-sm text-gray-500 lg:max-w-[80%] mx-auto">
            Upgrade your tech game! Explore our top-quality gadgets at unbeatable prices—shop now
            for the latest in innovation and style!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 my-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                selectedCategory === category ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-600 py-4">
            Failed to load products. Please try again later.
          </div>
        )}

        {/* Products Grid */}
        <div className="mt-7 py-3 px-2 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
          {currentProducts.map((product) => (
            <productsContext.Provider value={product} key={product._id}>
              <Suspense fallback={<Loader />}>
                <AllProducts />
              </Suspense>
            </productsContext.Provider>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center items-center gap-3 flex-wrap font-medium">
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50">
            First
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50">
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-md transition-transform duration-200 transform hover:scale-110 shadow-lg ${
                currentPage === index + 1
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50">
            Next
          </button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50">
            Last
          </button>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
