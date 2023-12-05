import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
import {createAccessToken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

//funcion para registrar usuarios
export const register = async (req, res)=>{
    try {        
        const {username, email, password} = req.body; 
        
        //validamos que el email no este registrado
        const userFound = await User.findOne({email});
        if(userFound){
            return res.status(400).json({message:["ese email ya esta registrado"]}); 
        }
        const passwordHash = await bcryptjs.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
    
        const userSave = await newUser.save()
        const token = await createAccessToken({id: userSave._id})
        res.cookie('token', token,{secure:true, httpOnly:true, sameSite:"none"})
        res.json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email
            
        });
        
    } catch (error) {
        console.log(error);
    }
    
}//fin del register

//funcion para iniciar sesión
export const login =async (req, res)=>{
    const {email,password} = req.body
    console.log(email,password)
    try {
        const userFound = await User.findOne({email})
        if(!userFound){
            return res.status(400).json({message:["usuario no encontrado "]})
        }

        const isMatch = await bcryptjs.compare(password, userFound.password)
        if(!isMatch){
            res.status(400).json({message:["password no coincide"]})
        }//password y usuario coinciden

        const token = await createAccessToken({id: userFound._id})
        res.cookie ('token', token, {secure:true, httpOnly:true, sameSite:"none"});
        console.log(token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    } catch (error) {
        console.log(error)
    }
}//fin del login

export const logout = (req, res) => {
    res.clearCookie("token")
    return res.sendStatus(200)
}//fin del logout

//funcion para obtener el perfil de usuario.
export const profile = async(req, res) => {
    //console.log(req.user)
    //res.send("profile")
    const userFound = await User.findById(req.user.id);

    if(!userFound) {
        return res.status(400).json({message:["User not found"]})
    }
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })
}

export const VerifyToken = async (req, res) => {
    const {token} = req.cookies;

    if(!token)
        return res.status(401).json({message:["Not authorized"]});

    jwt.verify(token, TOKEN_SECRET, async (err,user)=> {
        if(err) 
        return res.status(401).json({message: ["Not authorized"]})
        
        const userFound = await User.findById(user.id);
        if(!userFound) 
            return res.status(401).json({message: ["Not authorized"]})
        
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })//fin del return res.json
    })//fin del jwt.verify
}//fin del verifyToken