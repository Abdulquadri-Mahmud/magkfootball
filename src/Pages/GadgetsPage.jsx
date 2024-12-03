import React, { useEffect, Suspense, createContext, useState } from 'react'
import Loader from '../Components/loader/Loader';

export const productsContext = createContext();
const AllProducts = React.lazy(() => import('../Components/AllProducts'));

export default function GadgetsPage() {
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
    <div className='bg-slate-200'>
      <div className=" py-10 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
          <div className="text-center lg:max-w-[50%] max-w-[90%] mx-auto">
            <div className="mb-3">
              <h1 className='relative font-medium md:text-4xl text-2xl gadget'>GADGETS</h1>
            </div>
            <p className="text-sm text-gray-500 lg:max-w-[80%] mx-auto">Upgrade your tech game! Explore our top-quality gadgets at unbeatable prices—shop now for the latest in innovation and style!</p>
          </div>
          <div className="mt-7 py-3 px-2 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            {
              product.length > 0 && product.map((product) => (
                <Suspense fallback={<Loader/>}>
                  <productsContext.Provider value={product}>
                    <AllProducts product={product}/>
                  </productsContext.Provider>
                </Suspense>
              ))
            }
          </div>
        </div>
    </div>
  )
}
