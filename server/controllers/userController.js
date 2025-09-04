import User from "../models/User.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

    // generate JWT Tokens
    const generateToken = (userId)=>{
        const payload = userId;
        return jwt.sign(payload , process.env.JWT_SECRET)
    }

// register user controller
export const registerUser = async(req , res) =>{
    try {
        const {name , email , password} = req.body;

        if(!name ||!email || !password || password.length < 8){
            return res.json({sucess : false , message :'Ivalid Credentials'})
        }
        // check user exists or not already
        const userEsixts = await User.findOne({email})
        if(userEsixts){
            return res.json({sucess : false , message :'User already exists'})
        }

        // create user 
        const hashedPassword = await bcrypt.hash(password ,10)

        const user =await User.create({name , email , password:hashedPassword})

        const token = generateToken(user._id.toString());
        res.json({success : true , token})

    


    } catch (error) {
        console.log(error.message);;
        res.json({success : false , message : error.message})   
        
    }
}

// login user controller

export const loginUser  = async(req, res)=>{
    try {
        const {email , password} =  req.body
        // find the user in db
        const user = await User.findOne({email})
        if(!user){
            return res.json({success : false , message : 'User not found'})
        }

        const isMatch = await bcrypt.compare(password , user.password)

        if(!isMatch){
            return res.json({success : false , message : 'Invalid credentials'})
        }

        const token  = generateToken(user._id.toString())
        res.json({success : true , token})
        
    } catch (error) {
        console.log(error.message);
        res.json({success : false , message : error.message})
        
    }
}