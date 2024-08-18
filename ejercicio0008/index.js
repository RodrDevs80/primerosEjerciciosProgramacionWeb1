/**Eliminar Duplicados: Crea una función que tome un array de números y elimine los elementos
duplicados. Muestra el array resultante en un elemento HTML. */
const resultado = document.getElementById('resultado');

const arregloDeNumeros = [2, 4, 78, 9, 2, 7, 45, 2, 9, 2];
//forma 1
const eliminarRepetidos = (arreglo) => {
    const numerosUnicos = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (numerosUnicos.indexOf(arreglo[i]) === -1) {
            numerosUnicos.push(arreglo[i]);
        }
    }
    return numerosUnicos;
}


//console.log(eliminarRepetidos(arregloDeNumeros));

//forma 2 :el set no admite duplicados
const eliminarRepetidosConSet = (arreglo) => {
    const numerosU = new Set(arreglo);//por que si lo retorno como set no se renderiza????
    return [...numerosU]
}

console.log(arregloDeNumeros);
console.log(eliminarRepetidosConSet(arregloDeNumeros));

resultado.innerHTML =
    `<h2>Arreglo de números con repetidos:</h2>
[${arregloDeNumeros}]
<hr>
<h2> Mismo Arreglo de números sin repetidos:</h2>
[${eliminarRepetidos(arregloDeNumeros)}]
<h2> Mismo Arreglo de números sin repetidos con SET:</h2>
[${eliminarRepetidosConSet(arregloDeNumeros)}]
`

