import React from 'react'
import Item from './Item';

const ItemList = ({datos, category}) =>{
    const filtroEmpresa = datos.filter((cat) => cat.categoria === 'empresa')
    const filtroDomicilio = datos.filter((cat) => cat.categoria === 'domiciliar')

    if(category === ':empresas'){
        datos = filtroEmpresa
    }
    else if(category === ':domiciliar'){
        datos = filtroDomicilio
    }
    return (
        <>
            {datos.map((p)=>{
                return(
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

export default ItemList