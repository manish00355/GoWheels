import React, { useEffect, useState } from 'react'
import { use } from 'react'

const Dashboard = () => {
  const [data,setData] = useState({
    totalCars : 0,
    totalBookings:0,
    pendingBookings : 0,
    completedBookings : 0,
    recentBookings : [],
    monthlyRevenue : 0,

  })  

   
  return (
    <div>
        <h1>Dashboard is working! hahahhaahah</h1>
    </div>
  )
}

export default Dashboard
