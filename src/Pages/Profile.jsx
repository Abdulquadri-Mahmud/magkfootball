import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { signOutUserFailure, signOutUserStart, signOutUserSuccess, updateFailure, updateStart, updateSuccess } from '../store/user/userReducer';
import { FaPhone, FaRegAddressBook, FaRegUser } from 'react-icons/fa6';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';

export default function Profile() {
  const { id } = useParams();
  
  const [formData, setFormData] = useState({});

  const {loading, error, currentUser} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  
  const handlChange = (e) => {
      setFormData({
          ...formData,
          [e.target.id]: e.target.value
      });
  }

  const handleSubmit = async (e) => {
      e.preventDefault();

      try{
          dispatch(updateStart());

          const updateuser_api = `https://fake-api-one-rust.vercel.app/api/user/auth/update_user/${id}`;
  
          const res = await fetch(updateuser_api, {
              method : 'PATCH',
              headers : {'Content-Type' : 'application/json'},
              body : JSON.stringify(formData),
          });
  
          const data = await res.json();
  
          if (data.success === false) {
              dispatch(updateFailure(data.message));
              console.log(data.message);
              
              return;
          }
          
          dispatch(updateSuccess(data));

      } catch (error) {
          dispatch(updateFailure(error));
      }
  }

//   const handleLogout = async () => {
//     try {
//         dispatch(signOutUserSuccess());
//         navigate('/signin');
  
//       } catch (error) {
//         dispatch(signOutUserFailure(error.message));
//       }
//     };
  
  return (
    <div className='py-10 bg-zinc-100'>
      <div className=" bg-white xl:w-[45%] md:w-[350px] w-[97%] mx-auto p-3 rounded-md shadow-lg">
        <div className="">
          <h2 className="text-3xl font-medium text-center">My Profile</h2>
          <p className="text-center text-gray-400 text-sm pt-2">Our pride is to give you the best</p>
        </div>
        <form onSubmit={handleSubmit} className='mt-5'>
            <div className="flex items-center justify-around md:gap-2 gap-0 flex-wrap w-full">
                <div className="shadow-md rounded-md relative md:w-[48.5%] w-full">
                    <FaRegUser className='absolute left-2 top-4'/>
                    <input defaultValue={currentUser.firstname} onChange={handlChange} id='firstname' type="text" placeholder='Firstname' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
                <div className=" my-3 shadow-md rounded-md relative md:w-[48.5%] w-full">
                    <FaRegUser className='absolute left-2 top-4'/>
                    <input defaultValue={currentUser.lastname} onChange={handlChange} id='lastname' type="text" placeholder='Lastname' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
            </div>
            <div className="shadow-md rounded-md relative">
                <FaRegUser className='absolute left-2 top-4'/>
                <input defaultValue={currentUser.username} onChange={handlChange} id='username' type="text" placeholder='Username' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="my-3 shadow-md rounded-md relative">
                <FaPhone className='absolute left-2 top-4'/>
                <input defaultValue={currentUser.phone} onChange={handlChange} id='phone' type="number" placeholder='Mobile' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="shadow-md rounded-md relative">
                <MdOutlineMarkEmailUnread className='absolute left-2 top-4'/>
                <input defaultValue={currentUser.email} onChange={handlChange} id='email' type="email" placeholder='Example@gmail.com' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="mt-3 shadow-md rounded-md relative">
                <TbPasswordUser className='absolute left-2 top-4'/>
                <input onChange={handlChange} id='password' type="password" placeholder='Password goes here' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="mt-3 shadow-md rounded-md relative">
                <FaRegAddressBook className='absolute left-2 top-4'/>
                <input defaultValue={currentUser.address} onChange={handlChange} id='address' type="text" placeholder='Address...' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            {
                error && (
                    <div className=" mt-3 w-full rounded-md">
                        <p className="text-red-500 text-sm font-medium">{error}</p>
                    </div>
                )
            }
            <div className="w-full mt-6">
                <button className='bg-blue-900 uppercase w-full py-2 rounded-md text-white font-medium text-xl'>
                    {
                        loading ? 'Loading...' : 'Save changes'
                    }
                </button>
            </div>
        </form>
        {/* <div className="mt-4">
            <button onClick={handleLogout} className="bg-red-600 rounded-md text-white font-medium px-6 py-2">Log Out</button>
        </div> */}
      </div>
    </div>
  )
}
