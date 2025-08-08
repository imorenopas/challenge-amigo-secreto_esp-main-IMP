// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaracion de variables

let arrAmigos = [];


//-- Click al botón añadir
//Funcion para agregar nombres de amigos al arreglo
function agregarAmigo (){
    //console.log ('agregar amigo');

    // HTML: Borramos el mensaje del resultado del sorteo anterior, si es que lo hubo
    // El arreglo de nombres de amigos no se inicializa
    var listaResultado = document.getElementById('resultado');
    // Se inicializa la lista del html del nombre del amigo sorteado
    eliminarElementosLista(listaResultado);
    
    let nombre = document.getElementById('amigo').value;
    if (nombre != ""){
        //console.log (nombre);
        // solo se agrega si el nombre no existe en el arreglo
        if (!arrAmigos.includes(nombre)) {
            arrAmigos.push(nombre);
            muestraListaAmigos();
        }
        else{
            alert("Nombre de amigo ya existe");
        }
        // limpiamos el texto de la caja de amigo y la variable
        limpiaCaja();
        nombre = "";
    }
    else{
        alert ('Por favor, inserte un nombre');
    }
    return;
}

// Muestra el arreglo de amigos en la lista HTML
function muestraListaAmigos(){
    //HTML: Obtener el elemento de la lista
   let lista = document.getElementById('listaAmigos'); 

   // HTML: Limpiar la lista existente, para que no haya duplicados
   lista.innerHTML = "";

   for (var i = 0; i < arrAmigos.length; i++) {
        agregarElementoLi(lista, arrAmigos[i]);
    }
}

// HTML Agrega a una lista ul, un elemento li 
function agregarElementoLi(listaTemp, textTemp){
    // Crear un nuevo elemento li
    let nuevoLi = document.createElement("li");

    // Crear un nodo de texto para el contenido del li
    let contenido = document.createTextNode(textTemp);

    // Agregar el nodo de texto al li
    nuevoLi.appendChild(contenido);

    // Agregar el li a la lista (ul)
    listaTemp.appendChild(nuevoLi);
    return; 
}

function sortearAmigo(){
    // validar si el arreglo de amigos no está vacio
    if (arrAmigos.length == 0){
        alert("No hay amigos que sortear");
    }
    else {
        // sorteamos amigos
        var max = arrAmigos.length-1;
        var min = 0;
        var indiceSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        //coSnsole.log(indiceSorteado);
        //console.log(arrAmigos[indiceSorteado]);

        // Elimino la lista del HTML
        var lista = document.getElementById('listaAmigos');
        eliminarElementosLista(lista);
        
        // Mostrar el nombre del amigo sorteado
        var listaResultado = document.getElementById('resultado');
        // Se inicializa la lista del html del nombre del amigo sorteado
        eliminarElementosLista(listaResultado);
        // Se muestra el nombre del amigo sorteado
        agregarElementoLi(listaResultado, `El amigo secreto sorteado es: ${arrAmigos[indiceSorteado]}`);
    }
    return;
}

// HTML: Borra la presentacion de lista de amigos
function eliminarElementosLista(lista) {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  return;
}

function limpiaCaja(){
  document.getElementById('amigo').value = '';
  return;
}