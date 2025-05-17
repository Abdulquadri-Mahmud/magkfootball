import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { FaRegCopy, FaTrashAlt } from 'react-icons/fa';

export default function Bet9Ja() {
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [copyStatus, setCopyStatus] = useState(null); // ID of copied betslip
  const [tooltip, setTooltip] = useState(null); // { type: 'success' | 'error', message: string }
  const itemsPerPage = 6;
  const { currentAdmin } = useSelector(state => state.admin);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = `https://fake-api-one-rust.vercel.app/api/betslip/all_betslip`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.success === false) {
          throw new Error('Error while fetching data!');
        }

        const filtered = data.filter(item => item.category === '1xBet');
        setDatas(data);
        console.log(data);
        
        setFilteredDatas(filtered);
      } catch (error) {
        console.error(error);
        setTooltip({ type: 'error', message: 'Failed to fetch betslips.' });
        setTimeout(() => setTooltip(null), 3000);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDatas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDatas.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://fake-api-one-rust.vercel.app/api/betslip/delete_betslip_by_body/${id}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const result = await res.json();

      if (!res.ok || result.success === false) {
        setTooltip({ type: 'error', message: result.message || 'Failed to delete betslip' });
        setTimeout(() => setTooltip(null), 3000);
        return;
      }

      // Remove immediately from states
      setFilteredDatas(prev => prev.filter(item => item._id !== id));
      setDatas(prev => prev.filter(item => item._id !== id));

      // If page becomes empty after deletion and not on first page, go back a page
      if (currentItems.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      setTooltip({ type: 'success', message: 'Betslip deleted successfully' });
      setTimeout(() => setTooltip(null), 3000);
    } catch (error) {
      console.error('Delete failed:', error);
      setTooltip({ type: 'error', message: 'An error occurred while deleting' });
      setTimeout(() => setTooltip(null), 3000);
    }
  };

  const handleCopy = async (betslipCode, id) => {
    try {
      await navigator.clipboard.writeText(betslipCode);
      setCopyStatus(id);
      setTooltip({ type: 'success', message: 'Copied to clipboard!' });
      setTimeout(() => {
        setCopyStatus(null);
        setTooltip(null);
      }, 2000);
    } catch {
      setTooltip({ type: 'error', message: 'Failed to copy to clipboard' });
      setTimeout(() => setTooltip(null), 3000);
    }
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
        <div className="bg-white p-5 rounded-md mt-5">
          <h2 className="mb-4 mt-8 text-2xl font-medium">Today's Betslips</h2>

          {filteredDatas.length === 0 ? (
            <div className="flex justify-center py-20">
              {/* <BeatLoader color="#1D4ED8" loading={true} size={15} /> */}
              <p className="">No Betslip Found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
              {currentItems.map((data) => (
                <div key={data._id} className="relative shadow-md flex flex-col justify-center items-center py-5 px-3 bg-white rounded-md">
                  <p className="absolute top-2 left-2 text-gray-500 font-medium text-sm">Betslip</p>
                  <h2 className="font-medium py-10 text-3xl cursor-pointer break-words">
                    {/* // Optionally: add lazy loading for images if any */}
                    {data.betslipCode}
                  </h2>

                  {/* Copy icon */}
                  <div className="absolute bottom-2 right-2 text-xl text-gray-500 cursor-pointer" onClick={() => handleCopy(data.betslipCode, data._id)} title={`Copy Betslip: ${data.betslipCode}`}>
                    <FaRegCopy />
                  </div>

                  {/* Copy status tooltip */}
                  {copyStatus === data._id && (
                    <div className="absolute top-1 right-3 w-[100px] bg-blue-900 rounded-l-full rounded-br-full py-1 flex justify-center items-center text-white duration-150 overflow-hidden">
                      <p>Copied!</p>
                    </div>
                  )}

                  {/* Date */}
                  <div className="absolute bottom-1 left-1">
                    <p className="text-sm text-gray-500 font-medium">{data.date}</p>
                  </div>

                  {/* Delete button only for admin */}
                  {currentAdmin && (
                    <button className="bg-blue-600 rounded-bl-md p-1 absolute top-2 right-2 text-white hover:text-red-800" onClick={() => handleDelete(data._id)} title="Delete betslip">
                      <FaTrashAlt />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button onClick={handlePrevious} disabled={currentPage === 1} className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            Previous
          </button>
          <span className="mx-4 text-lg font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNext} disabled={currentPage === totalPages} className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            Next
          </button>
        </div>

        {/* Tooltip for success/error messages */}
        {tooltip && (
          <div className={`fixed bottom-5 right-5 px-5 py-3 rounded-lg shadow-lg text-white font-semibold transition-opacity duration-300 ${
              tooltip.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {tooltip.message}
          </div>
        )}
      </div>
    </div>
  );
}

