import React, { useContext, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { TbCurrencyNaira } from 'react-icons/tb'
import { productContext } from '../Pages/Home'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/cartReducer';
import { Link } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5';

export default function Gadget() {

    const products = useContext(productContext);
    const [alert, setAlert] = useState(false);

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
    <div key={_id} className="shadow-md rounded-md relative">
        <Link to={`/product-details/${_id}`}>
            <div className="flex justify-center pt-0 md:w-[200px] h-[150px] w-[140px] mx-auto">
                <img src={image} className='max-w-full object-cover object-top' alt="" />
            </div>
        </Link>
        <button onClick={handleWishlistItem} className=" text-white cursor-pointer hover:text-blue-900 active:text-blue-900 focus:text-blue-900 absolute top-3 right-3 w-[30px] h-[30px] bg-blue-300 flex justify-center items-center rounded-full">
            <IoHeart className='text-xl'/>
        </button>
        <div className="p-3">
            <h2 className='py-1 font-medium md:text-center truncate'>{name}</h2>
            <p className="truncate">{description}</p>
            <div className="flex items-center justify-between">
                <p className="font-medium flex items-center"><TbCurrencyNaira />{price}</p>
            </div>
            <button onClick={handleCart} className='bg-blue-900 font-medium py-2 px-3 rounded-sm mt-3 w-full text-white text'>Add To Cart</button>
        </div>
    </div>
  )
}
