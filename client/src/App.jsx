import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import CarCard from './components/CarCard'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'



const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>
    {/* navbar will not appear on owner dashboard else it will appear on every page */}
    { !isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
    

    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* differnt cars have differebt data so we need id */}
      <Route path="/car-details/:id" element={<CarDetails/>}/>
      <Route path="/cars" element={<Cars/>}/>
       <Route path="/my-bookings" element={<MyBookings/>}/>
        

     <Route path='/owner' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='add-car' element={<AddCar/>}/>
        <Route path='manage-cars' element={<ManageCars/>}/>
        <Route path='manage-bookings' element={<ManageBookings/>}/>
        

     </Route>

    </Routes>
    {/*hide footer for admin dashboard  */}


  {/* footer is added to every page  */}
  {!isOwnerPath && <Footer/>}
   

    </>
  )
}

export default App
