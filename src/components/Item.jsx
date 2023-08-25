import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Item = ({id,nombre,precio,categoria}) => {

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
    <>
      <ThemeProvider theme={theme}>  
        <Card sx={{ width: 260, height: 200, background: 'rgba(153, 154, 151, 0.8)', padding: '10px', margin:'20px'}}>
          <CardContent style={{display:'flex', flexDirection:'column'}}>
            <Typography gutterBottom variant="h5" color="#20201F" component="div" style={{textAlign:'center', marginTop:'20px'}}>
              {nombre}
            </Typography>
            <Typography variant="h6" color="#20201F" style={{marginTop:'10px'}}>
              PRECIO FINAL: ${precio}
            </Typography>
            <Typography variant="p" color="#20201F" style={{marginTop:'10px', textAlign:'center'}}>
              Uso: {categoria}
            </Typography>
          </CardContent>
          <CardActions style={{display:'flex', justifyContent:'center'}}>
            <Link to={(`/item/${id}`)}>
              <Button size="small" color='primary'>MAS INFORMACION</Button>
            </Link>
          </CardActions>
      </Card>
    </ ThemeProvider>
    </>
  )
}

export default React.memo(Item)