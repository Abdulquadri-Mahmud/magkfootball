import { RiVipCrownFill } from 'react-icons/ri'

import React, { createContext, Suspense, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

export const betContext = createContext();

const Show1Xbet = React.lazy(() => import('../Components/display_betslip/Show1Xbet'))

export default function Bet9Ja() {
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]); // To store filtered 'Bet9ja' items
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust the number of items per page as needed

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = `https://fake-api-one-rust.vercel.app/api/betslip/all_betslip`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.success === false) {
          throw new Error('Error while fetching data!');
        }

        // Filter items where category === 'Bet9ja'
        const filtered = data.filter((item) => item.category === '1xBet');
        setDatas(data); // Full data
        setFilteredDatas(filtered); // Filtered 'Bet9ja' items
        console.log(filtered);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDatas.slice(indexOfFirstItem, indexOfLastItem); // Apply pagination on filtered data
  const totalPages = Math.ceil(filteredDatas.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='py-10 bg-zinc-100'>
      <div className="2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
        {/* Header */}
        <div className="w-[100%] md:h-[220px] h-[200px] rounded-md flex justify-center items-end xbet">
            <div className="text-white">
                <div className="flex justify-center flex-col gap-1  items-center">
                    {/* <h1 className='text-4xl  font-medium flex'>Betano</h1> */}
                    {/* <p className="text-4xl font-medium text-cyan-600">BES<span className="text-yellow-400">LIPS</span></p> */}
                    <p className="text-white font-medium text-sm text-center pb-2">Check out our reliable bestlips</p>
                </div>
            </div>
        </div>

        {/* Betslips */}
        <div>
          <h2 className="mb-4 mt-8 text-2xl font-medium">Today's Betslips</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
            {currentItems.map((data) => (
              <div key={data._id}>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center">
                      <BeatLoader color="#1D4ED8" loading={true} size={15} />
                    </div>
                  }
                >
                  <betContext.Provider value={data}>
                    <Show1Xbet data={data} />
                  </betContext.Provider>
                </Suspense>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button onClick={handlePrevious} disabled={currentPage === 1} className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </button>
          <span className="mx-4 text-lg font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNext} disabled={currentPage === totalPages} className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

