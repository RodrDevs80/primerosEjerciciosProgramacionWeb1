/**Ejercicio 10: 
Contar Vocales: Desarrolla una función que cuente el número de vocales en una cadena de texto. 
Muestra el resultado en un elemento HTML.*/
const resultado = document.getElementById('resultado');
const palabra = document.getElementById('palabra');
const btnContar = document.getElementById('btn-contar');
const btnLimpiar = document.getElementById('btn-limpiar');
//funcion-logica de la app
const contarVocales = (cadena) => {
  let cantidadDeVocales = 0;
  for (let i = 0; i < cadena.length; i++) {
    cadena = cadena?.toLowerCase();
    if (cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u') cantidadDeVocales++;
  }
  return cantidadDeVocales;
}

btnContar.addEventListener('click', () => {
  if (palabra.value === '' || palabra.value <= 1 || !isNaN(palabra.value)) {
    alert('🚨Ingrese una palabra\n1.No números\n2.Longitud minima de la palabra 2 caracteres🚨');
    palabra.value = '';
  } else {
    resultado.innerHTML = `<h2>La cantidad de vocales es: ${contarVocales(palabra.value)}</h2>`;
    palabra.value = '';
    btnLimpiar.style.display = 'inline';
    btnContar.style.display = 'none';
  }

})

btnLimpiar.addEventListener('click', () => {
  resultado.innerHTML = '';
  btnLimpiar.style.display = 'none';
  btnContar.style.display = 'inline';
})