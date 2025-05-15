import React, { useRef, useState } from 'react';
import { FaLock, FaPhone, FaRegAddressBook, FaRegUser } from 'react-icons/fa';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpFailure, signUpStart, signUpSuccess } from '../store/user/userReducer';

export default function Sign_Up() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error } = useSelector((state) => state.user);

  const phone = useRef(null);
  const username = useRef(null);
  const firstname = useRef(null);
  const lastname = useRef(null);
  const address = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signUpStart());

      if (!username.current.value) {
        dispatch(signUpFailure('Username is required!'));
        return;
      }
      if (!phone.current.value) {
        dispatch(signUpFailure('Phone number is required!'));
        return;
      }
      if (!email.current.value) {
        dispatch(signUpFailure('Email is required!'));
        return;
      }
      if (!address.current.value) {
        dispatch(signUpFailure('Address is required!'));
        return;
      }
      if (!password.current.value) {
        dispatch(signUpFailure('Password is required!'));
        return;
      }

      const signup_api = 'https://fake-api-one-rust.vercel.app/api/user/auth/signup';

      const res = await fetch(signup_api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signUpFailure(data.message));
        return;
      }

      navigate('/signin');
      dispatch(signUpSuccess());
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='bg-slate-200'>
      <div className="md:py-10 py-12">
        <div className="relative bg-white xl:w-[45%] md:w-[350px] w-[97%] mx-auto p-3 rounded-md shadow-lg">
          <div className="">
            <h2 className="text-3xl font-medium text-center">Register Now</h2>
            <p className="text-center text-gray-400 text-sm pt-2">Our pride is to give you the best</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex items-center justify-around md:gap-2 gap-0 flex-wrap w-full">
              <div className="shadow-md rounded-md relative md:w-[48.5%] w-full">
                <FaRegUser className="absolute left-2 top-4" />
                <input
                  required
                  onChange={handleChange}
                  ref={firstname}
                  id="firstname"
                  type="text"
                  placeholder="First Name"
                  className="px-2 py-3 w-full rounded-md pl-8 border outline-none text-sm font-medium"
                  aria-label="First Name"
                />
              </div>
              <div className="my-3 shadow-md rounded-md relative md:w-[48.5%] w-full">
                <FaRegUser className="absolute left-2 top-4" />
                <input
                  required
                  onChange={handleChange}
                  ref={lastname}
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  className="px-2 py-3 w-full rounded-md pl-8 border outline-none text-sm font-medium"
                  aria-label="Last Name"
                />
              </div>
            </div>
            <div className="shadow-md rounded-md relative">
              <FaRegUser className="absolute left-2 top-4" />
              <input
                required
                onChange={handleChange}
                ref={username}
                id="username"
                type="text"
                placeholder="Username"
                className="px-2 py-3 w-full rounded-md pl-8 border outline-none text-sm font-medium"
                aria-label="Username"
              />
            </div>
            <div className="my-3 shadow-md rounded-md relative">
              <FaPhone className="absolute left-2 top-4" />
              <input
                required
                onChange={handleChange}
                ref={phone}
                id="phone"
                type="number"
                placeholder="Mobile Number"
                className="px-2 py-3 w-full rounded-md pl-8 border outline-none text-sm font-medium"
                aria-label="Mobile Number"
              />
            </div>
            <div className="shadow-md rounded-md relative">
              <MdOutlineMarkEmailUnread className="absolute left-2 top-4" />
              <input
                required
                onChange={handleChange}
                ref={email}
                id="email"
                type="email"
                placeholder="Email Address"
                className="px-2 py-3 w-full rounded-md pl-8 border outline-none text-sm font-medium"
                aria-label="Email Address"
              />
            </div>
            <div className="mt-3 shadow-md rounded-md relative">
              <TbPasswordUser className="absolute left-2 top-4" />
              <input
                required
                onChange={handleChange}
                ref={password}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="px-2 py-3 w-full rounded-md pl-8 border outline-none text-sm font-medium"
                aria-label="Password"
              />
              <FaLock
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-4 cursor-pointer"
              />
            </div>
            <div className="mt-3 shadow-md rounded-md relative">
              <FaRegAddressBook className="absolute left-2 top-4" />
              <input
                required
                onChange={handleChange}
                ref={address}
                id="address"
                type="text"
                placeholder="Address"
                className="px-2 py-3 w-full rounded-md pl-8 border outline-none text-sm font-medium"
                aria-label="Address"
              />
            </div>
            {error && (
              <div className="mt-3 w-full rounded-md">
                <p className="text-red-500 text-sm font-medium">{error}</p>
              </div>
            )}
            <div className="w-full mt-6">
              <button className="bg-blue-900 w-full py-2 rounded-md text-white font-medium text-xl">
                {loading ? 'Loading...' : 'Register Now'}
              </button>
            </div>
          </form>
          <div className="pt-6 text-sm flex gap-2 items-center font-medium">
            <p>Already have an account?</p>
            <Link to="/signIn" className="text-blue-500 underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
