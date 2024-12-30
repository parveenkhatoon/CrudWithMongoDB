// const mongoose = require("mongoose");
import  {mongoose}  from "mongoose";

let conn = mongoose.connect("mongodb+srv://mparveenkhatoon:myXXJwHYWlx9vJ8R@cluster0.heq8b.mongodb.net/test")
.then(()=>{
    console.log("database connected successfully")
}).catch((err) => {
    console.log(err)
})

let JWT_SECRET = 'nodetest'

export {conn,JWT_SECRET}