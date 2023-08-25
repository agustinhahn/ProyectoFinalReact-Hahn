
import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ContextCart } from '../context/CartContext'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Contador = () => {

    const {contador, setContador} = useContext(ContextCart)


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

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
            },
            palette: {
                primary: {
                    main: 'rgba(17, 16, 16, 0.9)',
                    darker: '#053e85',
                },
                neutral: {
                    main: '#D7D2E0',
                    contrastText: '#fff',
                },
            },
        });
    

    return (
        <ThemeProvider theme={theme}>  
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', width: '200px', margin:'20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', width: '200px' }}>
                    <Button variant="contained" onClick={restar}>-</Button>
                    <p>{contador}</p>
                    <Button variant="contained" color="primary" onClick={sumar}>+</Button>
                </div>
                <div style={{width: '100%', marginTop:'10px'}}>
                    <Button variant="contained" style={{width: '100%'}} onClick={reset}>RESET</Button>
                </div>
            </div>
        </ ThemeProvider>  
    )
}
export default Contador