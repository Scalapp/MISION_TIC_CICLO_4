import { useState } from "react";

export function Formulario() {
  const [nombreTarea, modificarTarea] = useState();
  //const [nombreestado, modificadordeestado] = useState();

  const [tareas, modificarTareas] = useState([
    {
      id: "1",
      nombre: "Tarea1",
      descrip: "Realizar moockups app1",
      estado: false,
    },
    {
      id: "2",
      nombre: "Tarea2",
      descrip: "Realizar moockups app2",
      estado: false,
    },
    {
      id: "3",
      nombre: "Tarea3",
      descrip: "Realizar moockups app3",
      estado: false,
    },
  ]);

  //cotrol del evento
  const capturarValor = (e) => {
    e.preventDefault(); //evitar recargar
    console.log("He capturado el evento del formulario");
    //localStorage.setItem("tarea1","Desarrollar los mockups");
    localStorage.setItem("tarea2", nombreTarea);
  };

  //formulario
  return (
    <>
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

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre Tarea</th>
            <th>Descripción</th>
            <th>Etado</th>
          </tr>
        </thead>
        <tbody>{
        tareas.map(tarea =>(
          <tr>
            <td>{tarea.id}</td>
            <td>{tarea.nombre}</td>
            <td>{tarea.descrip}</td>
            <td>{tarea.estado}</td>
          </tr>
          
        ))
          }</tbody>
      </table>
    </>
  );
}
