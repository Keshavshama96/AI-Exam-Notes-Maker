import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser } from "../controllers/user.controller.js";

// Create user router
const userRouter = express.Router();

// Route to get current logged-in user
userRouter.get("/currentuser", isAuth, getCurrentUser); 

export default userRouter;
