/**Ejercicio 9:
Capitalizar Palabras: Escribe una función que reciba una cadena de texto y devuelva la misma 
cadena con la primera letra de cada palabra en mayúscula. Muestra el resultado en un elemento 
HTML. */
const resultado = document.getElementById('resultado');
const frase = document.getElementById("frase");
const btnCapitalizar = document.getElementById("btn-capitalizar");

//funciones
const generarFraseCapital = (cadena) => {
  let fraseCapital = [];
  const palabrasFrase = cadena.split(' ');
  for (let i = 0; i < palabrasFrase.length; i++) {
    let inicial = palabrasFrase[i].slice(0, 1);
    let restoPalabra = palabrasFrase[i].slice(1, Number(palabrasFrase[i].length));
    fraseCapital.push(inicial.toUpperCase().concat(restoPalabra));
  }
  return fraseCapital.join(" ");
}
//validar
const esValido = (cadena) => {
  if (cadena === "" || !isNaN(cadena) || cadena.length < 3) return false;
  else return true;
}

btnCapitalizar.addEventListener('click', (e) => {
  if (esValido(frase.value)) {
    resultado.innerHTML = `<h2>Frase sin modificar:</h2>
  <hr>
  <h3><strong>${frase.value}</strong></h3>
  <hr>
  <h2>Frase Capital:</h2>
  <h3><strong>${generarFraseCapital(frase.value)}</strong></h3>
  <hr>
  <button id="btn-reset">Limpiar</button>
  `;

  }
  else {
    resultado.innerHTML = `<h2>No ingreso una cadena valida 🚨:</h2>
    <hr>
    <h3><strong>INGRESO => ${frase.value}</strong></h3>
    <h3>Vuelva a intentar</h3>
    <button id="btn-reset">Limpiar</button>
    `;
  }

  const btnReset = document.getElementById("btn-reset");
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      resultado.innerHTML = "";
      frase.value = "";
    })
  }
})




