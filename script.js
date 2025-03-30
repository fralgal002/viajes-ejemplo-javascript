import { barcelona, paris, roma, londres } from './ciudades.js'

// obtener objetos del documento
let enlaces = document.querySelectorAll('a')
let tituloSeleccion = document.getElementById('titulo')
let subtituloSeleccion = document.getElementById('subtitulo')
let parrafoSeleccion = document.getElementById('parrafo')
let precioSeleccion = document.getElementById('precio')


// agregar un evento onclick a los enlaces
enlaces.forEach(function (enlace) {

    enlace.addEventListener('click', function () {
        // quitar active class 
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
    
    
    // agregar active al que corresponde
    this.classList.add('active')

    // traer informacion correspondiente
    let contenido = obtenerContenido(this.textContent)

    // mostrar el contenido en el documento
    tituloSeleccion.innerHTML = contenido.titulo
    subtituloSeleccion.innerHTML = contenido.subtitulo
    parrafoSeleccion.innerHTML = contenido.parrafo
    precioSeleccion.innerHTML = contenido.precio
    precioSeleccion.style.border = '2px solid red'
    });
});

// funcion obtener el contenido 
function obtenerContenido(enlace){
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres
    }
    return contenido[enlace]
}