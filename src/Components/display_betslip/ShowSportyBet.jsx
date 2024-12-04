import React, { useContext, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa6';

export default function ShowSportyBet() {
    const data = useContext(Bet9JaContext);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false); // State for tooltip visibility
  const [copyStatus, setCopyStatus] = useState(""); // State to track copy status

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.betslipCode);
      setCopyStatus("Copied!");
      // alert("Betslip copied!"); // Alert when copied
      setTimeout(() => setCopyStatus(""), 2000); // Clear status after 2 seconds
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setCopyStatus("Failed to copy!");
    }
  };

  return (
    <div className="relative shadow-md flex justify-center flex-wrap items-center py-5 px-3 bg-white rounded-md">
      <p className="absolute top-2 left-2 text-gray-500 font-medium text-sm">Betslip</p>

      <h2 className="font-medium py-10 text-3xl cursor-pointer break-words">
        {data.betslipCode}
      </h2>

      {/* Tooltip for the copy icon */}
      <div onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}>
        <p className="absolute cursor-pointer bottom-2 right-2 text-xl text-gray-500" onClick={handleCopy}>
          <FaRegCopy />
        </p>
        {isTooltipVisible && (
          <div
            className="absolute -top-8 right-0 bg-blue-900 text-white text-sm px-2 py-1 rounded"
            style={{ whiteSpace: "nowrap" }}
          >
            {`Copy Betslip: ${data.betslipCode}`}
          </div>
        )}
      </div>
      <div className={`absolute top-1 right-3 ${copyStatus ? 'w-[100px] bg-blue-900 rounded-l-full rounded-br-full py-1 flex justify-center items-center text-white duration-150' : 'w-0'} overflow-hidden w-0`}>
        <p className="">Copied</p>
      </div>
      <div className="absolute bottom-1 left-1">
        <p className="text-sm text-gray-500 font-medium">{data.date}</p>
      </div>
    </div>
  );
}
