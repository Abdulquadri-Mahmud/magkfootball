import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateFailure, updateStart } from '../store/user/userReducer';
import { FaPhone, FaRegAddressBook, FaRegUser } from 'react-icons/fa6';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { TbPasswordUser } from 'react-icons/tb';

export default function Profile() {
  const id = useParams();
  const [formData, setFormData] = useState({});
  const [defaultData, setDefaultData] = useState({});
  const [errors, setError] = useState(null);

  const {loading, error} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handlChange = (e) => {
      setFormData({
          ...formData,
          [e.target.id]: e.target.value
      });
  }

  console.log(defaultData);
  console.log(id);
  
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const res = await fetch(`https://fake-api-one-rust.vercel.app/api/user/auth/single_products/${id}`);

        const data = await res.json();

        setDefaultData(data);
        
      }; fetchUser();

    } catch (error) {
      setError(error);
    }
  }, []);
  
  const handleSubmit = async (e) => {
      e.preventDefault();

      try{
          dispatch(updateStart());

          const updateuser_api = `https://fake-api-one-rust.vercel.app/api/user/auth/update_user/${id}`;
  
          const res = await fetch(updateuser_api, {
              method : 'POST',
              headers : {'Content-Type' : 'application/json'},
              body : JSON.stringify(formData),
          });
  
          const data = await res.json();
  
          if (data.success === false) {
              dispatch(updateFailure(data.message));
              return;
          }
          
          navigate('/signin');

      } catch (error) {
          dispatch(updateFailure(error))
      }
  }

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
                    <input defaultValue={formData.firstname} onChange={handlChange} id='firstname' type="text" placeholder='Firstname' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
                <div className=" my-3 shadow-md rounded-md relative md:w-[48.5%] w-full">
                    <FaRegUser className='absolute left-2 top-4'/>
                    <input defaultValue={formData.lastname} onChange={handlChange} id='lastname' type="text" placeholder='Lastname' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
                </div>
            </div>
            <div className="shadow-md rounded-md relative">
                <FaRegUser className='absolute left-2 top-4'/>
                <input defaultValue={formData.username} onChange={handlChange} id='username' type="text" placeholder='Username' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="my-3 shadow-md rounded-md relative">
                <FaPhone className='absolute left-2 top-4'/>
                <input defaultValue={formData.phone} onChange={handlChange} id='phone' type="number" placeholder='Mobile' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="shadow-md rounded-md relative">
                <MdOutlineMarkEmailUnread className='absolute left-2 top-4'/>
                <input defaultValue={formData.email} onChange={handlChange} id='email' type="email" placeholder='Example@gmail.com' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="mt-3 shadow-md rounded-md relative">
                <TbPasswordUser className='absolute left-2 top-4'/>
                <input defaultValue={formData.password} onChange={handlChange} id='password' type="password" placeholder='Password goes here' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
            </div>
            <div className="mt-3 shadow-md rounded-md relative">
                <FaRegAddressBook className='absolute left-2 top-4'/>
                <input defaultValue={formData.address} onChange={handlChange} id='address' type="password" placeholder='Address...' className='px-2 py-3 w-full rounded-md pl-8 border-none outline-none text-sm font-medium bord'/>
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
      </div>
    </div>
  )
}
