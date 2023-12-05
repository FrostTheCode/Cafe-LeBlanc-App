import React from 'react'
import { useProvedor} from '../context/ProvedorContext'
import { Link } from 'react-router-dom';
import { IoTrashBin, IoPencilSharp } from 'react-icons/io5';

function ProvedorCards({provedor}) {
    const {deleteProvedor} = useProvedor();
  return (
    <div className='bg-amber-200 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
            <h1 className='text-1xl font-bold'>{provedor.nombre}</h1>
            <div className='flex gap-x-2 items-center'>
                <button
                  className='bg-red-800 hover:bg-red-950
                              text-white px-4 py-2 rounded-lg'
                  onClick={()=>{deleteProvedor(provedor._id)}}><IoTrashBin/></button>
                <Link to={'/provedor/' + provedor._id}
                      className='bg-green-800 hover:bg-green-950
                                  text-white px-4 py-2 rounded-lg'>
                  <IoPencilSharp/>
                </Link>
            </div>
        </header>
        <p className='text-amber-950 my-2'>{provedor.email}</p>
        <p className='text-amber-950 my-2'>{provedor.telephone}</p>
        <p className='text-amber-950 my-2'>{provedor.direccion}</p>
    </div>
  )
}

export default ProvedorCards