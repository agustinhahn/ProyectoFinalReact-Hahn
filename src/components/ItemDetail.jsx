import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams, Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import ButtonGoShop from './ButtonGoShop';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetail = ({datos}) => {

  const {id} = useParams()
  

  const [producto, setProducto] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    const oneItem = doc(db, 'productosNetcom', `${id}`)
    getDoc(oneItem).then((snapshot)=>{
        if(snapshot.exists()){
            const docs = snapshot.data()
            setProducto(docs)
        }
    })
}, [])

  const {cart, setCart} = useContext(ContextCart)
  const {contador, setContador} = useContext(ContextCart)

  const filterProducts = datos.filter((prod) => prod.id == id);
  const comprobarBoton = () =>{
    if(contador>0){
          const agregarNuevoProd = cart.find((prod) => prod.id === filterProducts[0].id)
          if(agregarNuevoProd === undefined){
            agregarCarrito()
          }
          else{
            avisoYaEsta()
            setContador(0)
          }
        }
    else{
      agregarCantidadcount()
    }
    }


  const agregarCarrito = () =>{
    const cantidadElegida = contador
    const nuevoProducto = filterProducts.splice(0,1)[0]
    nuevoProducto.cantidad = cantidadElegida
    setCart([...cart, nuevoProducto])
    avisoAdd()
    setContador(0)
  }

//avisos en cuanto a la accion del boton agregar productos
  const avisoAdd = () =>{
    Toastify({
      text: "Producto agregado en carrito",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      className: "info",
      // destination: '../cart', //funcion a la espera de base de datos para persistencia
      // newWindow: true,
      close: true,
      style: {
        background: "#39DF22",
      }
    }).showToast();
  }

  const agregarCantidadcount = () =>{
    Toastify({
      text: "Elige una cantidad",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      className: "info",
      close: true,
      style: {
        background: "#E89B14",
      }
    }).showToast();
  }

  const avisoYaEsta = () =>{
    Toastify({
      text: "Este producto ya esta en carrito",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      className: "info",
      close: true,
      // destination: '../cart', //funcion a la espera de base de datos para persistencia
      // newWindow: true,
      style: {
        background: '#E51C1C',
      }
    }).showToast();
  }

  const theme = createTheme({
    status: {
        danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: 'rgba(195, 133, 36 , 0.9)',
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '30px' }}>
              <Link to={'../category/:todos'}>
                  <ButtonGoShop />
              </Link>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                  {filterProducts.map((p) => {
                      return (
                          <>
                              <Card sx={{ width: 350, height: 500, background: 'rgba(153, 154, 151, 0.8)', margin: '20px', padding: '10px' }}>
                                  <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                                      <Typography gutterBottom variant="h5" color="#20201F" component="div" style={{ textAlign: 'center', fontStyle: 'bold' }}>
                                          {p.nombre}
                                      </Typography>
                                      <Typography variant="p" color="#20201F" style={{ marginTop: '10px', minHeight: '150px', display: 'flex', alignItems: 'center' }}>
                                          {p.descripcion}
                                      </Typography>
                                      <Typography variant="h6" color="#20201F" style={{ marginTop: '10px', textAlign: 'center' }}>
                                          PRECIO FINAL: ${p.precio}
                                      </Typography>
                                  </CardContent>
                                  <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                      <ItemCount />
                                  </CardContent>
                                  <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                                      <Button size="small" color='primary' onClick={() => comprobarBoton()}>AGREGAR CARRITO</Button>
                                  </CardActions>
                              </Card>
                          </>
                      )
                  })}
              </div>
          </div>
      </ ThemeProvider>
  )
}

export default React.memo(ItemDetail)