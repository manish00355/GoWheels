import jwt from "jsonwebtoken";
import User from "../models/User.model.js";


export const protect = async(req , res ,next)=>{
    const token = req.headers.authorization;
    // token is not available   
    if(!token){
        return res.json({success : false , message: "user is not authorized "})
    }
  // Remove "Bearer " if present
  

    // token is available
    try {
        const userId = jwt.decode(token , process.env.JWT_SECRET)

        if(!userId){
               return res.json({success : false , message: "user manish is not authorized "})
        }
        // find user in DB using userId
      req.user =   await User.findById(userId).select
      ("-password")
       next();
    } catch (error) {
         return res.json({success : false , message: "user is not authorized "})
        
    }
}
// middlleware to protect routes , route can be accesed using authenticated user only