import React from 'react'
import { assets, cityList } from '../assets/assets'
import { useState } from 'react'
import heroCar from "../assets/heroCar-removebg-preview.png";

const Hero = () => {
   
    const [pickupLocation, setPickupLocation] = useState("")

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

        <h1 className='text-4xl md:text-5xl font-semibold '>GoWheels - Your Ride, Your Way</h1>
        <h1 className='text-2xl md:text-2xl font-semibold  text-gray-500 -mt-10'>Affordable Car Rentals Near You</h1>
   

   {/* form for picjup details */}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>

                <div className='flex flex-col items-start gap-2 '>
                    {/* choose city */}
                    <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
                        <option value="">Pickup Location</option>
                        {cityList.map((city)=> <option  key={city} value={city}>{city}</option>)}
                    </select>

                    <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : "Please Select Location"}</p>
                </div>
                
                <div className='flex flex-col items-start gap-2 '>
                   <label htmlFor="pickup-date">Pick-up Date</label>
                   <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
                </div>
                {/* return date */}
                 <div className='flex flex-col items-start gap-2 '>
                   <label htmlFor="return-date">Return Date</label>
                   <input type="date" id="return-date" className='text-sm text-gray-500'required/>
                </div>

                <button className='flex items-center justify-center
                gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
                    <img src={assets.search_icon} alt="search" className='brightness-300' />
                    Search
                    </button>

            </div>

        </form>

        <img src={assets.main_car} alt="car" 
        className='max-h-75'/>
      
    </div>
  )
}

export default Hero
