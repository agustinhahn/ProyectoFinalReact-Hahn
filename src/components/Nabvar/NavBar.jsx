import { AppBar, Toolbar, IconButton, Typography, Box} from "@mui/material"
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import brand from '../../assets/internet.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BotonDesplegable from "./BotonDesplegable";
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ContextCart } from '../../context/CartContext';


function Navbar(){

    const {cart, setCart} = useContext(ContextCart)

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

    const cantCart = () =>{
        if(cart.length>0){
            return cart.length
        }
    }

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
                        <IconButton className="btnNavbar" color="neutral" size="large">
                            <WifiIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{flexGrow:1, color:'#D7D2E0', marginLeft:'5px'}}>NETCOM</Typography>
                        <Link to={('/')}>
                            <Button className="btnNavbar" color="neutral">INICIO</Button>
                        </Link>
                        <BotonDesplegable tituloButton="SHOP" primerItem="Todos" segundoItem="Domicilios" tercerItem="Empresas"/>
                        <Link to={('/services')}>
                            <Button className="btnNavbar" color="neutral">SERVICIOS</Button>
                        </Link>
                        <Link to={('/contact')}>  
                            <Button className="btnNavbar" color="neutral">CONTACTO</Button>
                        </Link>
                        {cart.length>0 ? (
                            <Link to={('/cart')}>
                                <Button className="btnNavbar" color="neutral" endIcon={<AddShoppingCartIcon />}>
                                    CART = {cantCart()}
                                </Button>
                            </Link>
                        ):(
                            <Link to={('/cart')}>
                                <Button className="btnNavbar" color="neutral" endIcon={<AddShoppingCartIcon />}>
                                    CART
                                </Button>
                            </Link>)
                        }
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Navbar