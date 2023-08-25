import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import { useEffect,useState } from 'react';
import Button from '@mui/material/Button';

const TableCart =() =>{
    
const {cart, setCart} = useContext(ContextCart)
const [precioFinal, setPrecioFinal] = useState(0)
const {botonCompra, setBotonCompra} = useContext(ContextCart)

cart.forEach(produc =>{
    produc.subTotal = produc.precio * produc.cantidad
})

const handleEliminarProducto = (productId) =>{
    const nuevosProductos = cart.filter((producto) => producto.id !== productId)
    setCart(nuevosProductos)
}

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'nombre', headerName: 'PRODUCTO', width: 250 },
    { field: 'precio', headerName: 'PRECIO', width: 100 },
    { field: 'cantidad', headerName: 'CANTIDAD',  width: 100,},
    { field: 'subTotal', headerName: 'SUB-TOTAL',width: 100,},
    { field: 'acciones', headerName: 'ACCION', width: 100,
    renderCell: (params) => (<Button  variant="contained" color="error"
    onClick={() => handleEliminarProducto(params.row.id)}>Eliminar</Button>),},];

const rows = cart;

useEffect(()=>{
    if(rows.length>0){
        const precioFinal = rows.reduce((acumulador, producto) =>{
            return acumulador + (producto.precio * producto.cantidad)
        }, 0)
        setPrecioFinal(precioFinal)
        }
},[rows])

const aceptarCompra = () =>{
    setBotonCompra(true)
}

if(botonCompra == false){
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>   
            <div style={{ height: 300, width: 720 , border:'5px ridge rgba(36, 32, 94, 0.1)'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                />
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <h2 style={{textAlign:'center'}}>TOTAL A PAGAR: ${precioFinal}</h2>
                <Button color='success' variant="contained" style={{marginBottom:'30px'}} onClick={()=>aceptarCompra()}>FINALIZAR COMPRA</Button>
            </div>
        </div>  
    );
}

}

export default React.memo(TableCart)