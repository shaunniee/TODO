const mongoose =require('mongoose')

const connectDB=async(req,res)=>{

    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB connected:${conn.connection.host}`.red)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }

}

module.exports=connectDB