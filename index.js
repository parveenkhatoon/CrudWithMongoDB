import  express  from "express";
import  bodyParser from "body-parser";
import axios from "axios"
import { conn } from "./config/db.js"
import { User } from "./Model/User.js";
import { AddUser ,GetUserDetails,UpdateUserDetails,DeleteUser,login,registeruser} from "./Routes/user.js";
const app = express()
app.use(bodyParser.json());//Parses incoming JSON requests
app.use(bodyParser.urlencoded({extended:true}));//Parses incoming requests with URL-encoded payloads.

// var array = [2,3,6,5,37,4,3]
// var max = array[0];
// let secondMax = array[1];
// for (let index = 0; index < array.length; index++) {
//     if (array[index] > max) {
//         secondMax = max
//         max = array[index]
//     } else if (array[index] > secondMax && array[index] !== max) {
//         secondMax = array[index];
//     }
// }
// console.log(max,secondMax)

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     };
// }

// const newFunction = outerFunction("outside");
// newFunction("inside");


// var str = "Hello World"
// var count = 0
// for (let i = 0; i < str.length; i++) {  
//     if (str[i] === 'p') {
//         count++;
//     }
// }
// console.log(count)
    

// var str = "Hello World"
// var lis = []
// for (let i = 0; i < str.length; i++) {
//     var count = 0
//     if (!lis.includes(str[i])) {
//         for (let index = 0; index < str.length; index++) {
//             if (str[i] === str[index]) {
//                 count++;
//             }
//         }
//         lis.push(str[i])
//         console.log(str[i], count)
//     }
// }

app.post("/api/add/data",AddUser)
app.get("/api/get/data",GetUserDetails)
app.put("/api/update/data/:id",UpdateUserDetails)
app.delete("/api/del/data/:id", DeleteUser)
app.post("/api/login",login)
app.post("/api/register",registeruser)


app.listen(3000,()=>{
    console.log("server run on port", 3000)
})