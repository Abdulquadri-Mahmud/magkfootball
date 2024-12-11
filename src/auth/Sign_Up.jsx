import React, { useRef, useState } from 'react'
import { FaLock, FaPhone, FaRegAddressBook, FaRegUser } from 'react-icons/fa';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpFailure, signUpStart } from '../store/user/userReducer';

export default function Sign_Up() {
    const [formData, setFormData] = useState({});

    const {loading, error} = useSelector((state) => state.user);

    const phone = useRef(null);
    const username = useRef(null);
    const firstname = useRef(null);
    const lastname = useRef(null);
    const address = useRef(null);
    const password = useRef(null);
    const email = useRef(null);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handlChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            dispatch(signUpStart());

            if (username.current.value === '' || username.current.value === null) {
                dispatch(signUpFailure('Username is Required!'))
                return;
            }
            if (phone.current.value === '' || phone.current.value === null) {
                dispatch(signUpFailure('Phone number is Required!'))
                return;
            }
            if (email.current.value === '' || email.current.value === null) {
                dispatch(signUpFailure('Email is Required!'));
                return;
            }
            if (address.current.value === '' || address.current.value === null) {
                dispatch(signUpFailure('Address is Required!'));
                return;
            }
            if (password.current.value === '' || password.current.value === null) {
                dispatch(signUpFailure('Password is Required!'));
                return;
            }

            const signup_api = 'https://fake-api-one-rust.vercel.app/api/user/auth/signup';
    
            const res = await fetch(signup_api, {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData),
            });
    
            const data = await res.json();
    
            if (data.success === false) {
                dispatch(signUpFailure(data.message));
                return;
            }
            
            navigate('/signin');

        } catch (error) {
            dispatch(signUpFailure(error))
        }
    }

    const getLockPassIcon = useRef(null);

    const handlePassword = () => {
        let currentPassword = password.current.type;
        let passIcon = getLockPassIcon.current;

        if (currentPassword === 'password') {
            password.current.type = 'text';
            console.log(password.current.type);
            if (password.current.type === 'text') {
                passIcon.innerHTML = `
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                    </svg>`
            }
        }
        if (currentPassword === 'text') {
            password.current.type = 'password';
            console.log(password.current.type);
            if (password.current.type === 'password') {
                passIcon.innerHTML = `
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                    </svg>`
            }
        }
    }

  return (
    <div className='md:py-10 py-12'>
        <div className="relative bg-white xl:w-[45%] md:w-[350px] w-[97%] mx-auto p-3 rounded-md shadow-lg">
            <div className="">
                <h2 className="text-3xl font-medium text-center">Register Now</h2>
                <p className="text-center text-gray-400 text-sm pt-2">Our pride is to give you the best</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-5'>
                <div className="flex items-center justify-around md:gap-2 gap-0 flex-wrap w-full">
                    <div className="shadow-md rounded-md relative md:w-[48.5%] w-full">
                        <FaRegUser className='absolute left-2 top-4'/>
                        <input required onChange={handlChange} ref={firstname} id='firstname' type="text" placeholder='Firstname' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                    </div>
                    <div className=" my-3 shadow-md rounded-md relative md:w-[48.5%] w-full">
                        <FaRegUser className='absolute left-2 top-4'/>
                        <input required onChange={handlChange} ref={lastname} id='lastname' type="text" placeholder='Lastname' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                    </div>
                </div>
                <div className="shadow-md rounded-md relative">
                    <FaRegUser className='absolute left-2 top-4'/>
                    <input required onChange={handlChange} ref={username} id='username' type="text" placeholder='Username' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
                <div className="my-3 shadow-md rounded-md relative">
                    <FaPhone className='absolute left-2 top-4'/>
                    <input required onChange={handlChange} ref={phone} id='phone' type="number" placeholder='Mobile' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
                <div className="shadow-md rounded-md relative">
                    <MdOutlineMarkEmailUnread className='absolute left-2 top-4'/>
                    <input required onChange={handlChange} ref={email} id='email' type="email" placeholder='Example@gmail.com' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
                <div className="mt-3 shadow-md rounded-md relative">
                    <TbPasswordUser className='absolute left-2 top-4'/>
                    <input required onChange={handlChange} ref={password} id='password' type="password" placeholder='Password goes here' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                    <FaLock onClick={handlePassword} ref={getLockPassIcon} className='absolute right-2 top-4'/>
                </div>
                <div className="mt-3 shadow-md rounded-md relative">
                    <FaRegAddressBook className='absolute left-2 top-4'/>
                    <input required onChange={handlChange} ref={address} id='address' type="text" placeholder='Address...' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
                {
                    error && (
                        <div className=" mt-3 w-full rounded-md">
                            <p className="text-red-500 text-sm font-medium">{error}</p>
                        </div>
                    )
                }
                <div className="w-full mt-6">
                    <button className='bg-blue-900 w-full py-2 rounded-md text-white font-medium text-xl'>
                        {
                            loading ? 'Loading...' : 'Log In'
                        }
                    </button>
                </div>
            </form>
            <div className="pt-6 text-sm flex gap-2 items-center font-medium">
                <p className="">Already have an account?</p>
                <Link to={'/signIn'} className='text-blue-500 underline'>Sign In</Link>
            </div>
        </div>
    </div>
  )
}
