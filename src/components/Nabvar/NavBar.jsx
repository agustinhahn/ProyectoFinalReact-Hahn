import { AppBar, Toolbar, IconButton, Typography, Box} from "@mui/material"
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import brand from '../../assets/internet.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BotonDesplegable from "./BotonDesplegable";
import {Link} from 'react-router-dom'

function Navbar({changeNumber}){

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
            },
            palette: {
                primary: {
                    main: 'rgba(36, 32, 94, 0.5)',
                    darker: '#053e85',
                },
                neutral: {
                    main: '#64748B',
                    contrastText: '#fff',
                },
            },
        });

    return(
        <> 
            <ThemeProvider theme={theme}>   
                <AppBar color='primary' position="static">
                    <Toolbar>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <Link to={('/')}>    
                                <img src={brand} alt="algo" style={{height:'30px', paddingRight:'5px'}}/>
                            </Link>
                        </Box>
                        <IconButton color="inherit" size="large">
                            <WifiIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{flexGrow:1}}>NETCOM</Typography>
                        <Link to={('/')}>
                            <Button color="inherit" onClick={()=> changeNumber(1)}>INICIO</Button>
                        </Link>
                        <BotonDesplegable tituloButton="SHOP" primerItem="Todos" segundoItem="Domicilios" tercerItem="Empresas"/>
                        <Link to={('/services')}>
                            <Button color="inherit">SERVICIOS</Button>
                        </Link>
                        <Link to={('/contact')}>  
                            <Button color="inherit">CONTACTO</Button>
                        </Link>
                        <Link to={('/cart')}>
                            <Button color="inherit" endIcon={<AddShoppingCartIcon />}>CART</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Navbar