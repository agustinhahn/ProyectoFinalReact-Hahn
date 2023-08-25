import React from 'react'
import CarrouselImg from './CarrouselImg'
import Footer from './Footer'


const Home = () => {
    return (
        <>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <div className='div-home'>
                <h1 className='animated fadeInUp h1-home'>BIENVENIDO A NETCOM</h1>
                <h4 className='animated fadeIn h4-home'>SOMOS PROVEEDORES DE SERVICIO DE INTERNET E INSUMOS PARA LA INDUSTRIA</h4>
            </div>
            <CarrouselImg />
            <Footer />
        </div>
        </>
    )
}

export default Home