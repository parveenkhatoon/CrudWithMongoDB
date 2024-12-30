
import { mongoose } from "mongoose"

const UserShema = new mongoose.Schema({
    Name : {type:String, require:true},
    Email: {type: String, require:true, unique:true},
    Number: Number,
    Password: {type: String, require:true}
})


const User = mongoose.model("User", UserShema)

export { User }