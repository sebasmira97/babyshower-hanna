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
          <img src="public/img/Hanna.png" alt="logo" className="logo"></img>
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
              <a href="/">Regalos</a>
            </li>
            <li>
              <a href="/">Asistencia</a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu">
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Regalos</a>
            </li>
            <li>
              <a href="/">Asistencia</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App
