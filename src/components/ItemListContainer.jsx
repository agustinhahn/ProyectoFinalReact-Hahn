import { Typography } from '@mui/material'
import React from 'react'

const ItemListContainer = ({greeting}) => {

    return (
        <div style={{ padding:'50px'}}>
            <Typography variant='h3' style={{textAlign:'center'}}>{greeting}</Typography>
        </div>
    )
}

export default ItemListContainer