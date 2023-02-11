const express = require("express");
const colors = require('colors');
const { json } = require("body-parser");
const dotenv = require("dotenv").config();
const connectDB=require("./config/db")
const {errorHandler}=require('./middlewares/errorHandler')
connectDB()
const PORT = process.env.PORT || 8000;
const app = express();

// Body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler)

app.use('/api/todo',require('./routes/todoRoutes'))
app.use('/api/user',require('./routes/userRoutes'))

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.rainbow);
});
