/**Ejercicio 11: 
Convertir Temperatura: Crea una función que convierta grados Celsius a Fahrenheit y viceversa. 
Muestra el resultado en un elemento HTML */
const temperatura = document.getElementById('temperatura');
const resultado = document.getElementById('resultado');
const tipoOpcionInicial = document.getElementById('tipo-inicial');
const tipoOpcionConvertir = document.getElementById('tipo-a-convertir');
const btnConvertir = document.getElementById('btn-convertir');
const btnReset = document.getElementById('btn-reset');

const convertirTemperatura = (valor, convertir = 'Fahrenheit') => {
    if (convertir == 'Fahrenheit') return `${((valor * 9 / 5) + 32).toFixed(2)} grados Fahrenheit`;
    else if (convertir == 'Celsius') return `${((valor - 32) * 5 / 9).toFixed(2)} grados Celsius`;
}

btnConvertir.addEventListener('click', () => {
    if (tipoOpcionInicial.value === tipoOpcionConvertir.value) {
        resultado.innerHTML = `<h2>La temperatura es ${temperatura.value}° grados ${tipoOpcionInicial.value}</h2>`;
    }
    else {
        if (tipoOpcionInicial.value === 'Fahrenheit' && tipoOpcionConvertir.value === 'Celsius') {
            resultado.innerHTML = `<h2>La temperatura es ${convertirTemperatura(temperatura.value, 'Celsius')}</h2>`;
        } else {
            resultado.innerHTML = `<h2>La temperatura es ${convertirTemperatura(temperatura.value, 'Fahrenheit')}</h2>`;
        }
    }
    temperatura.value = '';
    btnReset.classList.remove('ocultar');
})

btnReset.addEventListener('click', () => {
    resultado.innerHTML = ``;
    btnReset.classList.add('ocultar');
})