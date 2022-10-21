import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Tarea from "./components/Tareas";
import {Listado} from "./components/Listado";
import { Hooks } from "./components/Hooks";

//ReactDOM.render(<div>Hola mundo</div>,document.getElementById('root'));

const componeteVariable = (
  <div className="componeteVariable">
    <h1>Mis tareas</h1>
    <div>
      <form>
        <textarea defaultValue={"Escriba acá su tarea"}>
        </textarea>
        <h4> alerta!</h4>
        <button>Guardar tarea</button>
      </form>
    </div>
  </div>
);
function Actividad() {
  return (
    <div className="actividad">
      <h1>Función Actividad</h1>
      <p>Esta es la descripción de la actividad</p>
      <p>Esta es la descripción de la actividad</p>
      <p>Esta es la descripción de la actividad</p>
    </div>
  );
}

function ActividadT2(prop) {
    console.log(prop);
  return (
    <div>
      <h1>Componente actividadT2:</h1>
      <p>Esta es la descripción de la actividad</p>
      <p>Esta es la descripción de la actividad</p>
      <p>Esta es la descripción de la actividad</p>
      <h5>Persona: {prop.persona}</h5>
      <h5>Duración: {prop.tiempo}</h5>
    </div>
  );
}


function ActividadT3(prop) {
    console.log(prop);
    //var persona=prop.persona;
    //var tiempo=prop.persona;
    const {persona,tiempo}=prop;
  return (
    <div> 
      <h1>Nombre de la actividad tipo 3:</h1>
      <p>Esta es la descripción de la actividad tipo 3</p>
      <p>Esta es la descripción de la actividad tipo 3</p>
      <p>Esta es la descripción de la actividad tipo 3</p>
      <h5>Persona: {persona}</h5>
      <h5>Duración: {tiempo}</h5>
    </div>
  );
}

function ActividadT4({persona,tiempo,children}) {
  return (
    <div> 
      <h1>Nombre de la actividad tipo 4:</h1>
      <p>Esta es la descripción de la actividad tipo 4</p>
      <p>Esta es la descripción de la actividad tipo 4</p>
      <p>Esta es la descripción de la actividad tipo 4</p>
      <p>{children}</p>
      <h5>Persona: {persona}</h5>
      <h5>Duración: {tiempo}</h5>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Hooks/>
    <Actividad />
    <ActividadT2 persona="Juan David" tiempo ="30 min"/>  
    <ActividadT3 persona="Carlos Mario" tiempo ="20 min"/>  
    <ActividadT4 persona="José Antonio" tiempo ="20.25 min"> 
    Esto es un contenido de mi Componente T4
    Es similar a los elementos html pero comienza con mayúscula
    </ActividadT4>

    <div>Componentes fuera del index:</div>
    <Tarea />
    <App />
    <Listado />
  </>
);
/* {componeteVariable} 
   */
//<div>Hola mundo</div>
//<><Tarea /><App /></>
