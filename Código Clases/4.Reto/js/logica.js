let form =document.getElementById("formulario");
let entrada=document.getElementById("input");
let alerta =document.getElementById("alerta");
let tareas =document.getElementById("listado");

form.addEventListener( "submit", (e)=>{
   e.preventDefault;
    console.log("hay un evento en el botton");
    validacion();
});

let validacion=()=>{
    if(entrada.value===""){
        //alert("Estimado usuario: Debe ingresar una tarea, en la caja de texto.");
        alerta.innerHTML="Esto es un cambio de la propiedad";
    } else{
        console.log("El evento se capura con exito");
        console.log(entrada.value);
        crearlistado();
    }
};

let crearlistado =()=>{
    tareas.innerHTML =`
    <h2>Listado de tareas guardadas</h2>
    <h2>Listado de tareas guardadas</h2><h2>Listado de tareas guardadas</h2>
    <h2>Listado de tareas guardadas</h2><h2>Listado de tareas guardadas</h2><h2>Listado de tareas guardadas</h2>

        <li>tarea 3</li>
        <li>tarea 4</li>
`;

};