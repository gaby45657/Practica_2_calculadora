/*
PRACTICA 2 - AUXILIATURA TECNOLOGIAS EMERGENTES I
ESTUDIANTE: GABRIELA ALEJANDRA CHOQUE MAMANI
PARALELO: 6C
CI: 8292331 
*/


/* 
  Se obtiene una referencia al elemento <input> con id="pantalla"
  donde se mostrarán los números y resultados.
*/
let pantalla = document.getElementById("pantalla");

/* 
  Función: agregar(valor)
  -----------------------
  - Agrega el valor del botón presionado (número u operación) 
    al contenido actual de la pantalla.

*/
function agregar(valor) {
  pantalla.value += valor;
}

/* 
  Función: limpiar()
  ------------------
  - Limpia completamente la pantalla (deja el input vacío).
  - Se ejecuta cuando el usuario presiona el botón  C 
*/
function limpiar() {
  pantalla.value = "";
}

/* 
  Función: borrar()
  -----------------
  - Elimina el último carácter que aparece en la pantalla.

*/
function borrar() {
  pantalla.value = pantalla.value.slice(0, -1);
}

/* 
  Función: calcular()
  -------------------
  - Evalúa la expresión matemática escrita en la pantalla (usando eval()).

*/
function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (e) {
    pantalla.value = "Error";
  }
}
