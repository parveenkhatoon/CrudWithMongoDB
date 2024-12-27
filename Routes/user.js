import {conn} from "../config/db.js"
import { User } from "../Model/User.js";

async function AddUser(req, res) {
    try {
        const adduser = await User.create(req.body)
        res.status(200).send({"data":adduser})
        
    } catch (error) {
        res.status(500).send({ "Errormassage":error})
    }
}


async function GetUserDetails(req,res) {
    try {
        
        const getuser = await User.find({})
        res.status(200).send({"data":getuser})

    } catch (error) {
        res.status(500).send({ "Errormassage":error})
    }
}

async function UpdateUserDetails(req,res) {
    try {
        const id = req.params.id
        const updateuser = await User.findByIdAndUpdate(id,req.body)
        res.status(200).send({"data":updateuser})
        
    } catch (err) {
        console.log(err)
        res.status(500).send({ error:err})
    }
}

async function DeleteUser(req, res) {
    try {
        const id = req.params.id
        const deleteuser = await User.findByIdAndDelete(id)
        res.status(200).send({"data":deleteuser})

    } catch (err) {
        console.log(err)
        res.status(500).send({ error:err})
    }
}

export {AddUser,GetUserDetails,UpdateUserDetails,DeleteUser}