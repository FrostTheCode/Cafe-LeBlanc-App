import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {getProduct, createProduct, getProducts, updateProduct, deleteProduct} from '../controllers/products.controller.js'
import {validateSchema} from '../middleware/validator.middelware.js'
import { productSchemas } from "../schemas/products.schemas.js";

const router = Router();

//para obtener todos los productos
router.get('/productos', authRequired, getProducts);
//para agregar un producto 
router.post('/productos', authRequired,validateSchema(productSchemas), createProduct);
//para obtener un producto por id
router.get('/productos/:id', authRequired, getProduct);
//para actualizar un producto
router.put('/productos/:id', authRequired, updateProduct);
//para eliminar un producto por id
router.delete('/productos/:id', authRequired, deleteProduct);

export default router;