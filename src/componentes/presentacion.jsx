import React from "react";

function Presentacion() {
  return (
    <div
      style={{
      
        background: "linear-gradient(to bottom right, #1e276c, #000000)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section
        id="inicio"
        style={{
          maxWidth: "600px",
          
          padding: "20px",
        }}
      >
        <div className="container text-center">
        <h1 >Juan Ignacio Grodz</h1>
        <h2> Full Stack Developer</h2>
        </div>
        {/* Aquí puedes agregar más contenido */}
      </section>
    </div>
  );
}

export default Presentacion;