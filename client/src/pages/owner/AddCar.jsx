import React, { useState } from 'react'
import OwnerTitle from '../../components/owner/OwnerTitle'
import { assets } from '../../assets/assets'

const AddCar = () => {
const [image, setImage] = useState(null)
const [car,setCar] = useState({
  brand:'',
  model:'',
  year:0,
  pricePerDay:0,
  category:'',
  transmission:'',
  fuel_type:'',
  seating_capacity:0,
  location:'',
  description:'',

})  
   
 const onSubmitHandler = async(e)=>{
  e.preventDefault()

 }

  return (
    <div className='px-4 py-10 md:px flex-1'>
      <OwnerTitle title="Add New Car" subTitle="Fill in details to list a new car for booking , including pricing, availability, and car specification."/>

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        {/* car Image */} 
         <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-20 rounded cursor-pointer'/>
            <input type="file" id="car-image" accept="image/*" hidden onChange={e=>setImage(e.target.files[0])}/>
          </label>
          <p className='text-sm text-gray-500'>Upload a picture of your car</p>
         </div>

         {/* car brand and model */}

         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text"placeholder='eg. Porche , Maruti , Tata , Audi....' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e=> setCar({...car,brand:e.target.value})}/>
          </div>
           <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text"placeholder='eg. Punch , XUV 500 , Scorpio...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e=> setCar({...car,model:e.target.value})}/>
          </div>
         </div>

         {/* car , year , price And Category */}
         <div className='grid grid-cols-1 sm:grid-cols md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="number"placeholder='2025' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={e=> setCar({...car,year:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Price Per Day (INR)</label>
            <input type="number"placeholder='7000' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={e=> setCar({...car,pricePerDay:e.target.value})}/>
          </div>
          {/* dropdown for categoty */}
          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select onChange={e=> setCar({...car,category:e.target.value})} value={car.category} className='px-3 py-3 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>

            </select>
          </div>
         </div>

         {/* car transmission , fuel type , seating capacity */}
           <div className='grid grid-cols-1 sm:grid-cols md:grid-cols-3 gap-6'>
            <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select onChange={e=> setCar({...car,transmission:e.target.value})} value={car.transmission} className='px-3 py-3 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>

            </select>
          </div>
          {/* fuel detials */}
             <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select onChange={e=> setCar({...car,fuel_type:e.target.value})} value={car.fuel_type} className='px-3 py-3 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a Fuel Type</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>

            </select>
          </div>

          {/* seating capacity */}
          <div className='flex flex-col w-full'>
            <label>Seating  Capacity</label>
            <input type="number"placeholder='2' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e=> setCar({...car,seating_capacity:e.target.value})}/>
          </div>

           </div>
           {/* car location */}
           <div className='flex flex-col w-full'>
              <label>Location</label>
            <select onChange={e=> setCar({...car,location:e.target.value})} value={car.location} className='px-3 py-3 mt-1 border border-borderColor rounded-md outline-none'>
              <option value="">Select a Location</option>
              <option value="Jammu">Jammu</option>
              <option value="kanpur">Kanpur</option>
              <option value="Delhi">Delhi</option>
              <option value="Banglore">Banglore</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Kolkata">Kolkata</option>

            </select>

           </div>
           {/* description */}
            <div className='flex flex-col w-full'>
            <label>Description </label>
            <textarea rows={6} placeholder='e.g. a luxurious sedan with spacious interior and a poerful engine ' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={e=> setCar({...car,description:e.target.value})}></textarea>
          </div>

          <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt="" />
            List You car on GoWheels
          </button>

      </form>
      
    </div>
  )
}

export default AddCar
