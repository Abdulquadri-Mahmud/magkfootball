import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='py-20'>
      <div className=" w-[350px] py-6 px-3 rounded-md shadow-md mx-auto">
        <h2 className={'text-7xl font-medium text-center'}>404</h2>
        <p className="font-medium text-center pt-5">Page Not Found</p>
        <p className="py-5 text-sm text-gray-500 text-center">The link you clicked may not be broken or the page may have been removed</p>
        <div className="mt-5 flex justify-center items-center text-white font-medium">
          <button className='px-6 py-2 rounded-md bg-blue-900'><Link to={'/'} className='flex items-center gap-2'><FaArrowLeft />Go Back</Link></button>
        </div>
      </div>
    </div>
  )
}
