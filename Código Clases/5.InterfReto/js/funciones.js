let form = document.getElementById("formulario");
let entrada =document.getElementById("entrada");
let msn =document.getElementById("mensaje");
let lista =document.getElementById("controllista");

form.addEventListener("submit",(evento) =>{
    evento.preventDefault();
    console.log("hola mundo");
    validacion();
});

let validacion =() =>{
    if (entrada.value ==="Escriba acá su tarea"
    ||entrada.value ===""){
     //  window.alert("ingrese un valor al formulario");
       msn.innerHTML="entrada incorrecta";
    }else {
        msn.innerHTML="";
        window.alert("entrada correcta");
        creartarea();

    }
};

let creartarea =()=>{
    //lista.innerHTML +=`<li>esto es un elemento nuevo para la lista</li>`;
    lista.innerHTML +=`<li>${entrada.value}</li>`;
    entrada.value="";

};