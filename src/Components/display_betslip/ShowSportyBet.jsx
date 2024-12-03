import React, { useContext, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa6';

export default function ShowSportyBet() {
    const data = useContext(Bet9JaContext);
    const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="relative shadow-md flex justify-center flex-wrap items-center py-5 px-3 bg-white rounded-md">
        <p className="absolute top-2 left-2 text-gray-500 font-medium text-sm">Betslip</p>
        <h2 className="font-medium py-10 text-3xl cursor-pointer break-words">{data.betslipCode}</h2>
        <p className="absolute top-2 right-2 text-xl text-gray-500"
        text={data.betslipCode} onCopy={() => setIsCopied(true)}><FaRegCopy/></p>
        <div className="">
            <p className="text-sm text-gray-500 font-medium">{data.date}</p>
        </div>
    </div>
  )
}
