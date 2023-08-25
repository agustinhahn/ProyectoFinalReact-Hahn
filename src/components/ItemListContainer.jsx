import React from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
    const {category} = useParams()

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
            <div style={{display:'flex', justifyContent:'center', margin:'20px'}}>
                <h1 className='animated fadeInUp titulo-page'>NUESTROS PRODUCTOS</h1>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center',  flexWrap:'wrap'}}>
                <ItemList datos={products} category={category}/>
            </div>
            <Footer />
        </>
    )
}

export default ItemListContainer