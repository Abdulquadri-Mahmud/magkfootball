import { FaRegCopy } from 'react-icons/fa6'
import ShowMsport from '../Components/display_betslip/ShowMsport'
import React, { createContext, useEffect, useState } from 'react'
export const betContext = createContext();

export default function MSport() {
    const data = [
        {
            id: 1,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            date: '22 - Nov - 2024',
        },
        {
            id: 2,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            date: '22 - Nov - 2024',
        },
        {
            id: 3,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            date: '22 - Nov - 2024',
        },
        {
            id: 4,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            date: '22 - Nov - 2024',
        },
        {
            id: 5,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            date: '22 - Nov - 2024',
        },
        {
            id: 6,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            title: '22 - Nov - 2024',
        },
        {
            id: 7,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            title: '22 - Nov - 2024',
        },
        {
            id: 8,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            date: '22 - Nov - 2024',
        },
        {
            id: 9,
            title: 'Betslips',
            code: 'BHDGSFFJ',
            icon: <FaRegCopy />,
            date: '22 - Nov - 2024',
        },
    ]

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
            <div className="w-[100%] md:h-[220px] h-[200px] msport rounded-md flex justify-center items-center bg-black ">
                <div className=" text-white">
                    <div className="flex justify-center flex-col gap-2 items-center">
                        <h1 className='text-6xl  font-medium text-white'>MSp<span className="text-yellow-400">ort</span></h1>       
                        <p className="text-2xl font-medium">BETS<span className="">LIPS</span></p>
                    </div>
                    <p className="text-gray-200 pt-3 text-sm text-center">Check out our reliable bestlips</p>
                </div>
            </div>

            <div className="">
                <h2 className="mb-4 mt-8 text-3xl font-medium text-yellow-00">Todays Betslips</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
                {
                    datas.map((data) => (
                        data.category === 'MSport' ? (
                            <div key={data._id}>
                                <betContext.Provider value={data}>
                                    <ShowMsport data={data}/>
                                </betContext.Provider>
                            </div>
                        ) : 'No betslip available'
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}
