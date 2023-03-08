/* Prompt */
let name = prompt("Cual es tu nombre?")

/* div*/
let myApp = document.getElementById("myApp");

/* reemplazo la info del html */
myApp.innerHTML = "Hola " + name + "!";