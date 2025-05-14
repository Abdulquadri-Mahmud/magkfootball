import React, { useContext, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { TbCurrencyNaira } from 'react-icons/tb';
import { productContext } from '../Pages/Home';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/cartReducer';
import { Link } from 'react-router-dom';
import { IoHeart } from 'react-icons/io5';

export default function Gadget() {
  const products = useContext(productContext);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const { _id, image, name, price, description } = products;

  const getCarts = {
    productID: _id,
    productName: name,
    productImage: image,
    productPrice: price,
    quantity: 1,
  };

  const handleCart = () => {
    dispatch(addToCart(getCarts));
  };

  const handleWishlistItem = () => {
    // Placeholder function for wishlist integration
    setAlert('Your item has been saved.');
  };

  return (
    <div key={_id}
      className="shadow-lg rounded-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <Link to={`/product-details/${_id}`} className="block relative">
        <img src={image} alt={name} className="w-full h-[180px] object-cover"/>
        <button onClick={(e) => {
            e.preventDefault();
            handleWishlistItem();
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-white text-red-500 flex justify-center items-center rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors duration-300">
          <IoHeart className="text-xl" />
        </button>
      </Link>

      <div className="p-4">
        <h2 className="font-semibold text-lg truncate mb-2 text-gray-800">
          {name}
        </h2>
        <p className="text-gray-600 text-sm mb-4 truncate">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <p className="flex items-center text-blue-900 font-bold text-xl">
            <TbCurrencyNaira className="mr-1" />
            {price}
          </p>
        </div>

        <button onClick={handleCart} className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300">
          <FaCartShopping /> Add to Cart
        </button>
      </div>
    </div>
  );
}
