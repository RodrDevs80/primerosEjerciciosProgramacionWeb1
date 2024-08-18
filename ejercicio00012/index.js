/**Ejercicio 12: 
Buscar el Elemento más Frecuente: Escribe una función que encuentre el elemento que más se 
repite en un array. Muestra el resultado en un elemento HTML */
const numeros = [1, 2, 3, 4, 5, 6, 7, 2, 2, 2, 3, 3, 3, 1, 4, 4, 5, 5, 5];
const numeros2 = [22, 56, 9, 0, 32, 22, 44, 78, 2, 9, 9, 8, 14];
const letrasConRepeticion = ['a', 'b', 'c', 'a', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a'];
const resultado = document.getElementById('resultado');
const inputElemento = document.getElementById('elemento');
const arregloOriginal = document.getElementById('arreglo-original');
const btnBuscarRepetidos = document.getElementById('btn-buscar-repetidos');
const original = [];

const contarRepetidos = (arreglo) => {
  const unicos = [...new Set(arreglo)];
  const arregloRep = [];
  let mayor = {
    elemento: null,
    repeticiones: -1
  }
  //crea un arreglo con objetos que tienen el numero y la cantidad de veces que se repiten 
  for (let i = 0; i < unicos.length; i++) {
    let contador = 0;
    for (let j = 0; j < arreglo.length; j++) {
      if (unicos[i] === arreglo[j]) {
        contador++;
      }
    }
    arregloRep.push({ elemento: unicos[i], repeticiones: contador });
  }
  //determina el mayor->por pruebas se que si numeros se repiten igual numero de veces y son el mayor toma el 1°
  arregloRep.forEach((n) => {
    if (n.repeticiones > mayor.repeticiones) {
      mayor.elemento = n.elemento;
      mayor.repeticiones = n.repeticiones;
    }
  })
  return mayor;
}


console.table(contarRepetidos(numeros));
console.log("*****************************************");
console.table(contarRepetidos(numeros2));
console.log("*****************************************");
console.table(contarRepetidos(letrasConRepeticion));

inputElemento.addEventListener('change', (e) => {
  original.push(e.target.value);
  arregloOriginal.innerHTML = `[${original}]`;
  inputElemento.value = ''
})

btnBuscarRepetidos.addEventListener('click', () => {
  const { elemento, repeticiones } = contarRepetidos(original);
  if (elemento === null) {
    alert('no se ingreso ningún valor 🚨🚨')
  } else {
    if (repeticiones === 1) {
      resultado.innerHTML = `<h2>No hay Elementos Repetidos!😎</h2>
      <button id="btn-reset">Limpiar</button>
      `;
    } else {
      resultado.innerHTML = `<h2>El elemento que se repite es: ${elemento}</h2>
      <h2>Se repite: ${repeticiones} veces</h2> 
      <button id="btn-reset">Limpiar</button>
      `;
    }
    const btnLimpiar = document.getElementById('btn-reset')
    if (btnLimpiar) {
      btnLimpiar.addEventListener('click', () => {
        resultado.innerHTML = '';
        arregloOriginal.innerHTML = '';
      })
    }
  }
})

