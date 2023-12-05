import axios from "./axios.js";


export const getProductsRequest = () => axios.get('/productos');
export const getProductRequest = (id) => axios.put('/productos/'+ id);
export const createProductsRequest = (product) => axios.post('/productos',product);
export const deleteProductRequest = (id) => axios.delete('/productos/'+id);
export const updateProductsRequest = (id,product) => axios.put('/productos/'+ id,product);
