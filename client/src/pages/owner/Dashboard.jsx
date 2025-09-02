import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import OwnerTitle from '../../components/owner/OwnerTitle'


const Dashboard = () => { 
   
   const currency = import.meta.env.VITE_CURRENCY 
  const [data,setData] = useState({
    totalCars : 0,
    totalBookings:0,
    pendingBookings : 0,
    completedBookings : 0,
    recentBookings : [],
    monthlyRevenue : 0,

  })  
     const dashboardCards = [
      {title : "Total cars" , value : data.totalCars ,icon : assets.carIconColored},
      {title : "Total Bookings" , value : data.totalBookings ,icon : assets.listIconColored},
      {title : "Pending" , value : data.pendingBookings ,icon : assets.cautionIconColored},
      {title : "Confirmed" , value : data.completedBookings ,icon : assets.listIconColored}
     ]

   useEffect(()=>{
    setData(dummyDashboardData)
   },[])
   
  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <OwnerTitle title="Admin Dashboard" subTitle="Monitor availability, handle bookings, and streamline operations to keep every ride on the road and every customer happy."/>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl'>
        {dashboardCards.map((cards ,index)=>(
          <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md  border border-borderColor'>
             {/* title and value  */}
            <div>
               <h1 className='text-xs text-gray-500'>{cards.title}</h1>
               <p className='text-lg font-semibold'>{cards.value}</p>
            </div>
              {/* icon */}
            <div className='flex items-center justify-center w-10 h-10 rounded-md bg-primary/10'>
              <img src={cards.icon} alt="" className='h-4 w-4'/>
            </div>

          </div>

        ))}

      </div>
     
     <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
     {/* recent booking */}
     <div className='p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full'>
      <h1 className='text-lg font-medium'>Recent Bookings</h1>
      <p className='text-gray-500'>Latest Customer Bookings</p>
      {data.recentBookings.map((booking , index)=>(
        <div key={index} className='mt-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-md bg-primary/10' >
              <img src={assets.listIconColored} alt="" className='h-5 w-5'/>
            </div>
            {/* car details and booking details */}
            <div>
              <p>{booking.car.brand} {booking.car.model}</p>
              <p className='text-sm text-gray-500'>{booking.createdAt.split('T')[0]}</p>

            </div>

          </div>
              
              <div className='flex items-center gap-2 font-medium'>
                <p className='text-sm text-gray-500'>{currency}{booking.price}</p>
                <p className='px-3 py-0.5 border border-borderColor rounded-full'>{booking.status}</p>

              </div>
              
           </div>
      ))}
     </div>
       
       {/* monthly revenue */}
     <div className='p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs'>
      <h1 className='text-lg font-meduim'>Monthly Revenue</h1>
      <p className='text-gray-500'>Revenue for current month</p>
      <p className='text-3xl mt-6 font-semibold text-primary'>{currency} {data.monthlyRevenue}</p>
     </div>

     </div>
    

    </div>
  )
}

export default Dashboard
