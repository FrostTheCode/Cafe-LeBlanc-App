import {createContext, useContext, useState} from 'react';
import {createProvedorRequest,
        getProvedoresRequest,
        deleteProvedorRequest,
        getProvedorRequest,
        updateProvedorRequest
        } from '../api/provedor';

const ProvedorContext = createContext();

export const useProvedor = ()=> {
    const context = useContext(ProvedorContext);

    if(!context){
        throw new Error("useProvedor debe estar dentro de un provedorprovider")
    }
    
    return context;
}//fin del useProvedor

export function ProvedorProvider( {children}){
    const [provedores, setProvedores] = useState([])

    const createProvedor = async (provedor) => {
        try {
            await createProvedorRequest(provedor)
            getProvedores();
        } catch (error) {
            
        }
    }//fin del createProduct

    const getProvedores = async () => {
       try {
            const res = await getProvedoresRequest();
            setProvedores(res.data);
       } catch (error) {
            console.log(error);
       }
    }

    const deleteProvedor = async(id) => {
        try {
            const res = await deleteProvedorRequest(id);
            //console.log(res.data)
            if(res.status ===200)
                setProvedores(provedores.filter(provedor => provedor._id != id));
        } catch (error) {
            console.log(error)
        }
    }//fin del deleteProduct

    const getProvedor = async(id) => {
        try {
            const res = await getProvedorRequest(id)
            //console.log(res)
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    const updateProvedor = async (id, provedor) => {
        try {
            await updateProvedorRequest(id, provedor);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProvedorContext.Provider value={{
            provedores,
            getProvedores,
            getProvedor,
            createProvedor,
            updateProvedor,
            deleteProvedor
        }}>
            {children}
        </ProvedorContext.Provider>
    )
}