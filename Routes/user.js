import {conn,JWT_SECRET} from "../config/db.js"
import { User } from "../Model/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validateRegistration, validateLogin } from "../util/validators.js";

async function AddUser(req, res) {
    try {
        const { Name, Email, Number, Password } = req.body;

        const hashedPassword = await bcrypt.hash(Password, 10);

        const adduser = await User.create({ Name, Email, Number, Password: hashedPassword });

        const token = jwt.sign(
            { id: adduser.id, EmailID: adduser.Email },
            JWT_SECRET,
            { expiresIn: '1h' } 
        );

        res.status(200).send({ data: adduser, token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
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

async function login(req, res) {
    try {
        const { Email, Password } = req.body;
       

        let {errors,valid} = validateLogin({Email,Password});

        if (!valid) {
            console.log(valid);
            
            return res.status(400).send({ message: 'Invalid data', errors });
        }
        const user = await User.findOne({  Email });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        const pass = await bcrypt.compare(Password, user.Password);


        res.status(200).send({ data: user,message: 'User login successfully!!' });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
    
}

//register user 
async function registeruser(req, res){
    try {
        const { Name, Email, Number, Password } = req.body;
        let {errors,valid} = validateRegistration({Name,Email,Password});
        if (!valid) {
            return res.status(400).send({ message: 'Invalid data', errors });
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        const adduser = await User.create({ Name, Email, Number, Password: hashedPassword });
        const token = jwt.sign(
            { id: adduser.id, EmailID: adduser.Email },
            JWT_SECRET,
            { expiresIn: '1h' } 
        );
        res.status(200).send({ data: adduser, token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
}

export {AddUser,GetUserDetails,UpdateUserDetails,DeleteUser,login,registeruser}