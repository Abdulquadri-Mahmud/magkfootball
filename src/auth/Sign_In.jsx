import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signinFailure, signinStart, signinSuccess } from '../store/user/userReducer';

export default function SignIn() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [formError, setFormError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handlePasswordToggle = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email) {
            setFormError('Email is Required!');
            return;
        }
        if (!formData.password) {
            setFormError('Password is Required!');
            return;
        }

        setFormError(''); // Clear any existing errors

        try {
            dispatch(signinStart());

            const signinApi = `https://fake-api-one-rust.vercel.app/api/user/auth/signin`;

            const res = await fetch(signinApi, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success === false) {
                setFormError(data.message);
                dispatch(signinFailure(data.message));
                return;
            }

            dispatch(signinSuccess(data));
            navigate('/');
        } catch (err) {
            setFormError('An unexpected error occurred.');
            dispatch(signinFailure(err.message));
        }
    };

    return (
        <div className="md:py-20 py-12">
            <div className="relative bg-white md:w-[350px] w-[97%] mx-auto p-3 rounded-md shadow-lg">
                <div>
                    <h2 className="text-3xl font-medium text-center">Welcome Back</h2>
                    <p className="text-center text-gray-400 text-sm pt-2">
                        We provide accurate, real-time sports news
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-5">
                    <div className="shadow-md rounded-md relative">
                        <MdOutlineMarkEmailUnread className="absolute left-2 top-4" />
                        <input
                            required
                            value={formData.email}
                            onChange={handleChange}
                            id="email"
                            type="email"
                            placeholder="Example@gmail.com"
                            className="px-2 h-[45px] w-full rounded-md pl-8 text-sm font-medium border-none outline-none"
                        />
                    </div>
                    <div className="mt-5 shadow-md rounded-md relative">
                        <TbPasswordUser className="absolute left-2 top-4" />
                        <input
                            required
                            value={formData.password}
                            onChange={handleChange}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password goes here"
                            className="px-2 h-[45px] w-full rounded-md pl-8 text-sm font-medium border-none outline-none"
                        />
                        <FaLock
                            onClick={handlePasswordToggle}
                            className="absolute right-2 top-4 cursor-pointer"
                        />
                    </div>
                    {/* {formError && (
                        <div className="mt-3 w-full rounded-md">
                            <p className="text-red-500 text-sm font-medium">{formError}</p>
                        </div>
                    )} */}
                    {error && (
                        <div className="mt-3 w-full rounded-md">
                            <p className="text-red-500 text-sm font-medium">{error}</p>
                        </div>
                    )}
                    <div className="mt-5 text-end text-blue-500 font-medium text-sm underline animate-bounce">
                        <Link to={'/forgot_password'}>Forgot Password</Link>
                    </div>
                    <div className="w-full mt-6">
                        <button
                            type="submit"
                            className="bg-blue-900 w-full py-2 rounded-md text-white font-medium text-xl"
                        >
                            {loading ? 'Loading...' : 'Log In'}
                        </button>
                    </div>
                </form>
                <div className="pt-6 text-sm flex gap-2 items-center font-medium">
                    <p>You do not have an account?</p>
                    <Link to={'/signup'} className="text-blue-500 underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
