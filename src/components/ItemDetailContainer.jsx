import React from 'react'
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
    const datos = [
    {
        id: 1,
        nombre: 'TL-WR845N',
        descripcion: 'Velocidad inalámbrica de 300Mbps ideal para aplicaciones sensibles a la interrupción como transmisión de video HD',
        precio: 10000,
        categoria: 'domiciliar'
    },
    {
        id: 2,
        nombre: 'Archer C80',
        descripcion: 'Wi-Fi 802.11ac Wave2 1300 Mbps en la banda de 5 GHz y 600 Mbps en la banda de 2.4 GHz',
        precio: 19000,
        categoria: 'domiciliar'
    },
    {
        id: 3,
        nombre: 'Archer C86',
        descripcion: '802.11ac Wave2 Wi-Fi 1300 Mbps on the 5 GHz band and 600 Mbps on the 2.4 GHz band Transmitting and receiving data on three streams to pair flawlessly with your 3×3 clients',
        precio: 25000,
        categoria: 'domiciliar'
    },
    {
        id: 4,
        nombre: 'ER7206 (TL-ER7206)',
        descripcion: 'Administración centralizada de la nube y Monitoreo inteligente / 1 puerto WAN SFP de 1 gigabit, puerto WAN RJ45 de 1 gigabit, puertos WAN / LAN de 2 gigabit para optimizar el uso del ancho de banda',
        precio: 55000,
        categoria: 'empresa'
    },
    {
        id: 5,
        nombre: 'ER8411',
        descripcion: 'acceso a la nube y aplicación Omada para una administración ultra conveniente y fácil 1 puerto WAN y 1 puerto WAN/LAN 10GE SFP+ proporcionan conectividad de agregación de gran ancho de band  Firewall potente, defensa DoS, filtrado de IP/MAC/URL, enlace IP-MAC y activación ALG con un clic brindan seguridad de clase mundia',
        precio: 5000,
        categoria: 'empresa'
    },
];

const getDatos = new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No hay datos'));
        }
        setTimeout(() => {
            resolve(datos);
        }, 2000);
    });

getDatos
    .then((res) =>{
    })
    .catch((error) =>{
        console.log(error)
    })



    return (
        <>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center',  flexWrap:'wrap', padding: '50px', width:'100%'}}>
                <ItemDetail datos={datos}/>
            </div>
        </>

    )
}

export default ItemDetailContainer