import css from "./Hooks.module.css";
import { useState } from "react";

export function Hooks() {
  const [NuevaTarea, cambiarNuevaTarea] = useState([]);
  //const setdetareas = localStorage.getItem();
  const captura = (e) => {
    e.preventDefault();
    //guardarTarea(NuevaTarea);
   // localStorage.setItem("tarea3", NuevaTarea);
    cambiarNuevaTarea("");
  };

 /* function guardarTarea(NuevaTarea) {
    cambiarNuevaTarea([...setdetareas, NuevaTarea]);
  }*/

  return (
    <div className={css.componeteVariable}>
      <h1>Mis tareas</h1>
      <div>
        <form onSubmit={captura}>
          <textarea
            placeholder="Escriba acá su tarea"
            type="text"
            value={NuevaTarea}
            onChange={(e) => cambiarNuevaTarea(e.target.value)}
          ></textarea>
          <h4 className={css.h4}> alerta!</h4>
          <button
            onClick={() =>
              console.log("Esto es un evento en el botton de hook", NuevaTarea)
            }
          >
            Guardar tarea
          </button>
        </form>
      </div>
    </div>
  );
}
