import mongoose from "mongoose"

const connectDb=async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        
    }
}

export default connectDb