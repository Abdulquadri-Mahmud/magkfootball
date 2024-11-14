import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {

    };

  return (
    <div className='block md:hidden'>
        
        <div onClick={handleClick} className={`h-[100vh] fixed top-0 left overflow-hidden w-0`}>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>About Us</Link>
                <Link to={'/'}>Our Blog</Link>
            </nav>
        </div>
        
    </div>
  )
}
