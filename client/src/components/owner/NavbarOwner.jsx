import React from 'react'
import { assets, dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Logo from '../../assets/logo4-removebg-preview.png'


const NavbarOwner = () => { 

    // const user = dummyUserData;

    const {user} = useAppContext()
  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-6 text-gray-500 border-b border-borderColor relative transition-all'> 

    <Link to="/">
    <img src={Logo} 
    alt="GoWheels Logo" 
     className="w-[120px] h-auto md:w-[150px] lg:w-[170px] object-contain"/>
    </Link>
    <p>Welcome ,{user?.name || "Admin"}</p>
      
    </div>
  )
}

export default NavbarOwner
