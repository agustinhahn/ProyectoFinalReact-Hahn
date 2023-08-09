import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

const Item = ({id,nombre,precio,categoria}) => {
  return (
    <>
      <Card sx={{ width: 260, height: 200, background: 'rgba(209, 218, 76, 0.6)', padding: '10px', margin:'20px'}}>
        <CardContent style={{display:'flex', flexDirection:'column'}}>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center', marginTop:'20px'}}>
            {nombre}
          </Typography>
          <Typography variant="h6" color="text.secondary" style={{marginTop:'10px'}}>
            PRECIO FINAL: ${precio}
          </Typography>
          <Typography variant="p" color="text.secondary" style={{marginTop:'10px', textAlign:'center'}}>
            Uso: {categoria}
          </Typography>
        </CardContent>
        <CardActions style={{display:'flex', justifyContent:'center'}}>
          <Link to={(`/item/${id}`)}>
            <Button size="small" color='primary'>MAS INFORMACION</Button>
          </Link>
        </CardActions>
    </Card>
    </>
  )
}

export default Item