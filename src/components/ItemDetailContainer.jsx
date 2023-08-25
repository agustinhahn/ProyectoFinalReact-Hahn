import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const itemCollection = collection(db, 'productosNetcom')
        getDocs(itemCollection).then((snapshot) =>{
            const docs = snapshot.docs.map((doc) => 
            ({id: doc.id, ...doc.data()}))
            setProducts(docs)
        })
    }, [])

    return (
        <>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center',  flexWrap:'wrap', padding: '50px', width:'100%'}}>
                <ItemDetail datos={products}/>
            </div>
        </>

    )
}

export default ItemDetailContainer