import React, { useState } from 'react';
import './Carrusel.css'

const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['https://static.wixstatic.com/media/800a42_ba7f45e058954ce5adc8149ed39fcfa4~mv2.jpeg', 'https://static.wixstatic.com/media/800a42_92fabc0e79c14ee9814245487af44b99~mv2.jpeg', 'https://static.wixstatic.com/media/800a42_8c8ad75640b34518a0fa351ff2a4c8b7~mv2.jpeg', 'https://static.wixstatic.com/media/800a42_5bb22aa4c23844a291b04c020102429c~mv2.jpeg', 'https://static.wixstatic.com/media/800a42_a1dbfab2ca1e479e9f85b897211757be~mv2.jpeg', 'https://static.wixstatic.com/media/800a42_596ed02d03c64f3f8fc3138904817eb7~mv2.jpeg', 'https://static.wixstatic.com/media/800a42_8dc054c250f340dfb6658d428661dedc~mv2.jpeg', 'https://static.wixstatic.com/media/800a42_b43a9c1d28554e0e8575c38d9e4be208~mv2.jpeg']; // Agrega más imágenes según sea necesario

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
