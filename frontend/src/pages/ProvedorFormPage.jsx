import { useForm } from 'react-hook-form'
import { useProvedor } from '../context/ProvedorContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { IoBusiness } from 'react-icons/io5' 

function ProvedorFormPage() {
    const {register, handleSubmit, setValue, formState:{errors} } = useForm(
        {
            defaultValues: {
               telephone: 0 
            }
        }
    );
    const {createProvedor, getProvedor, updateProvedor} = useProvedor();
    const navigate = useNavigate();
    const params = useParams();

    useEffect( ()=>{
        async function loadProvedor(){
            if(params.id){
                const provedor = await getProvedor(params.id);
                setValue('nombre', provedor.nombre);
                setValue('email', provedor.email);
                setValue('telephone', provedor.telephone);
                setValue('direccion', provedor.direccion);
            }
        }

    loadProvedor();    
    }, [])//fin del useEffect

    const onSubmit = handleSubmit( (data) =>{
        //console.log(data);
        if(params.id){
            updateProvedor(params.id, data);
        }else{
            createProvedor(data);
        }
        navigate('/provedor')
    })//fin del onSubmit


  return (
    <div className="flex items-center justify-center h-screen">
        <div className='bg-amber-200 max-w-md w-full p-10 rounded-md'>
            <form onSubmit={onSubmit}>
                <h1 className="text-3xl font-bold">Nuevo Provedor</h1>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text'
                        className='w-full bg-amber-400 text-amber-950 px-4 py-2 rounded-md my-2'
                        placeholder='Nombre del provedor'
                        {
                            ...register("nombre", {required: true})
                        } autoFocus/>
                        {   errors.nombre && (
                            <div className='text-red-500'>Nombre del provedor es requerido</div>
                        )}

                <label htmlFor='email'>Correo Electronico</label>
                <input type='email'
                        className='w-full bg-amber-400 text-amber-950 px-4 py-2 rounded-md my-2'
                        placeholder='Email del provedor'
                        {
                            ...register("email", {required: true})
                        } />
                        {   errors.email && (
                            <div className='text-red-500'>Email del provedor es requerido</div>
                        )}

                <label htmlFor='telephone'>Telefono</label>
                <input type='number' step="1"
                        className='w-full bg-amber-400 text-amber-950 px-4 py-2 rounded-md my-2'
                        placeholder='Telefono del Provedor'
                        {
                            ...register("telephone",{
                                required: true,
                                min: 0,
                                valueAsNumber:true
                            })
                        } />
                        {   errors.telephone && (
                            <div className='text-red-500'>El Telefono del provedor es requerido</div>
                        )}
                        {   errors.telephone?.type ==="min" && (
                            <div className='text-red-500'>El Telefono minimo es 0</div>
                        )}

                <label htmlFor='direccion'>Direccion</label>
                <input type='text'
                        className='w-full bg-amber-400 text-amber-950 px-4 py-2 rounded-md my-2'
                        placeholder='Direccion del provedor'
                        {
                            ...register("direccion", {required: true})
                        } autoFocus/>
                        {   errors.direccion && (
                            <div className='text-red-500'>Direccion del provedor es requerido</div>
                        )}        

                <button className='bg-amber-400 px-3 py-3 rounded-md'
                        type="submit"><IoBusiness size={30}/>
                </button>                
            </form>
        </div>
    </div>
  )
}

export default ProvedorFormPage