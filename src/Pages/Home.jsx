import React, { createContext, useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Header from '../Components/Header'
import Section1 from '../Components/sections/Section1'
import Section2 from '../Components/section2/Section2'
import BetsSection from '../Components/betsSection/BetsSection'
import Gadget from '../Components/Gadget'
import { useSelector } from 'react-redux'

export const productContext = createContext();

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
        <Section2/>
        <BetsSection/>
        <Section1/>
        <productContext.Provider value={product}>
          <Gadget product={product}/>
        </productContext.Provider>
    </div>
  )
}