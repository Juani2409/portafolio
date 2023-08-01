import React from "react";

function Card(){
    return(
      
    <div class="container py-5">
    <section id="trabajos">
      <h2>Mis Trabajos</h2>
      <div class="row">
    
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="ruta-de-imagen-1.jpg" class="card-img-top" alt="Trabajo 1"/>
            <div class="card-body">
              <h5 class="card-title">Trabajo 1</h5>
              <p class="card-text">Descripción del trabajo 1.</p>
            </div>
          </div>
        </div>
  
    
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="ruta-de-imagen-2.jpg" class="card-img-top" alt="Trabajo 2"/>
            <div class="card-body">
              <h5 class="card-title">Trabajo 2</h5>
              <p class="card-text">Descripción del trabajo 2.</p>
            </div>
          </div>
        </div>
  
   
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="ruta-de-imagen-3.jpg" class="card-img-top" alt="Trabajo 3"/>
            <div class="card-body">
              <h5 class="card-title">Trabajo 3</h5>
              <p class="card-text">Descripción del trabajo 3.</p>
            </div>
          </div>
        </div>
  
        
        <div class="col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src="ruta-de-imagen-4.jpg" class="card-img-top" alt="Trabajo 4"/>
            <div class="card-body">
              <h5 class="card-title">Trabajo 4</h5>
              <p class="card-text">Descripción del trabajo 4.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>








    )

}

export default Card;