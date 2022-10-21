import db from "../modelo/database.json";

export function Listado() {
  console.log(db);
  return (
    <ul>
      <h1>Componente "Listado": </h1>
      <h3>Tareas pendientes en la tienda: </h3>
      <li>Tarea 1 desde subcomponete</li>
      <li>Tarea 2 desde subcomponete</li>
      <li>Tarea 3 desde subcomponete</li>
      {db.map(function (d) {
        return (
          <li key={d.id}>
            Organizar: {d.nombre} {d.descripcion} <b>en el estante</b> {d.id}
          </li>
        );
      })}
    </ul>
  );
}
