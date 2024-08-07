/**Ejercicio 6: Verificar Palíndromo
Crea una función que verifique si una palabra es un palíndromo (se lee igual de adelante hacia 
atrás). Muestra el resultado en un elemento HTML. */

const resultado = document.getElementById("resultado");
const palabra = document.getElementById("palabra");

const palindromos = ["Ana", "Otto", "Rotor", "Radar", "Alla"];

//console.log(palindromosCortos[0].toLowerCase());
//console.log(palindromosCortos[0].split('').reverse().join('').toLowerCase());


const verificarPalindromo = (cadena) => {
    if (cadena === '' || cadena.length < 2) return 'Ingrese una palabra ❌';
    if (!isNaN(cadena)) return 'Ingreso un numero,ingrese una palabra ❌';
    if (cadena.toLowerCase() === cadena.split('').reverse().join('').toLowerCase()) return `La palabra ${cadena} es un Palíndromo 😎`;
    else return `La palabra ${cadena} no es un Palíndromo 😔`;
}

console.log(verificarPalindromo(palindromos[2]));
console.log(verificarPalindromo(palindromos[0]));
console.log(verificarPalindromo('oscar'));

palabra.addEventListener('change', (e) => {
    resultado.innerHTML = verificarPalindromo(e.target.value);
})