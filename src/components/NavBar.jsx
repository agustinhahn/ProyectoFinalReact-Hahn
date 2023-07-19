import { AppBar, Toolbar, IconButton, Typography, Box} from "@mui/material"
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import brand from '../assets/internet.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Navbar(){

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
            },
            palette: {
                primary: {
                    main: '#393E41',
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
                            <img src={brand} alt="algo" style={{height:'30px', paddingRight:'5px'}}/>
                        </Box>
                        <IconButton color="inherit" size="large">
                            <WifiIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{flexGrow:1}}>NETCOM</Typography>
                        <Button color="inherit">INICIO</Button>
                        <Button color="inherit">SERVICIOS</Button>
                        <Button color="inherit">CONTACTO</Button>
                        <Button color="inherit" endIcon={<AddShoppingCartIcon />}>SHOP</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>

        </>
    )
}

export default Navbar