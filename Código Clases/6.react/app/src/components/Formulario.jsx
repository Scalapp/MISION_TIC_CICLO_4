import { useState } from "react";

export function Formulario(){

    const [nombreTarea, modificarTarea] = useState();

  const capturarValor = (e) => {
    e.preventDefault();
    console.log("He capturado el evento del formulario");
    //localStorage.setItem("tarea1","Desarrollar los mockups");
    localStorage.setItem("tarea2", nombreTarea);
  };
return(
    <form onSubmit={capturarValor}>
    <input
      type="text"
      placeholder="Ingrese una tarea"
      value={nombreTarea}
      onChange={(e) => modificarTarea(e.target.value)}
    ></input>
    <button
      onClick={() =>
        console.log("Hola mundo desde botton, guardaré", nombreTarea)
      }
    >
      Guardar tarea
    </button>
    
  </form>
);
}