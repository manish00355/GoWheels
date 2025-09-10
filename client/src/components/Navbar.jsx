import React from 'react'
import {assets, menuLinks} from '../assets/assets'
import {Link, useLocation, useNavigate} from 'react-router-dom'

import { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import {motion} from 'motion/react'
import Logo from '../assets/logo4-removebg-preview.png'




const Navbar = () => { 

  const {setShowLogin , user , logout , isOwner , axios ,setIsOwner} = useAppContext();

    const location = useLocation()
    // menu will be closed in small screens
    const [open, setOpen] = useState(false)
 const navigate = useNavigate() 


 // change role to owner when user click on list cars button 
     const changeRole =async()=>{
      try {
         const {data} = await axios.post( '/api/owner/change-role')
         if(data.success){
          setIsOwner(true)
          toast.success(data.message)
         }
         else{
            toast.error(data.message)
         }
      } catch (error) {
         toast.error(error.message)
      }
     }

  return (
    <motion.div 
    initial={{y:-20 ,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.5}}
    className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" &&'bg-light' } `}>
        {/* click on the logo to go to home page */}
        <Link to='/'>
       <motion.img  whileHover={{scale:1.25}} src={Logo} alt="logo" className="h-20 w-auto" />

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


            <button onClick={()=> isOwner ?  navigate('/owner') : changeRole()} className='cursor-pointer'>{ isOwner ? 'Dashboard' : 'List Cars'}</button>



            {/* open the login form when created  */}
   <button  onClick={()=>{ user ? logout() : setShowLogin(true)}} className="
  cursor-pointer 
  px-8 py-2 
  bg-blue-600 
  hover:bg-blue-700 
  text-white 
  rounded-lg 
  shadow-md 
  transition-colors duration-300
">
 {user ? 'Logout' : "Login"}
</button>


        </div>

        </div>

        <button className=" sm:hidden cursor-pointer " aria-label="Menu" onClick={()=>setOpen(!open)}> 
            <img src={open ? assets.close_icon : assets.menu_icon } alt="menu" />
        </button>
    
    </motion.div>
  )
}

export default Navbar
