import React from "react";
import '../stylesheets/Testimonios.css'; 

export function Testimonio(props){ //export para exportar sin utilizar la exportacion por defecto (ver referencia abajo)
    return (
      <div className="contenedor-testimonio">
          <img className="imagen-testimonio" src= {require(`../image/img-${props.imagen}.png`)} alt= {props.alt} />

          <div className="contenedor_texto-testimonio">
            <p className="nombre-testimonio"><strong>{props.nombre}</strong> in {props.pais}</p>
            <p className="cargo-testimonio">{props.cargo} in <strong>{props.empresa}</strong></p>
            <p className="texto-testimonio">"<strong>{props.resaltado}</strong> {props.testimonio} "</p>
          </div>
      </div>
    );
}

//Es importante exportar, o hacer esto para que se pueda importar en los elementos que lo llamen
// export default Testimonio; 