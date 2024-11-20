import React, { useContext, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { TbCurrencyNaira } from 'react-icons/tb'
import { productContext } from '../Pages/Home'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/cartReducer';

export default function Gadget() {

    const products = useContext(productContext);
    const [alert, setAlert] = useState(false);

    console.log(products);

    const dispatch = useDispatch();

    const {_id,image, name, price, description} = products;

    // const priceToLocalString = price.toLocaleString();
    
    const getCarts = {
      productID: _id,
      productName: name,
      productImage : image,
      productPrice: price,
      quantity: 1
    };
  
    const handleCart = () => {
        dispatch(addToCart(getCarts))
    }

    const handleWishlistItem = () => {
      dispatch(addWishlist(getCarts));
      setAlert("Your item has been saved.");
    }
    
  return (
    <div className='mb-10'>
        <div className="text-center">
            <h1 className='font-medium md:text-4xl text-2xl pb-2'>GADGETS</h1>
            <p className="text-sm text-gray-500">Upgrade your tech game! Explore our top-quality gadgets at unbeatable prices—shop now for the latest in innovation <br /> and style!</p>
        </div>

        <div className=" mt-4 xl:max-w-[85%] w-[97%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {
                products.length > 0 && products.map((product) => {
                    return (
                        <div key={product._id} className="shadow-md rounded-md">
                            <img src={product.image} className='w-full rounded-md' alt="" />
                            <div className="p-3">
                                <h2 className='font-medium pb-4'>{product.name}</h2>
                                <div className="flex items-center justify-between">
                                    <p className="font-medium flex items-center"><TbCurrencyNaira />{product.price}</p>
                                    <button onClick={handleCart} className='bg-blue-500 p-1 rounded-full text-white text'><FaCartShopping /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
