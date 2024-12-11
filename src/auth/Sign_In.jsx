import React, { useRef, useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { TbPasswordUser } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signinFailure, signinStart, signinSuccess } from '../store/user/userReducer'

export default function Sign_In() {
    const [formData, setFormData] = useState({});

    const {loading, error} = useSelector((state) => state.user);
    const getLockPassIcon = useRef(null);
    const password = useRef(null);
    const email = useRef(null);

    let navigate = useNavigate();
    let dispatch = useDispatch();
    
    const handlChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            dispatch(signinStart());

            if (email.current.value === '' || email.current.value === null) {
                dispatch(signinFailure('Email is Required!'));
                return;
            }
            if (password.current.value === '' || password.current.value === null) {
                dispatch(signinFailure('Password is Required!'));
                return;
            }

            const signin_api = 'https://fake-api-one-rust.vercel.app/api/user/auth/signin';
    
            const res = await fetch(signin_api, {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData),
            });
    
            const data = await res.json();
    
            if (data.success === false) {
                dispatch(signinFailure(data.message));
                return;
            }

            dispatch(signinSuccess(data));
            navigate('/');
            
        } catch (error) {
            dispatch(signinFailure(error));
        }
    }

    const handlePassword = () => {
        let currentPassword = password.current.type;
        let passIcon = getLockPassIcon.current;

        if (currentPassword === 'password') {
            password.current.type = 'text';
            if (password.current.type === 'text') {
                passIcon.innerHTML = `
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                    </svg>`
            }
        }
        if (currentPassword === 'text') {
            password.current.type = 'password';
            if (password.current.type === 'password') {
                passIcon.innerHTML = `
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                    </svg>`
            }
        }
    }

  return (
    <div className='md:py-20 py-12'>
        <div className="relative bg-white md:w-[350px] w-[97%] mx-auto p-3 rounded-md shadow-lg">
            <div className="">
                <h2 className="text-3xl font-medium text-center">Welcome Back</h2>
                <p className="text-center text-gray-400 text-sm pt-2">We provide accurate, real-time sports news</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-5'>
                <div className="shadow-md rounded-md relative">
                    <MdOutlineMarkEmailUnread className='absolute left-2 top-4'/>
                    <input required onChange={handlChange} ref={email} id='email' type="text" placeholder='Example@gmail.com' className='px-2 h-[45px] w-full rounded-md pl-8 text-sm font-medium border-none outline-none bord'/>
                </div>
                <div className="mt-5 shadow-md rounded-md relative">
                    <TbPasswordUser className='absolute left-2 top-4'/>
                    <input required onChange={handlChange} ref={password} id='password' type="password" placeholder='Password goes here' className='px-2 h-[45px] w-full rounded-md pl-8 text-sm font-medium border-none outline-none bord'/>
                    <FaLock onClick={handlePassword} ref={getLockPassIcon} className='absolute right-2 top-4'/>
                </div>
                {
                    error && (
                        <div className=" mt-3 w-full rounded-md">
                            <p className="text-red-500 text-sm font-medium">{error}</p>
                        </div>
                    )
                }
                <div className="mt-5 text-end text-blue-500 font-medium text-sm underline animate-bounce">
                    <Link to={'/forgot_password'}>Forgot Password</Link>
                </div>
                <div className="w-full mt-6">
                    <button type='submit' className='bg-blue-900 w-full py-2 rounded-md text-white font-medium text-xl'>
                        {
                            loading ? 'Loading...' : 'Log In'
                        }
                    </button>
                </div>
            </form>
            <div className="pt-6 text-sm flex gap-2 items-center font-medium">
                <p className="">You do not have an account?</p>
                <Link to={'/signup'} className='text-blue-500 underline'>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}
