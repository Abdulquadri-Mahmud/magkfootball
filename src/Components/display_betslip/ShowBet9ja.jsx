import React, { useContext, useState } from "react";
import { Bet9JaContext } from "../../Pages/Bet9Ja";
import { FaRegCopy, FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ShowBet9ja() {
  const data = useContext(Bet9JaContext);
  const { currentAdmin } = useSelector((state) => state.admin);

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.betslipCode);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setCopyStatus("Failed to copy!");
    }
  };

  const handleDelete = () => {
    // Implement delete logic here (e.g., dispatch an action or call API)
    alert("Delete function triggered!");
  };

  return (
    <div className="relative shadow-md flex justify-center flex-wrap items-center py-5 px-3 bg-white rounded-md">
      <p className="absolute top-2 left-2 text-gray-500 font-medium text-sm">Betslip</p>

      <h2 className="font-medium py-10 text-3xl cursor-pointer break-words">
        {data?.betslipCode}
      </h2>

      {/* Copy Icon */}
      <div
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <p
          className="absolute cursor-pointer bottom-2 right-2 text-xl text-gray-500"
          onClick={handleCopy}
        >
          <FaRegCopy />
        </p>
        {isTooltipVisible && (
          <div className="absolute -top-8 right-0 bg-blue-900 text-white text-sm px-2 py-1 rounded">
            {`Copy Betslip: ${data.betslipCode}`}
          </div>
        )}
      </div>

      {/* Copy Status Bubble */}
      <div className={`absolute top-1 right-3 ${copyStatus ? 'w-[100px] bg-blue-900 rounded-l-full rounded-br-full py-1 flex justify-center items-center text-white duration-150' : 'w-0'} overflow-hidden`}>
        <p>{copyStatus}</p>
      </div>

      {/* Admin-Only Delete Icon */}
      {currentAdmin && (
        <button
          onClick={handleDelete}
          className="absolute top-2 right-10 text-red-600 hover:text-red-800 text-lg"
          title="Delete Betslip"
        >
          <FaTrashAlt />
        </button>
      )}

      <div className="absolute bottom-1 left-1">
        <p className="text-sm text-gray-500 font-medium">{data.date}</p>
      </div>
    </div>
  );
}
