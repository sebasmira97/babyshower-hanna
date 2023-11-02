import { useState } from 'react'
import './App.css'

function App() {
  const activar = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    if(!mobileMenu.className.contains("inactive")){
      mobileMenu.className.add("inactive");
    }
  }
  return (
    <>
      <nav>
        <div className="navbar-left">
          <img src="https://static.wixstatic.com/media/800a42_1f99c9f868cd4a60bfa16e1343f686fb~mv2.png" alt="logo" className="logo"></img>
        </div>

        <div className="navbar-right">
          <button className="menuMobile" onClick={activar}>
            <img src="public/icon_menu.svg" alt="menu" class="menu" ></img>
          </button>
          
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#fotos">Fotos</a>
            </li>
            <li>
              <a href="#asistencia">Asistencia</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App
