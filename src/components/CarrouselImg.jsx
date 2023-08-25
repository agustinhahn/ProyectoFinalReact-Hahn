import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fototrabajando from '../assets/fototrabajando.jpg'
import manoycompu from '../assets/manoycompu.jpg'
import familia1 from '../assets/familia1.jpg'
; // Crea un archivo de estilos para personalizar si es necesario

const CarrouselImg = () => {
    return (
        <div className='carousel-container'>
            <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false} stopOnHover={false} className="custom-carousel">
                <div>
                    <img className='imgCarrousel' src={manoycompu} alt="Imagen 2" />
                </div>
                <div>
                    <img className='imgCarrousel' src={fototrabajando} alt="Imagen 1" />
                </div>
                <div>
                    <img className='imgCarrousel' src={familia1} alt="Imagen 3" />
                </div>
            </Carousel>
        </div>

    );
    };

export default CarrouselImg;
