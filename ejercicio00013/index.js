/**Ejercicio 13: 
Validar Dirección de Correo Electrónico: Desarrolla una función que valide si una cadena de texto 
es una dirección de correo electrónico válida. Muestra el resultado en un elemento HTML. */
const resultado = document.getElementById('resultado');
const email = document.getElementById('email');
const btnValidar = document.getElementById('btn-validar');

// const email = 'ssd@ejemplo.com';
// const SinComemail = 'ssd@ejemplo.';
// const noEmail = 'noEsUnCorreo';

//sin expresiones regulares
const validarCorreo = (cadena) => {
  let parte;
  let parte2;
  if (cadena.includes('@')) {
    parte = cadena.split('@');
    const [, dominio] = parte;
    parte2 = dominio.split('.');
    console.log(parte2);
    if (!dominio.includes('.') || parte2[1] === '') {
      return 'ERROR: no es un correo valido [dominio]';
    } else {
      return ['valido', true];
    }
  } else {
    return 'ERROR: no es un correo valido [no tiene @]';
  }
}

const validarCorreoER = (cadena) => {
  const exRegularCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (exRegularCorreo.test(cadena)) return ['valido', true];
  else return 'ERROR: no es correo valida';
}

// console.log('*******Validar son Expresión Regular*****');
// console.log(validarCorreo(SinComemail));
// console.log(validarCorreo(email));
// console.log(validarCorreo(noEmail));
// console.log('*******Validar con Expresión Regular*****');
// console.log(validarCorreoER(SinComemail));
// console.log(validarCorreoER(email));
// console.log(validarCorreoER(noEmail));

btnValidar.addEventListener('click', () => {
  const correo = validarCorreo(email.value);
  if (typeof correo === 'object') {
    resultado.innerHTML = `<h2>El correo es valido!!!</h2>
    <button id="reset">Reset</button>`
  } else {
    resultado.innerHTML = `<h2>${correo}</h2>
    <button id="reset">Reset</button>`
  }
  const reset = document.getElementById('reset');
  if (reset) {
    reset.addEventListener('click', () => {
      resultado.innerHTML = ``;
      email.value = '';
      email.focus();
    })
  }
})