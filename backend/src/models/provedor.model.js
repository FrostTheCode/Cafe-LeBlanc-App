import mongoose from "mongoose";

const provedorSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    email:{
        type: String,
        require: true,
        trim: true,
    },
    telephone:{
        type: Number,
        require: true,
        unique: true,
    },
    direccion:{
        type: String,
        trim: true,
    }
},{timestamps:true})

export default mongoose.model('Provedor', provedorSchema)