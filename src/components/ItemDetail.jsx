import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'
import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';



const ItemDetail = ({datos}) => {

  const {cart, setCart} = useContext(ContextCart)
  const {id} = useParams();
  const filterProducts = datos.filter((prod) => prod.id == id);
  return (
    <div>
      {filterProducts.map((p)=>{
        return(
          <>
          <Card sx={{ width: 350, height: 500, background: 'rgba(209, 218, 76, 0.6)', margin: '20px', padding:'10px'}}>
            <CardContent style={{display:'flex', flexDirection:'column'}}>
              <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
                {p.nombre}
              </Typography>
              <Typography variant="p" color="text.secondary" style={{marginTop:'10px', minHeight:'150px', display:'flex', alignItems:'center'}}>
                {p.descripcion}
              </Typography>
              <Typography variant="h6" color="text.secondary" style={{marginTop:'10px', textAlign:'center'}}>
                PRECIO FINAL: ${p.precio}
              </Typography>
            </CardContent>
            <CardContent style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <ItemCount />
            </CardContent>
            <CardActions style={{display:'flex', justifyContent:'center'}}>
              <Button size="small" color='primary' onClick={()=>setCart(cart + 1)}>AGREGAR CARRITO</Button>
            </CardActions>
        </Card>
        </>
        )
      })}
    </div>
  )
}

export default ItemDetail