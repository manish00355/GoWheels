import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import CarCard from './components/CarCard'


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
      <Route path="/cars-details/:id" element={<CarDetails/>}/>
      <Route path="/cars" element={<Cars/>}/>
       <Route path="/my-booking " element={<MyBookings/>}/>
    </Routes>


   

    </>
  )
}

export default App
