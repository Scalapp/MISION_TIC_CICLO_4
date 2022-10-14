let form =document.getElementById("formulario");
let entrada=document.getElementById("input");
let alerta =document.getElementById("alerta");
let tareas =document.getElementById("listado");
let item =document.getElementById("lista");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hay un evento en el botton");
    validacion();
});

let validacion=()=>{
    if(entrada.value===""){
        //alert("Estimado usuario: Debe ingresar una tarea, en la caja de texto.");
        alerta.innerHTML="Modificación";
    } else{
        console.log("El evento se capura con exito");
        console.log(entrada.value);
        crearitem();
    }
};

let crearitem =()=>{
    item.innerHTML +=`<li>${entrada.value}</li>`;
};

let eliminaritem=()=>{
    
};