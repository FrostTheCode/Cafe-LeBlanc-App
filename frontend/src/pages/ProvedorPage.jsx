import {useEffect} from 'react'
import { useProvedor } from '../context/ProvedorContext'
import ProvedorCards from '../components/ProvedorCards'

function ProvedorPage() {
    const{getProvedores, provedores} = useProvedor();

    useEffect( () => {
        getProvedores();
    }, [])

    if (!provedores.length === 0)
        return (<h1>No hay Provedores para listar</h1>)
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {
            provedores.map( (provedor) => (
                <ProvedorCards provedor={provedor} key={provedor._id}/>
            ))
        }
    </div>
  )
}

export default ProvedorPage