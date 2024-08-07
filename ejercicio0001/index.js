/**Ejercicio 1: Operaciones con Vectores
Crea una función que tome un array de números y devuelva la suma de todos sus elementos. Luego, 
muestra el resultado en un elemento HTML. */
const resultado = document.getElementById('resultado');


const arreglo = [2, 4, 78, 9, 2, 7, 45,];
function sumarArreglo(arreglo) {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[i];
    }
    return total;
}

resultado.textContent = sumarArreglo(arreglo);

