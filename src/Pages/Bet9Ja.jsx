import React, { createContext, Suspense, useEffect, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Bet9JaContext = createContext();
const ShowBet9ja = React.lazy(() => import('../Components/display_betslip/ShowBet9ja'))

export default function Bet9Ja() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        try {
            const fetchUsers = async () => {
                const url = `https://fake-api-one-rust.vercel.app/api/betslip/all_betslip`;
        
                const res = await fetch(url);
        
                const data = await res.json();
        
                if (data.success === false) {
                  setError('Error while fetching data!');
                }
        
                setDatas(data);

            }; fetchUsers();
        } catch (error) {
            console.log(error);
        }
    }, []);
    
  return (
    <div className='py-10 bg-zinc-100'>
        <div className="2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
            
            <div className="w-[100%] md:h-[220px] h-[200px] rounded-md flex justify-center items-center bg-gray-900 ">
                <div className="text-white">
                    <div className="flex justify-center flex-col gap-1 items-center">
                        <h1 className='text-6xl font-medium text-red-600'>Bet<span className="text-green-600">9ja</span></h1>       
                        <p className="text-2xl font-medium text-red-600">BES<span className="text-green-600">LIPS</span></p>
                        <p className="text-gray-500 text-sm text-center">Check out our reliable bestlips</p>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="mb-4 mt-8 text-2xl font-medium">Todays Betslips</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
                    {
                        datas.map((data) => (
                            data.category === 'Bet9ja' && (
                                <div key={data._id}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <Bet9JaContext.Provider value={data}>
                                            <ShowBet9ja data={data}/>
                                        </Bet9JaContext.Provider>
                                    </Suspense>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
