import express from "express";
import { getUserDetials, loginUser, registerUser } from "../controllers/userController.js";
import {protect} from "../middleware/auth.js"

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/data' , protect , getUserDetials) // have to provide token to access this route    

export default userRouter