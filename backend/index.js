import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"

dotenv.config()
const app=express()
const port=process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.listen(port,()=>{
    connectDb()
    console.log(`server started at ${port}`)
})
