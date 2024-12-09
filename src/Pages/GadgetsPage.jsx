import React, { useEffect, Suspense, createContext, useState } from 'react';
import Loader from '../Components/loader/Loader';

export const productsContext = createContext();
const AllProducts = React.lazy(() => import('../Components/AllProducts'));

export default function GadgetsPage() {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const url = 'https://fake-api-one-rust.vercel.app/api/gadget/all_products';
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      };
      fetchProducts();
    } catch (error) {
      setError(error);
    }
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="py-10 bg-slate-200">
      <div className="2xl:max-w-[80%] bg-white rounded-md py-6 shadow-lg xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
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

        {/* Products Grid */}
        <div className="mt-7 py-3 px-2 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Suspense fallback={<Loader />} key={product.id}>
                <productsContext.Provider value={product}>
                  <AllProducts product={product} />
                </productsContext.Provider>
              </Suspense>
            ))
          ) : (
            <p className="text-center col-span-full">No products available.</p>
          )}
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
            <button key={index} onClick={() => handlePageChange(index + 1)} className={`px-3 py-1 rounded-md transition-transform duration-200 transform hover:scale-110 shadow-lg ${
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
    </div>
  );
}
