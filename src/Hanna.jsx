import React from 'react'
import ReactDOM from 'react-dom/client'
import './Hanna.css'
import Carrusel from './Carrusel.jsx'

function Hanna() {
  
  return (
    <>
      <section className='portada'>
        <div className='circulo'>
          <div className='foto'>
            <img src="public/img/SebasDani.jpeg"></img>
          </div>
        </div>
        <div className='informacion'>
          <h1>Baby Shower</h1>
          <img src='public/img/Hanna.png'></img>
          <div className='info-dia'>
            <p>Nov.<br></br>25</p>
            <div className='linea-vertical'></div>
            <p>Meadowbrook village clubhouse<br></br>8920 Sheldon Rd, Tampa, FL 33635</p>
            <div className='linea-vertical'></div>
            <p>4:00 PM</p>
          </div>
        </div>
      </section>
      <section className='general'>
        <div className='body'>
          <div className='botones'>
            <a href='/'>Confirmar asistencia</a>
            <a href='/'>Lista de regalos</a>
          </div>
          <div className='carru'>
            <Carrusel />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hanna
