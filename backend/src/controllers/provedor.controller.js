import Provedor from '../models/provedor.model.js'

export const getProvedores = async(req,res)=>{
    try {
        const provedores = await Provedor.find({
        })
        res.json(provedores)
    } catch (error) {
     res.status(500).json({message: ['error al obtener los provedores']})   
    }
}//fin del getProvedores

export const getProvedor = async(req, res) => {
    try {
        const provedor = await Provedor.findById(req.params.id)
        if(!provedor){
            return res.status(404).json({message:['provedor no encontrado']}) 
        }
        res.json(provedor)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:['error al obtener el provedor']})
    }
}//fin del getprovedor

export const createProvedor = async(req, res) => {
    try {
        const {nombre,email,telephone,direccion}=req.body;
        const newProvedor = new Provedor({
            nombre,
            email,
            telephone,
            direccion,
        });
        const savedProvedor = await newProvedor.save();
        res.json(savedProvedor);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:['error al crear el provedor']});        
    }
}//fin del create provedor}

export const updateProvedor=async(req, res)=>{
    try {
        const provedor = await Provedor.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!provedor){
            return res.status(404).send({message:['provedor no encontrado']});
        }
        res.json(provedor)
    } catch (error) {
        console.log(error)
        res.status(404).send({message:['error al actualizar el provedor']})
    }
}//fin del updateProvedor

export const deleteProvedor = async (req, res) => {
    try {
        const provedor = await Provedor.findByIdAndDelete(req.params.id);
        if(!provedor){
            return res.status(404).send({message:['provedor no encontrado']})
        }
        res.json(provedor)        
    } catch (error) {
        console.log(error)
        res.status(500).send({message:['error al eliminar el provedor']})
    }
}//fin del deleteProvedor

