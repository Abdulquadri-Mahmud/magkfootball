import React, { useContext, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { TbCurrencyNaira } from 'react-icons/tb';
import { IoHeart } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productsContext } from '../Pages/GadgetsPage';
import { addToCart } from '../store/cart/cartReducer';
import { addWishlist } from '../store/wishlist/wishlist';

export default function AllProducts() {
  const product = useContext(productsContext);
  const dispatch = useDispatch();
  const [wishlistAlert, setWishlistAlert] = useState(false);

  const { _id, image, name, price, description } = product;

  const productPayload = {
    productID: _id,
    productName: name,
    productImage: image,
    productPrice: price,
    quantity: 1,
  };

  const handleCart = () => {
    dispatch(addToCart(productPayload));
  };

  const handleWishlistItem = () => {
    dispatch(addWishlist(productPayload));
    setWishlistAlert(true);
    setTimeout(() => setWishlistAlert(false), 2000);
  };

  return (
    <div key={_id} className="shadow-lg rounded-xl bg-white p-4 relative transition hover:shadow-xl">
      <Link to={`/product-details/${_id}`}>
        <div className="flex justify-center items-center h-[180px] md:h-[200px] overflow-hidden rounded-md bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistItem}
        className="absolute top-3 right-3 w-9 h-9 bg-blue-100 text-blue-700 hover:bg-blue-300 rounded-full flex justify-center items-center shadow"
        aria-label="Add to wishlist"
      >
        <IoHeart className="text-lg" />
      </button>

      {/* Wishlist Alert */}
      {wishlistAlert && (
        <div className="absolute top-12 right-3 text-xs bg-white border px-2 py-1 rounded shadow text-gray-700">
          Saved to wishlist!
        </div>
      )}

      <div className="mt-4 space-y-1">
        <h2 className="font-semibold text-sm md:text-center truncate">{name}</h2>
        <p className="text-gray-500 text-xs md:text-center truncate">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium text-gray-800 flex items-center">
            <TbCurrencyNaira className="mr-1" />
            {Number(price).toLocaleString()}
          </span>
        </div>
        <button
          onClick={handleCart}
          className="mt-3 w-full bg-blue-900 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-800 transition"
        >
          <FaCartShopping className="inline mr-2 mb-1" />
          Add To Cart
        </button>
      </div>
    </div>
  );
}
