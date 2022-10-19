import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { Tarea } from "./components/Tarea";

const variable = <div>Hola mundo desde una variable</div>; //como variable

function ComponenteF() {
  //como funciójn
  return (
    <div>
      <h1>Hola mundo dede ComponenteF</h1>
    </div>
  );
}
function ComponenteF2(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.atrib1}</h1>
      <p>{props.atrib2}</p>
    </div>
  );
}
function ComponenteF3(props) {
  console.log(props);
  const var1 = props.atrib1;
  const var2 = props.atrib2;
  // const {var1,var2}=props;
  return (
    <div>
      <h1>{var1}</h1>
      <p>{var2}</p>
    </div>
  );
}
function ComponenteF3S({ atrib1, children }) {
  return (
    <div>
      <h1>{atrib1}</h1>
      <p>{children}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Tarea />
    {variable}
    <App />
    <ComponenteF />
    <ComponenteF2
      atrib1="Componente 3"
      atrib2="Esto es un párrafo de contenido"
    />
    <ComponenteF3
      atrib1="Componente 4"
      atrib2="Esto es un párrafo de contenido con variables"
    />
    <ComponenteF3S atrib1="Componente 5">
      contenido children ="Esto es un párrafo de contenido con variables"
    </ComponenteF3S>
  </>
);

//ReactDOM.render(variable, document.getElementById('root'));
