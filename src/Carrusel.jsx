import React, { useState } from 'react';
import './Carrusel.css'

const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['public/Imagen1.jpeg', 'public/Imagen2.jpeg', 'public/Imagen3.jpeg', 'public/img/Imagen4.jpeg',
    'public/img/Imagen5.jpeg', 'public/img/Imagen6.jpeg', 'public/img/Imagen7.jpeg', 'public/img/SebasDani.jpeg']; // Agrega más imágenes según sea necesario

    const prevSlide = () => {
        setCurrentIndex((currentIndex === 0) ? images.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex === images.length - 1) ? 0 : currentIndex + 1);
    };

    return (
        <div className="carrusel">
            <div className="imagenes">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    />
                ))}
            </div>
            <button className='anterior' onClick={prevSlide}>&larr;</button>
            <button className='siguiente' onClick={nextSlide}>&rarr;</button>
        </div>
    );
};

export default Carrusel;
