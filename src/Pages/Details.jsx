import React, { useEffect, useRef, useState } from 'react'
import { CgMathMinus } from 'react-icons/cg';
import { FaNairaSign, FaStar } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { IoHeart } from 'react-icons/io5';
import { MdOutlinePolicy } from 'react-icons/md';
import { PiGreaterThan } from 'react-icons/pi';
import { RiAddFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { addToCart, changeQuantity } from '../store/cart/cartReducer';
import { addWishlist } from '../store/wishlist/wishlist';

export default function Details() {
      const { id } = useParams();
      const { items } = useSelector((state) => state.cart);
      const { currentAdmin } = useSelector((state) => state.admin);
      const [product, setProduct] = useState([]);

      let displayImage = useRef(null);
      const logQuantity = useRef(null);

      const dispatch = useDispatch();

      useEffect(() => {
            const fetchData = async () => {
              const res =  await fetch(`https://fake-api-one-rust.vercel.app/api/gadget/single_products/${id}`);
      
              const data = await res.json();
      
              setProduct(data);
              
            };
      
            fetchData();
          }, []);
      
          const {_id, name, category, image, price, trackingId, description, oldprice, size, gender} = product;
          
          // if (currentUser) {
          //   adminid = currentUser._id
          // };
      
          let sizeSelected = [];
      
          const getCarts = {
              productID: _id,
              productName: name,
              productImage : image,
              productPrice: price,
              quantity: 1
          }
      
          const handleCart = () => {
            dispatch(addToCart(getCarts));
          }
      
          const getWishlist = {
            productID: _id,
            productName: name,
            productImage : image,
            productPrice: price,
            productSize: sizeSelected,
            quantity: 1
          }
      
          const handleWishlistItem = () => {
            dispatch(addWishlist(getWishlist));
            toast({
              description: "Your item has been saved.",
              duration: 5000,
              isClosable: true,
              bgColor: 'pink.600',
            });
          }
      
          const increaseQuantity = () => {
            items.map((item) => {
              if (_id === item.productID) {
                dispatch(changeQuantity({
                  productID : item.productID,
                  quantity : item.quantity + 1
                }));
              }
            });
          }
      
          let navigate = useNavigate();
      
          const decreaseQuantity = () => {
            items.map((item) => {
              if (_id === item.productID) {
                dispatch(changeQuantity({
                  productID : item.productID,
                  quantity : item.quantity - 1 < 1 ? navigate('/')
                   : item.quantity - 1
                }));
              }
            });
          }
      
          const handleClick = (img) => {
            displayImage.current.src = img;
          }
  
  return (
      <div className="bg-zinc-200">
            
            <div className='py-10 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto'>
                  <div className="flex gap-1 items-center">
                        <Link to={'/'} className='text-[13px] text-gray-500'>Home</Link>
                        <PiGreaterThan className='text-[13px] text-gray-500 pt-1'/>
                        <Link to={'/product-details'} className='text-[13px] text-gray-500'>Products Details</Link>
                  </div>
                  <div className="mt-7 flex justify-center gap-2 flex-wrap">
                        <div className="flex-1 relative bg-white md:p-4 p-2 rounded-md">
                              <div className="flex gap-2 flex-wrap">
                                    <div className="2xl:w-[350px] w-[300px]">
                                          <div className="w-[300px] flex md:justify-start justify-center">
                                                {
                                                      image !== undefined ? (
                                                            <>
                                                                  <img src={image[0]} alt="" ref={displayImage} className='max-w-full object-fill'/>
                                                            </>
                                                      ) : (
                                                            <img src={image} alt="" ref={displayImage} className='max-w-full object-fill'/> 
                                                      )
                                                }
                                          </div>
                                          <div className="py-2">
                                                {
                                                image !== undefined ? (
                                                      <div className='flex items-center gap-2'>
                                                            {
                                                                  image.length > 0 && image.map((img) => {
                                                                        return (
                                                                              <div className="max-w-14 bg-blue-300 p-1 rounded-md">
                                                                                    <img src={img} onClick={() => handleClick(img)} className='' alt="" />
                                                                              </div>
                                                                        )
                                                                  })
                                                            }
                                                      </div>
                                                ) : ''
                                                }
                                          </div>
                                    </div>
                                    <div className="flex-1 bg-white md:mt-0 mt-4 pl-3">
                                          <div className=" mt-4 border-b-[1px] border-b-gray-300 pb-2">
                                                <h2 className='text-xl font-medium'>{name}</h2>
                                                <div className="mt-3">
                                                      <p className='text-sm text-gray-500 my-1'>Product Code: <span className='text-gray-600 text-[13px]'>{trackingId}</span></p>
                                                      {/* <div className="flex items-center gap-2">
                                                            <FaStar className='text-yellow-500'/>
                                                            <FaStar className='text-yellow-500'/>
                                                            <FaStar className='text-yellow-500'/>
                                                            <FaStar className='text-yellow-500'/>
                                                            <FaStar className='text-yellow-500'/>
                                                            <p className='text-sm text-gray-500'>11 Reviews</p>
                                                      </div> */}
                                                      {/* <p className='text-sm text-gray-500 pt-2'>Brand: <span className='text-gray-600 text-[13px]'></span></p> */}
                                                </div>
                                                <div className="py-3">
                                                      <div className="flex items-center">
                                                            {
                                                                  price !== undefined ? (
                                                                  <>
                                                                        <FaNairaSign className='text-xl'/>
                                                                              <h2 className='lg:text-4xl text-3xl font-medium'>{price.toLocaleString()}.00</h2>
                                                                        {
                                                                              oldprice && (
                                                                                    <p className="text-[16px] text-gray-400 font-medium pt-1 line-through flex items-center pl-3"><FaNairaSign className='text-[16px]'/>{oldprice}</p>
                                                                              )
                                                                        }
                                                                  </>
                                                                  ): ''
                                                            }
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="border-b-[1px] border-b-gray-300 py-3">
                                                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                                                      <div className="flex items-center gap-2">
                                                            <p className='text-sm'>Quantity: </p>
                                                            <div className="flex gap-2 items-center">
                                                                  <button type='button' className='bg-zinc-200 w-7 h-7 rounded-md flex justify-center items-center' onClick={decreaseQuantity}><CgMathMinus className='text-sm'/></button>
                                                                  <span className="" ref={logQuantity}>
                                                                  {
                                                                        items.map((item) => (
                                                                              <>
                                                                              {
                                                                              _id === item.productID && (
                                                                                    <>
                                                                                    {item.quantity}
                                                                                    </>
                                                                              )
                                                                              }
                                                                              </>
                                                                        ))
                                                                  }
                                                                  </span>
                                                                  <button type='button' className='bg-zinc-200 w-7 h-7 rounded-md flex justify-center items-center' onClick={increaseQuantity}><RiAddFill className='text-sm'/></button>
                                                            </div>
                                                      </div>
                                                      
                                                      <div className="bg-zinc-100 py-2 px-2 rounded-md mt-5">
                                                            <p className='text-sm font-medium text-center'>Call us for Bulk Purchase</p>
                                                            <div className="flex justify-center items-center text-blue-600 font-medium">
                                                                  <IoMdCall/>
                                                                  <Link to={'tell:07047594667'} className='text-center'>07047594667</Link>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className=" mt-5 flex justify-between items-center">
                                                      <button className="bg-blue-950 text-white px-5 py-2 rounded-md w-[100%] font-medium" onClick={handleCart}>Add To Cart</button>
                                                </div>
                                                      <button onClick={handleWishlistItem} className=" text-white cursor-pointer hover:text-pink-600 active:text-pink-600 focus:text-pink-600 absolute top-3 right-3 w-[30px] h-[30px] bg-gray-300 flex justify-center items-center rounded-full">
                                                            <IoHeart className='text-xl'/>
                                                      </button>
                                                {
                                                      currentAdmin && (
                                                            <div mt={4} className='text-blue-600 text-center'>
                                                                  <Link to={`/admin/update-products/${_id}`}>Update Product</Link>
                                                            </div>
                                                      )
                                                }
                                          </div>
                                    </div>
                              </div>
                              <div className='block lg:hidden bg-white px-3 py-3 rounded-md 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto'>
                                    <div className="mb-2">
                                          <h2 className='font-medium text-xl'>Description:</h2>
                                    </div>
                                    <ReactMarkdown >{description}</ReactMarkdown>
                              </div>
                        </div>
                        <div className="md:w-[350px] w-full bg-white rounded-md md:h-[]">
                              <div className="py-2 border-b-[1px] border-b-gray-300 p-3">
                                    <p className='text-[16px] font-medium'>Delivery & Retrurn</p>
                              </div>
                              <div className="py-3 flex gap-2 justify-start p-3">
                                    <div className="">
                                          <TbTruckDelivery className='text-blue-600 text-xl'/>
                                    </div>
                                    <div className="">
                                          <p className='text-[15] font-medium'>Delivery</p>
                                          <p className=''>Estimated delivery time 1-9 business days</p>
                                          <p className="text-[13px] pb-3">Express Delivery Available</p>
                                          <p className="text-[13px] pb-3"><span className="font-medium">For Same-Day-Delivery:</span> Please place your order before 11AM</p>
                                          <p className="text-[13px] pb-3"><span className="font-medium">Next-Day-Delivery:</span> Orders placed after 11AM will be delievered the next day</p>
                                          <p className="text-[13px] pb-3"><span className="text-[13px] font-medium">Note: </span>Availability may vary by location</p>
                                    </div>
                              </div>
                              <div className="text-[13px] py-3 flex gap-2 justify-start p-3">
                                    <div className="">
                                          <MdOutlinePolicy className='text-blue-600 text-xl'/>
                                    </div>
                                          <div className="">
                                          <p className="text-[15px] pb-3">Return Policy</p>
                                          <p className="text-[13px] pb-3 font-medium">Guaranteed 7-Day Return Policy</p>
                                    </div>
                              </div>
                              {/* <div className="py-3 flex gap-2 justify-start p-3">
                              <div className="text-[13px]">

                              </div>
                              <div className="text-[13px]">
                              <p className="text-[16] pb-3">Waranty</p>
                              <p className="">Warranty information unavailable for this item.</p>
                              </div>
                              </div> */}
                  </div>
                  </div>
                  <div className='hidden md:block bg-white px-3 py-3 rounded-md mt-6'>
                        <div className="mb-2">
                              <h2 className='font-medium text-xl'>Description:</h2>
                        </div>
                        <ReactMarkdown >{description}</ReactMarkdown>
                  </div>
            </div>
      </div>
  )
}
