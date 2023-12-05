import { TOKEN_SECRET } from "../config.js";
import  jwt  from "jsonwebtoken";

export const authRequired = (req, res, next) =>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({message:["no token, autorization denegada"]});
    }
    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if(err){
            return res.status(403).json({message: ["token invalid"]})
        }
        //si no hay error
        //guardamos el usuario en el objeto req.
        req.user = user;
        next();
    })//fin del verify
    //next();
}