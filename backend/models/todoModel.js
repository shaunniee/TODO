const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a todo"],
  },
  important: {
    type: Boolean,
    default:false,
    enum: [true, false],
  },
  completed: {
    type: Boolean,
    default:false,
    enum: [true, false],
  },
  category:{
    type:String,
    default:'General'
  },
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  user:{
    type:ObjectID,
    ref:'User'
  }
},{timestamps:true});

module.exports = mongoose.model("Todo", todoSchema);
