import express from "express"
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js"

const authRouter = express.Router()

authRouter.post("/signup", signUp)
authRouter.post("/signin", signIn)
authRouter.get("/signout", signOut)
// Comment these out until you create the functions:
// authRouter.post("/send-otp", sendOtp)
// authRouter.post("/verify-otp", verifyOtp)
// authRouter.post("/reset-password", resetPassword)
// authRouter.post("/google-auth", googleAuth)

export default authRouter