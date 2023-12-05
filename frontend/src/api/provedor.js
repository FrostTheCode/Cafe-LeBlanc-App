import axios from "./axios.js";

export const getProvedoresRequest = () => axios.get('/provedor');
export const getProvedorRequest = (id) => axios.put('/provedor/'+id);
export const createProvedorRequest = (provedor) => axios.post('/provedor',provedor);
export const deleteProvedorRequest = (id) => axios.delete('/provedor/'+id);
export const updateProvedorRequest = (id,provedor) => axios.put('/provedor/'+id,provedor);



