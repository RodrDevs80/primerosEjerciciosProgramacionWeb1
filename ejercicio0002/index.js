/**Ejercicio 2: Filtrar Números Pares
Escribe una función que reciba un array de números y devuelva un nuevo array con solo los 
números pares. Muestra el array resultante en un elemento HTML */


const resultado = document.getElementById("resultado");

const arreglo = [2, 4, 78, 9, 2, 7, 45];

//filter
const filtrarPares = (arreglo) => {
    return arreglo.filter((item) => item % 2 === 0);
};
console.log("1° opción");
console.log(filtrarPares(arreglo));
//forEach
const filtrarPares2 = (arreglo) => {
    const pares = [];
    arreglo.forEach((num) => {
        if (num % 2 === 0) {
            pares.push(num);
        }
    });
    return pares;
};
console.log("2° opción");
console.log(filtrarPares2(arreglo));
//for
const filtrarPares3 = (arreglo) => {
    const pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    return pares;
};
console.log("3° opción");
console.log(filtrarPares3(arreglo));

resultado.innerHTML = `<h2>Teniendo en cuenta el siguiente arreglo ${arreglo}</h2>
     <h2><strong>Los números pares del mismos son: ${filtrarPares3(
    arreglo
)}</strong></h2>`;


