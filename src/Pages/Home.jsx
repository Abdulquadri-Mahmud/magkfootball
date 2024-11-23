import React, { createContext, Suspense, useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import Section1 from '../Components/sections/Section1'
import Section2 from '../Components/section2/Section2'
import BetsSection from '../Components/betsSection/BetsSection'
import { useSelector } from 'react-redux'
import About_page from './About_page'

export const productContext = createContext();
const Gadget = React.lazy(() => import('../Components/Gadget'));

export default function Home() {
  const { currentAdmin } = useSelector((state) => state.admin);
  // console.log(currentAdmin);

  const [error, setError] = useState(null);
  const [product, setProducts] = useState({});

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        const url = 'https://fake-api-one-rust.vercel.app/api/gadget/all_products';
  
        const res = await fetch(url);
  
        const data = await res.json();

        setProducts(data);

      }; fetchProduct();

    } catch (error) {
      setError(error)
    }


  }, []);
  
  return (
    <div className=''>
        <Hero/>
        {/* <Section2/> */}
        <About_page/>
        <div className="mt-8">
          <BetsSection/>
        </div>
        <div className="my-20 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
          <div className="text-center lg:max-w-[50%] max-w-[90%] mx-auto">
            <div className="mb-3">
              <h1 className='relative font-medium md:text-4xl text-2xl gadget'>GADGETS</h1>
            </div>
            <p className="text-sm text-gray-500">Upgrade your tech game! Explore our top-quality gadgets at unbeatable prices—shop now for the latest in innovation and style!</p>
          </div>
          <div className="mt-7 py-3 px-2 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            {
              product.length > 0 && product.map((product) => (
                <productContext.Provider value={product}>
                  <Suspense fallback={<div className='text-black'>Loading...</div>}>
                    <Gadget product={product}/>
                  </Suspense>
                </productContext.Provider>
              ))
            }
          </div>
        </div>
        {/* <Section1/> */}
    </div>
  )
}