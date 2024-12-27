// const mongoose = require("mongoose");
import  {mongoose}  from "mongoose";

let conn = mongoose.connect("mongodb+srv://root:root@cluster0.9ei6p.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{
    console.log("database connected successfully")
}).catch((err) => {
    console.log(err)
})

export {conn}