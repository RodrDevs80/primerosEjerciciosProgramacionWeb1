/**Ejercicio 5: Calcular Promedio
Crea una función que tome un array de números y devuelva el promedio de estos. Muestra el 
resultado en un elemento HTML */

const resultado = document.getElementById("resultado");
const numeros = [98, 71, 41, 89, 44, 46, 11, 13, 40, 58, 60, 81, 57, 79, 97, 16, 22, 56, 72, 42];
//opción 1
const calcularPromedio = (arreglo) => {
    return (arreglo.reduce((total, numero) => total + numero, 0) / arreglo.length).toFixed(2);
}
console.log('Resultado opción 1:');
console.log(calcularPromedio(numeros));

//opción 2
const calcularPromedio2 = (arreglo) => {
    let total = 0;
    arreglo.forEach(numero => {
        total += numero;
    });
    return (total / arreglo.length).toFixed(2);
}
console.log('Resultado opción 2:');
console.log(calcularPromedio2(numeros));

//opción 3
const calcularPromedio3 = (arreglo) => {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[i];
    }
    return (total / arreglo.length).toFixed(2);
}
console.log('Resultado opción 3:');
console.log(calcularPromedio3(numeros));

resultado.innerHTML = `
<div class="container">
<h2>Calcular promedio</h2>
<h2>Arreglo Números:[${numeros}]</h2>
<h3>El promedio del arreglo de numeros es: ${calcularPromedio(numeros)}</h3>
</div>
`