import React from 'react'
import Item from './Item';
import Loading from './Loading'
import { useEffect,useState } from 'react';


const ItemList = ({ datos, category }) => {

    

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const filtroEmpresa = datos.filter((cat) => cat.categoria === 'empresa')
    const filtroDomicilio = datos.filter((cat) => cat.categoria === 'domiciliar')

    if (category === ':empresas') {
        datos = filtroEmpresa
    }
    else if (category === ':domiciliar') {
        datos = filtroDomicilio
    }
    else if(category === ':todos'){
        datos = datos
    }
    else{
        datos=[]
    }   

    if (loading) {
        return <Loading/>
    }
    else{
        return (
            <>
                {datos.map((p) => {
                    return (
                        <>  
                            <Item
                                key={p.id}
                                id={p.id}
                                nombre={p.nombre}
                                categoria={p.categoria}
                                precio={p.precio}
                            />
                        </>
                    )
                })}
            </>
        )
    }

}

export default React.memo(ItemList)