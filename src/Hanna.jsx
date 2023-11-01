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
            <p>3:00 PM</p>
          </div>
        </div>
      </section>
      <section className='general'>

          <div className='botones'>
            <a href='#asistencia'>Confirmar asistencia</a>
            <a href='https://www.amazon.com/baby-reg/daniela-bernal-febrero-2024-tampa/7GK34AL3JJIT?ref_=cm_sw_r_apin_dp_ERAMG1WWSEG44X1T8NTJ' target="_blank">Regalos Amazon</a>
            <a href='https://www.target.com/gift-registry/gift-giver?registryId=1a249830-64b8-11ee-9194-977fd23a0d5b&type=BABY' target="_blank">Regalos Target</a>
            <a href='https://maps.app.goo.gl/GHRDDJPG4b48s1iX8' target="_blank">Ubicación</a>
            
          </div>
          <div className='carru' id='fotos'>
            <Carrusel />
          </div>
          <div className='asistencia'>
            <iframe id='asistencia' src="https://docs.google.com/forms/d/e/1FAIpQLSf39qzgL7gYKTAkl8qcutfm73TDTut1c0y_nfF7COn4j9_z0A/viewform?embedded=true" width="800" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
          </div>

      </section>
    </>
  );
}

export default Hanna
