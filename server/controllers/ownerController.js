import imagekit from "../configs/imagekit.js";
import Booking from "../models/booking.model.js";
import Car from "../models/car.model.js";
import User from "../models/User.model.js";
import fs from "fs";

// Api  change role to owner 
export const changeRoleToOwner = async(req , res)=>{
    try {
        const{_id} = req.user;
        await User.findByIdAndUpdate(_id ,{role : "owner"})

        res.json({success : true , message:"Now you can add your vehicles"})
    } catch (error) {
        console.log(error.message);
        res.json({success :false ,message : error.message})
        
    }

}
// API to list Car

export const addCar = async(req ,res)=>{
    try {
        
         const {_id} = req.user;
         let car = JSON.parse(req.body.carData);
         const imageFile = req.file;
         
         //upload image to image kit
         const fileBUffer = fs.readFileSync(imageFile.path)
      const response =    await imagekit.upload({
            file : fileBUffer ,
            fileName : imageFile.originalname,
            folder : '/cars'

         })

         // For URL Generation, works for both images and videos
         // opyimization through imagekit URL transformations
var optimizedImageUrl = imagekit.url({
    path : response.filePath,
    
    transformation : [ 
        {width: "1280"},// width resizing
        {quality :'auto'},// auto compression
        {format:'webp'}, // convert to modern format
    ]
});
     
       const image =  optimizedImageUrl ;
       // storing the car details in mongodb 
       await Car.create({...car ,owner:_id , image});

       res.json({success:true , message:"car added successfully"})
 
    } catch (error) {
         console.log(error.message);
        res.json({success :false ,message : error.message})
        
    }
}



// Api to list owner cars
// dispaly list of cars of  a particular owner
export const getOwnerCars = async(req , res)=>{
    try {

        const {_id} = req.user;
        const cars = await Car.find({owner : _id})
        res.json({success : true , cars})
        
    } catch (error) {
          console.log(error.message);
        res.json({success :false ,message : error.message})
        
    }
}

// api to toggle car availability  

export const toggleCarAvailability = async(req ,res)=>{
    try {

        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById({carId})

        // checking if car belong to the user
        if(car.owner.toString() !== _id.tostring()){
            return res.json({success : false , message : "owner is not authorized"});
        }

        //toggle
        car.isAvailable = !car.isAvailable;
        await car.save() // save data in DB

        res.json({success : true , message : "Availability Toggled"})
        
    } catch (error) {
          console.log(error.message);
        res.json({success :false ,message : error.message})
        
    }
} 


// api to delete a car -> owner can delete his car

export const deleteCar = async(req ,res)=>{
    try {

        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById({carId})

        // checking if car belong to the user
        if(car.owner.toString() !== _id.tostring()){
            return res.json({success : false , message : "owner is not authorized"});
        }

        //toggle
        car.owner = null;
        car.isAvailable = false;

        await car.save()

        res.json({success : true , message : "Car Removed"})
        
    } catch (error) {
          console.log(error.message);
        res.json({success :false ,message : error.message})
        
    }
} 
// Api to get dashboard data
export const getDashboardData = async(req, res)=>{
    try {
        const {_id , role} = req.user ;

        if(role!== "owner"){
           return res.json({success:false , message : "owner is not authorized"})
        }
        const cars = await Car.find({owner: _id})
        const bookings = await Booking.find({owner:_id}).populate('car ').sort({createdAt:-1});

        const pendingBookings =  await Booking.find({owner:_id , status:"pending"})

         const completedBookings =  await Booking.find({owner:_id , status:"confirmed"}) 

         // calculate monthly revenue from bookings status is confirmed
         const monthlyRevenue = bookings.slice().filter(booking => booking.status === 'confirmed').reduce((acc , booking)=> acc+booking.price , 0)

         // object where we add all the data of dashboard

         const dashboardData = {
            totalCars : cars.length,
            totalBookings : bookings.length,
            pendingBookings : pendingBookings.length,
            completedBookings : completedBookings.length,
            recentBookings : bookings.slice(0,4),
            monthlyRevenue
         }

         res.json({success:true ,  dashboardData})
        
    } catch (error) {
          console.log(error.message);
        res.json({success :false ,message : error.message})
    }
}

// Api to update user(owner) profile image in the owner dashboard 
 
export  const updateUserImage = async(req , res)=>{
    try { 

        const {_id} = req.user;

         const imageFile = req.file;
         
         //upload image to image kit
         const fileBUffer = fs.readFileSync(imageFile.path)
      const response =    await imagekit.upload({
            file : fileBUffer ,
            fileName : imageFile.originalname,
            folder : '/users'

         })

         // For URL Generation, works for both images and videos
         // opyimization through imagekit URL transformations
var optimizedImageUrl = imagekit.url({
    path : response.filePath,
    
    transformation : [ 
        {width: "400"},// width resizing
        {quality :'auto'},// auto compression
        {format:'webp'}, // convert to modern format
    ]
});
     
       const image =  optimizedImageUrl ;
       // update user profile image in DB
       await User.findByIdAndUpdate(_id , {image});
       res.json({success :true , message :"Profile Image Updated"})

     
    } catch (error) {
         console.log(error.message);
        res.json({success :false ,message : error.message})
    }
}
 