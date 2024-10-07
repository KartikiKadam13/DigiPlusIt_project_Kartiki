const express=require("express")
// Importing all the routes
const homeroute=require("./routes/main.js")


// Creating express server
const app=express()

// Handling routes request
app.use("/",homeroute)

app.listen((3000),()=>{
    console.log("Server is Running")
})