import express from 'express';
import "dotenv/config";
import cors from "cors";
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';

// initalize Express app 
 const app = express()

 // connect to database
 await connectDB()

 //set up middleware 

 app.use(cors());
 app.use(express.json());

 app.get('/',(req , res)=> res.send("Server is running"))
 app.use('/api/user',userRouter);

 const PORT  = process.env.PORT || 3000;

 app.listen(PORT ,()=> console.log(`sercver is running on port ${PORT}`)) 