/**Ejercicio 7: Ordenar Números
Escribe una función que reciba un array de números y los ordene de forma ascendente. Muestra el 
resultado en un elemento HTML */

const resultado = document.getElementById("resultado");
const arregloNumeros = [2, 4, 78, 9, 2, 7, 45];
//opción 1
const ordenarNumeros = (arreglo, ascendente = true) => {
    if (ascendente) return arreglo.sort((a, b) => a - b);
    else return arreglo.sort((a, b) => b - a);
}

/* console.log('opción 1');
console.log('ascendente');
console.log(ordenarNumeros(arregloNumeros));
console.log('descendente');
console.log(ordenarNumeros(arregloNumeros, false)); */

//opción 2
const ordenarNumerosAscendente = (arreglo) => {
    for (let i = 0; i < arreglo.length - 1; i++) {
        for (let j = 0; j < arreglo.length - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                // Intercambiar numeros
                const temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }
    return arreglo;
}
const ordenarNumerosDescendente = (arreglo) => {
    for (let i = 0; i < arreglo.length - 1; i++) {
        for (let j = 0; j < arreglo.length - i - 1; j++) {
            if (arreglo[j] < arreglo[j + 1]) {
                // Intercambiar numeros
                const temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }
    return arreglo;
}


/* console.log('opción 2');
console.log('ascendente');
console.log(ordenarNumeros2(arregloNumeros)); */

resultado.innerHTML = `<h2>Arreglo sin ordenar:</h2>
<h3>[${arregloNumeros}]</h3>
<hr>
<h2>opción 1:sort()</h2>
<h2>Arreglo ordenado de forma ascendente:</h2>
<h3>[${ordenarNumeros(arregloNumeros)}]</h3>
<h2>Arreglo ordenado de forma descendente:</h2>
<h3>[${ordenarNumeros(arregloNumeros, false)}]</h3>
<hr>
<h2> opción 2:comparación</h2>
<h2>Arreglo ordenado de forma ascendente:</h2>
<h3>[${ordenarNumerosAscendente(arregloNumeros)}]</h3>
<h2>Arreglo ordenado de forma descendente:</h2>
<h3>[${ordenarNumerosDescendente(arregloNumeros)}]</h3>
`