const express= require("express");
const app = express()
const connectDB= require("./config/db.js");
const dotenv=require("dotenv");
dotenv.config();
const userRoute = require("./routes/userRoute.js")

connectDB()

app.use("/user", userRoute)

app.use("/", (req, res)=>{
    res.send("hello");
})


app.listen(8000, ()=>{
    console.log("app is running on 8000")
})