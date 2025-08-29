//EJERCICIO 1
const boton = document.getElementById("toggleColumnas");
const contenido = document.querySelector(".contenido-libro");


boton.addEventListener("click", () => {
    contenido.classList.toggle("filas");

    if (contenido.classList.contains("filas")) {
        boton.textContent = "Mostrar en columnas";
    } else {
        boton.textContent = "Mostrar en filas";
    }
});


// EJERCICIO 2
const botonTitulo = document.getElementById("cambiarTitulo");
const titulo = document.getElementById("titulo");

botonTitulo.addEventListener("click", () => {
    const nuevoTitulo = prompt("Escribe el nuevo título de la página:");
    if (nuevoTitulo) {
        titulo.textContent = nuevoTitulo;
    }
});



//EJERCICIO 3
const botonColor = document.getElementById("CambioColor");
const descripcion = document.getElementById("descripcion");

const parrafosp = [];
let siguiente = descripcion.nextElementSibling;
while (siguiente && siguiente.tagName === "P") {
    parrafosp.push(siguiente);
    siguiente = siguiente.nextElementSibling;
}
let activado = false;

botonColor.addEventListener("click", () => {
    activado = !activado;
    descripcion.style.color = activado ? "#ff0000" : "";
    parrafosp.forEach(p => p.style.fontFamily = activado ? "'Lobster', cursive" : "");
});



//EJERCICIO 4
const botonImagen = document.getElementById("Imagen");
const contenedorImagen = document.getElementById("contenedorImagen");

botonImagen.addEventListener("click", () => {
    const urlImagen = prompt("Ingresa la URL de la imagen");
    const img = document.createElement("img");
    img.src = urlImagen ? urlImagen : "https://via.placeholder.com/250x150.png?text=Libro";
    img.alt = "Imagen del libro";

    contenedorImagen.innerHTML = "";
    contenedorImagen.appendChild(img);
});
