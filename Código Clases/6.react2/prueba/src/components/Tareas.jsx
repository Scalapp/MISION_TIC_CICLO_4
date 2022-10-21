//import React from "react";
import "../css/Tareas.css";
import {Listado} from "../components/Listado.jsx"
function Tarea() {
  return (
    <>
     <Listado />
      <div className="contenedor-tarea">
        <img
          className="imagen-tarea"
          src={require("../img/tarea.png")}
          alt=""
        />
        <p className="texto-tarea"> Esto es una tarea en un componente</p>
        <p class="tareas"></p>
      </div>
    </>
  );
}

export default Tarea;