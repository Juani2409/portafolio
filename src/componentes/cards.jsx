import React from "react";

function Card() {
  return (

    <div class="bg-dark container-fluid py-5" >
      <section id="trabajos">
        <h1 style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>Mis Trabajos</h1>
       

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="../logos/pi.jpg" class="d-block w-100" alt="Imagen Pi" />
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Siguiente</span>
  </button>
</div>



         
        
      </section>
    </div>
  )

}

export default Card;

