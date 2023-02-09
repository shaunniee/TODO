const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const userSchema=new Schema({
    firstname:{
        type:String,
        required:[true,"Please enter your first name"]
    },
    lastname:{
        type:String,
        required:[true,"Please enter your last name"]
    },
    email:{
        type:String,
        required:[true,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter a password"]
    }

},{timestamps:true})

module.exports=mongoose.model("User",userSchema)