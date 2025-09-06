import Booking from "../models/booking.model.js"
import Car from "../models/car.model.js";



// Function to check availability of a car for a given date

const checkAvaialbility = async(car , pickupDate , returnDate)=>{
    const bookings = await Booking.find({
        car , 
        pickupDate:{$lte : returnDate},
        returnDate:{$gte : pickupDate},
    })
    return bookings.length === 0;  // if there are bookings the booking length will be greater than 0 , if no bookings then length will be 0 , so return true(if available) or false(not available)
}

// Api to check availability of a car for given date and location
export const  checkCarAvailability = async (req ,res)=>{
     try {
        const {location , pickupDate , returnDate} = req.body
        // fetch all avaialable cars for the given location
        const cars = await Car.find({location , isAvailable:true})
        // check car availability for the given date range using promise
        const availableCarsPromises = cars.map(async(car)=>{
            const isAvailable = await checkAvaialbility(car._id , pickupDate ,returnDate )

            return {...car._doc , isAvailable: isAvailable}  // return all car data with isAvailable field
        })
        let availableCars = await Promise.all(availableCarsPromises) // wait for all promises to resolve
        // filter only available cars
        availableCars = availableCars.filter((car)=> car.isAvailable === true)

  res.json({success :true , availableCars})
        
     } catch (error) {
        console.log(error.message);
        res.json({success:false , message : error.message})
        
     }
}

// API  to create bookings

export const createBooking =  async(req, res)=>{
    try {
        const {_id} = req.user;
        const {car , pickupDate ,returnDate} = req.body;

        const isAvailable = await checkAvaialbility(car ,pickupDate , returnDate)

        if(!isAvailable){
            return res.json({success:false , message : "Car is not available for the selected dates"})
        }

        const carData = await Car.findById(car)
        // calculate price based on pickup and return date 

        const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);
        const noOfDays = Math.ceil((returned - picked)/oneDay);

        const price = carData.pricePerDay * noOfDays;

        // create booking
        await Booking.create({car , owner: carData.owner,user:_id , pickupDate , returnDate , price })

        res.json({success:true , message : "Booking created  successfully "})
         
    } catch (error) {
         console.log(error.message);
        res.json({success:false , message : error.message})
        
   
    }
} 
// API to get all bookings of a user
// api to list user bookings

export const  getUserBookings =async(req, res)=>{
try { 
    const {_id} = req.user;
    // all bookings for a particular user
    const bookings = await Booking.find({user:_id}).populate("car").sort({createdAt :-1})

    res.json({success:true , bookings});
    
} catch (error) {
     console.log(error.message);
        res.json({success:false , message : error.message})
}
}
// API to get owner bookings
export const  getOwnerBookings =async(req, res)=>{
try { 
    if(req.user.role !== 'owner'){
        return res.json({success:false , message :"Unauthorized" })
    }
    const bookings = await Booking.find({owner:req.user._id}).populate('car user').select("-user.password").sort({createdAt: -1})

    res.json({success:true , bookings})
    
} catch (error) {
     console.log(error.message);
        res.json({success:false , message : error.message})
}
}
// Api to change booking status (cancel , complete)
export const  changeBookingStatus =async(req, res)=>{
try { 
    const {_id} = req.user;
    const {bookingId , status} = req.body;
    // only owner can change status
    // if(req.user.role !== 'owner'){
    //     return res.json({success:false , message :"Unauthorized" })
    // }
    const booking  = await Booking.findById(bookingId)

    if(booking.owner.toString()!==_id.toString()){
        return res.json({success:false , message :"unauthorized" })
    }

    booking.status = status;
    await booking.save();

   res.json({success:true ,message : "Booking status updated successfully"})
    
} catch (error) {
     console.log(error.message);
        res.json({success:false , message : error.message})
}
}
