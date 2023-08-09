
import { Button } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)
    useEffect(()=>{
    }, [contador])

    const sumar = () =>{
        setContador(contador + 1)
    }

    const restar = () =>{
        if(contador>0){
            setContador(contador - 1)
        }
    }

    const reset = () =>{
        setContador(0)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', width: '200px', margin:'20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', width: '200px' }}>
                <Button variant="contained" color="success" onClick={sumar}>+</Button>
                <p>{contador}</p>
                <Button variant="contained" color='error' onClick={restar}>-</Button>
            </div>
            <div style={{width: '100%', marginTop:'10px'}}>
                <Button variant="contained" style={{width: '100%'}} onClick={reset}>RESET</Button>
            </div>
        </div>
    )
}
export default Contador