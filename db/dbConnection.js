import mongoose from "mongoose";

const connectDb=async (DATABASE_URL)=>{
    try {
        const option={
            dbName:process.env.dbName
        }
        await mongoose.connect(DATABASE_URL,option)
        console.log("Connected Successfully :")
    } catch (error) {
        console.log(error)
    }

}

export default connectDb