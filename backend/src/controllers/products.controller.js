import Products from '../models/product.models.js'

//funcion para crear todos los productos
export const getProducts = async(req,res)=>{
    try {
        const products = await Products.find({
            user: req.user.id
        }).populate("user"); 
        res.json(products);
        
    } catch (error) {
        res.status(500).json({message: ['error al obtener los productos']});
    }
}//fin del getProducts;

//funcion para crear un productos
export const createProduct = async(req,res)=>{
    try {
        const{name,price,year}=req.body;
        const newProduct = new Products({
            name,
            price,
            year,
            user: req.user.id
        });
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:['error al crear el producto']});
    }
}//fin del createProduct;

//funcion para obtebner un producto
export const getProduct = async(req,res)=>{
    try {
        const product = await Products.findById(req.params.id).populate("user");
        if(!product){
            return res.status(404).json({message: ["Product not found"]})
        }
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: ['error al obtener el producto']});
    }
}//fin del getProduct;

//funcion para eliminar un producto
export const deleteProduct = async(req,res)=>{
    try {
        const product = await Products.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({message: ["Product not found"]})
        }
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: ['error al borrar el productos']});
    }
}//fin  del deleteProduct;

//funcion para actualizar un producto
export const updateProduct = async(req,res)=>{
    try {
        const product = await Products.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!product){
            return res.status(404).json({message: ["Product not found"]})
        }
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: ['error al actualizar el productos']});
    }
}//fin del updateProduct;
