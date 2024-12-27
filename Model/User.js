
import { mongoose } from "mongoose"

const UserShema = new mongoose.Schema({
    Name : {type:String, require:true},
    Email: {type: String, require:true, unique:true},
    MobileNumber: Number
})


const User = mongoose.model("User", UserShema)

export { User }