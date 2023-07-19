import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SportsSoccerTwoToneIcon from '@mui/icons-material/SportsSoccerTwoTone';



function CartWidget(){
    return(
        <>
        <Box>
            <CardContent style={{textAlign:'center'}}>
                <Typography style={{textAlign:'center', padding: '5px'}} variant="h5">
                    10
                </Typography>
                <SportsSoccerTwoToneIcon />
            </CardContent>
        </Box>
        </>
    )
}

export default CartWidget