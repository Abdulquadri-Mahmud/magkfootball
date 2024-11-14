import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { TbPasswordUser } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {

    const [formData, setFormData] = useState({});
    
    const handlChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    console.log(formData);
    
    const handleSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <div className='md:py-20 py-12'>
        <div className="relative bg-white md:w-[350px] w-[97%] mx-auto p-3 rounded-md shadow-lg">
            <div className="">
                <h2 className="text-3xl font-medium text-center">Forgot Password</h2>
                <p className="text-center text-gray-400 text-sm pt-2">Type in the specified info to reset your password</p>
            </div>
            <form onClick={handleSubmit} className='mt-5'>
                <div className="shadow-md rounded-md relative">
                    <MdOutlineMarkEmailUnread className='absolute left-2 top-4'/>
                    <input onChange={handlChange} id='email' type="text" placeholder='Example@gmail.com' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none'/>
                </div>
                <div className="w-full mt-6">
                    <button className='bg-blue-900 w-full py-2 rounded-md text-white font-medium text-xl'>Log In</button>
                </div>
            </form>
            <div className="pt-6 text-sm flex gap-2 items-center font-medium">
                <p className="">Remebered account?</p>
                <Link to={'/signin'} className='text-blue-500 underline'>Sign In</Link>
            </div>
        </div>
    </div>
  )
}
