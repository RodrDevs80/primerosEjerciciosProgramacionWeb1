/**Ejercicio 3: Contar Ocurrencias
Crea una función que tome un array de strings y un string de búsqueda, y devuelva el número de 
veces que el string de búsqueda aparece en el array. Muestra el resultado en un elemento HTML. */

const resultado = document.getElementById("resultado");

const arregloDeString = ['casa', 'dia', 'sueño', 'vida', 'cancion', 'historia', 'clima', 'historia', 'palabra'];
const palabraBuscada = 'historia';

const contarOcurrencias = (arreglo, palabra) => {
    let contador = 0;
    arreglo.forEach(p => {
        if (p === palabra) {
            contador++;
        }
    });
    return contador;
}

resultado.innerHTML = `<h2>Teniendo en cuenta el siguiente arreglo:[${arregloDeString}]</h2>
     <h3><strong>La palabra ${palabraBuscada} aparece : ${contarOcurrencias(arregloDeString, palabraBuscada)} veces</strong></h3>`;