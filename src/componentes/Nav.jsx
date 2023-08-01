import React from 'react'
import "./Nav.css"

function Nav() {
  return (
<nav class="bg-dark navbar navbar-expand-md navbar-light bg-light" >
    <div class="container">
      <span id='nombre' class="navbar-brand" href="#">JIG Juan Ignacio Grodz</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#inicio">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#trabajos">Trabajos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   )
}

export default Nav;