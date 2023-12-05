import React from 'react'
import { useProducts } from '../context/ProductsContext'
import { Link } from 'react-router-dom';
import { IoTrashBin, IoPencilSharp } from 'react-icons/io5';

function ProductCards({product}) {
  const {deleteProduct} = useProducts();

  return (
    <div className='bg-amber-200 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
            <h1 className='text-1xl font-bold'>{product.name}</h1>
            <div className='flex gap-x-2 items-center'>
                <button
                  className='bg-red-800 hover:bg-red-950
                              text-white px-4 py-2 rounded-lg'
                  onClick={()=>{deleteProduct(product._id)}}><IoTrashBin/></button>
                <Link to={'/products/' + product._id}
                      className='bg-green-800 hover:bg-green-950
                                  text-white px-4 py-2 rounded-lg'>
                  <IoPencilSharp/>
                </Link>
            </div>
        </header>
        <p className='text-amber-950 my-2'>{product.price}</p>
        <p className='text-amber-950 my-2'>{product.year}</p>
    </div>
  )
}

export default ProductCards