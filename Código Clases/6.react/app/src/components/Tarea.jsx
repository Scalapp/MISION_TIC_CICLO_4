import { Listado } from "./Listado";
import { Formulario } from "./Formulario";
//import React from "react";
export function Tarea() {
  return (
    <div>
      <header>
        <h1>App de tareas</h1>
      </header>
      <main>
        <h4>Formulario</h4>
        <Formulario />
        <h4>Estas son las tareas pendientes:</h4>
        <Listado />
      </main>
    </div>
  );
}
