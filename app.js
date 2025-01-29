// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Funcion para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; 

    //condicion para validar la entrada
    if (amigo == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(amigo); // añadimos el nombre a la lista
        borrarInput(); // llamo a la funcion para restaurar el input
        recorrerLista();
    }
    return;
}

//funcion para borrar el input luego de agregar un nombre
function borrarInput(){
    let restaurarInput = document.getElementById('amigo');
    restaurarInput.value = "";
    return;
}

//funcion para recorrer el array de nombres y crear una lista LI en html
function recorrerLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i of amigos){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent= i ;
        lista.appendChild(nuevoElemento);
    }
    return;
}

//funcion para seleccionar un nombre aleatorio del array
function sortearAmigo(){
    let numeroMaximo = amigos.length;

    if (amigos.length === 0){
        alert("Aun no ha ingresado nombres, vuelva a intentarlo");
    }else{
        let indice = Math.floor(Math.random()*numeroMaximo);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`El amigo sorteado es: ${amigos[indice]}`);
    }
}