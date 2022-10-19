import tasks from "../productos.json";
export function Listado() {
  console.log(tasks);
  return (
    <ul>
      {tasks.map(function (task) {
        return <li>{task.nombre}</li>;
      })}
    </ul>
  );
}
