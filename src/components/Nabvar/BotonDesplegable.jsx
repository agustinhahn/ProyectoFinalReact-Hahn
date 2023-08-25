import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {Link} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function BotonDesplegable({tituloButton, primerItem, segundoItem, tercerItem}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = createTheme({
    status: {
        danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#232020',
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
            <div>
                <Button 
                    color="neutral"
                    className="btnNavbar"
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}

                >
                    {tituloButton}
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    onMouseLeave={handleClose}
                >
                    <Link to={('/category/:todos')}>
                        <MenuItem onClick={handleClose}>{primerItem}</MenuItem>
                    </Link>
                    <Link to={('/category/:domiciliar')}>
                        <MenuItem onClick={handleClose}>{segundoItem}</MenuItem>
                    </Link>
                    <Link to={('/category/:empresas')}>
                        <MenuItem onClick={handleClose}>{tercerItem}</MenuItem>
                    </Link>
                </Menu>
            </div>
        </ThemeProvider> 
    );
}
