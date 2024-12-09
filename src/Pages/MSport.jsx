import React, { createContext, Suspense, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

export const betContext = createContext();

const ShowMsport = React.lazy(() => import('../Components/display_betslip/ShowMsport'))

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
        const filtered = data.filter((item) => item.category === 'MSport');
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
        <div className="w-[100%] md:h-[220px] h-[200px] msport rounded-md flex justify-center items-center bg-black ">
            <div className=" text-white">
                <div className="flex justify-center flex-col gap-2 items-center">
                    <h1 className='text-6xl  font-medium text-white'>MSp<span className="text-yellow-400">ort</span></h1>       
                    <p className="text-2xl font-medium">BETS<span className="">LIPS</span></p>
                </div>
                <p className="text-gray-200 pt-3 text-sm text-center">Check out our reliable bestlips</p>
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
                    <ShowMsport data={data} />
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

