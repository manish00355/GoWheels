import React from 'react'
import {assets, menuLinks} from '../assets/assets'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import logo from '../assets/GoWheels.logo.png';
import { useState } from 'react'



const Navbar = ({setShowLogin}) => {

    const location = useLocation()
    // menu will be closed in small screens
    const [open, setOpen] = useState(false)
 const navigate = useNavigate

  return (
    <div
    className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" &&'bg-light' } `}>
        {/* click on the logo to go to home page */}
        <Link to='/'>
       <img src={logo} alt="logo" className="h-20 w-auto" />

        </Link>

        <div  className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 
        max-sm:border-t
        border-borderColor
        right-0
        flex flex-col
        sm:flex-row 
        items-start 
        sm:items-center gap-4
        sm:gap-8 max-sm:p-4
        transition-all duration-300 
        z-50 ${location.pathname === "/" ? 'bg-light' : "bg-white"} ${open ? "max-sm:translate-x-0" :"max-sm:translate-x-full"}`}
        
        >
            {menuLinks.map((link , index)=>(
            <Link key={index} to={link.path}>
            {link.name}
            </Link>
            ))}



            <div className=' hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
                <input type="text"  className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500' placeholder='Search Products'/>
                <img src={assets.search_icon}alt="Search" />
            </div>
      {/* dashboard & login button */}
        <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
            <button onClick={()=> navigate('/owner')} className='cursor-pointer'>Dashboard</button>
            {/* open the login form when created  */}
   <button  onClick={()=>setShowLogin(true)} className="
  cursor-pointer 
  px-8 py-2 
  bg-blue-600 
  hover:bg-blue-700 
  text-white 
  rounded-lg 
  shadow-md 
  transition-colors duration-300
">
  Login
</button>


        </div>

        </div>

        <button className=" sm:hidden cursor-pointer " aria-label="Menu" onClick={()=>setOpen(!open)}> 
            <img src={open ? assets.close_icon : assets.menu_icon } alt="menu" />
        </button>
    
    </div>
  )
}

export default Navbar
