import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeQuantity, deleteProduct } from '../store/cart/cartReducer';
import { PiGreaterThan } from 'react-icons/pi';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { CgMathMinus } from 'react-icons/cg';
import { RiAddFill } from 'react-icons/ri';
import { FaNairaSign } from 'react-icons/fa6';

export default function CartPage() {
    const { items } = useSelector((state) => state.cart);
    const [emptyCart, setEmptyCart] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const {currentUser} = useSelector((state) => state.user);

    let total = 0;
    
    let dispatch = useDispatch();

    // useEffect()
    // const mSize = item.productSize.findIndex((it) => it === 'M');

    const increaseQuantity = (id) => {
        items.map((item) => {
        if (id === item.productID) {
            dispatch(changeQuantity({
            productID : item.productID,
            quantity : item.quantity + 1
            }));
        }
        });
    }

    let navigate = useNavigate();

    const decreaseQuantity = (id) => {
        items.map((item) => {
        if (id === item.productID) {
            dispatch(changeQuantity({
            productID : item.productID,
            quantity : item.quantity - 1 < 1 ? 1
            : item.quantity - 1
            }));
        }
        });
    };

    const handleRemoveItem = (id) => {
        dispatch(deleteProduct({
            productID: id,
        }));

        if (items.length === 0) {
            setEmptyCart(true);
            return;
        }
    };

    useEffect(() => {
        if (items.length === 0) {
            setEmptyCart(true);
            return;
        }
    });

    const handleReidirect =  () => {
        emptyCart ? setAlertMessage('You need to have at least a single item in your cart before you could checkout') : ''
        setTimeout(() => setAlertMessage(""), 2000);
    }

  return (
    <div className='bg-zinc-100'>
        <div className="md:py-10 py-5 2xl:max-w-[80%] xl:max-w-[90%] lg:max-w-[100%] max-w-[97%] mx-auto">
            <div className="flex gap-1 items-center">
                <Link to={'/'} className='text-[13px] text-gray-500'>Home</Link>
                <PiGreaterThan className='text-[13px] text-gray-500 pt-1'/>
                <Link to={'/cart'} className='text-[13px] text-gray-500'>My Carts</Link>
            </div>
            <div className='mt-5'>
                <div className="">
                    <h1 className='text-2xl font-medium'>Shopping Cart</h1>
                </div>
                <div className='border border-gray-300 font-medium text-xl text-blue-900 mt-6 py-3 rounded-md' >
                    <Link to={'/gadgets'} fontWeight={500} className='text- flex items-center justify-center gap-2'><BiLeftArrowAlt/> Continue Shopping</Link>
                </div>
            </div>
            <div className="mt-7 md:flex block justify-center gap-2 flex-wrap">
                <div className="flex-1 relative bg-white md:p-4 p-2 rounded-md">
                    <div className="max-w-[90vw] mx-auto overflow-auto">
                        <table className='w-full'>
                            <thead className='bg-blue-300'>
                                <tr>
                                    <th className='rounded-tl-md font-medium p-[10px] text-center'>Image</th>
                                    <th className='font-medium p-[10px] text-center'>Name</th>
                                    <th className='font-medium p-[10px] text-center'>Quantity</th>
                                    <th className='font-medium p-[10px] text-center'>Items Price</th>
                                    <th className='rounded-tr-md font-medium p-[10px] text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {
                                    items.length > 0 && items.map((item, index) => {
                                    total += item.productPrice * item.quantity ;

                                    return (
                                        <tr className='px-2' key={index}>
                                            <td className='py-2'>
                                                <img src={item.productImage} alt="" className='rounded-md max-w-[50px] max-h-[50px]'/>
                                            </td>
                                            <td className=' py-2 font-medium text-[14px] truncate'>
                                                {item.productName.slice(0, 20)}...
                                            </td>
                                            <td className=' py-2 font-medium'>
                                                <div className="flex justify-center items-center h-full gap-2">
                                                    <button type='button' className='rounded-sm bg-zinc-100 w-6 h-6 flex justify-center items-center' onClick={() => decreaseQuantity(item.productID)}><CgMathMinus className='text-[14px] font-medium text-black'/></button>
                                                    <span className="" >{item.quantity}</span>
                                                    <button type='button' className='rounded-sm bg-zinc-100 w-6 h-6 flex justify-center items-center' onClick={() => increaseQuantity(item.productID)}><RiAddFill className='text-[14px] font-medium text-black'/></button>
                                                </div>
                                            </td>
                                            <td className=' py-3font-medium w-[20%]'>
                                                <text fontWeight={500} textAlign={'center'} className='flex items-center justify-center'><FaNairaSign/>{(item.productPrice * item.quantity).toLocaleString()}.00</text>
                                            </td>
                                            <td className='py-3 font-medium'>
                                                <div className="flex justify-center items-center">
                                                    <button className='text-red-500 text-[14px] font-medium text-center' onClick={() => handleRemoveItem(item.productID)}><MdDelete className='text-2xl'/></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='md:max-w-[300px] w-[100%] mx-auto bg-white p-3 rounded-md'>
                    <div className='flex justify-between items-center pb-3 bottom-2 border-gray-300'>
                        <h1 className='text-sm font-medium'>Order Summary</h1>
                        <p className='text-sm'>Subtotal ({items.length} Item)</p>
                    </div>
                    <div className='flex justify-between items-center pb-3 bottom-2 border-gray-300'>
                        <h1 className='text-sm font-medium'>Delivery Changes:</h1>
                        <p textAlign={'end'} className='text-[11px] text-gray-400'>Add your Delivery address at checkout to see delivery charges</p>
                    </div>
                        <div className='flex justify-between items-center pb-3 bottom-2 border-gray-300'>
                            <h1 className='text-sm font-medium'>Subtotal</h1>
                        <div>
                        <p className='flex items-center text-sm'><FaNairaSign/>{total.toLocaleString()}.00</p>
                    </div>
                    </div>
                    <div className='flex justify-between items-center pb-3 bottom-2 border-gray-300'>
                        <h1 className='text-sm font-medium'>Total</h1>
                        <p className='flex items-center text-sm'><FaNairaSign/>{total.toLocaleString()}.00</p>
                    </div>
                    <p className='text-[12px] text-yellow-600 text-end py-2'>Excluding delivery charges</p>
                    {
                        alertMessage && (
                            <div className="py-2 px-2 text-sm w-full rounded-md border border-red-300 bg-red-100">
                                <p className="">{alertMessage}</p>
                            </div>
                        )
                    }

                    <div onClick={handleReidirect}>
                        <Link to={`${currentUser && !emptyCart ? `/create-order` : '/cart'}`}>
                            <button className='bg-blue-900 text-white w-full my-3 rounded-md py-2 font-medium'>Continue to Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
