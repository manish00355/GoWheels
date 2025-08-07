import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[rgb(25,66,201)] to [#A9CFFf] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>


        <div className='text-white'>
            <h2 className='text-3xl font-medium'>Do you Own a Car ? </h2>
            <p className='mt-2'>Monetize your car effortlessly by listing it on GoWheels.</p>
            <p className='max-w-130'>We can take care of insurance, driver verification and secure payments - So you can earn passive income .</p>

            <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor'>List Your Car</button>
        </div>

        <img src={assets.banner_car_image} alt="car"  className='max-h-45 mt-10'/>
      
    </div>
  )
}

export default Banner
