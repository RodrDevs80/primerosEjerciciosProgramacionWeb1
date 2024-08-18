/**Ejercicio 14: 
Generador de Contraseñas: Crea una función que genere una contraseña aleatoria de una longitud 
especificada por el usuario, incluyendo letras mayúsculas, minúsculas, números y símbolos. 
Muestra el resultado en un elemento HTML*/
const longitud = document.getElementById('longitud');
const btnGenerarPass = document.getElementById('btn-generar-pass');
const resultado = document.getElementById('resultado');


let esValido;
let pass = '';
//crear password aleatoria
const passWordAleatorio = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz?!@#$^&*%¿¡_-/{}[]0123456789';
    let passWord = '';
    for (let i = 0; i < longitud; i++) {
        let indiceAleatorio = Number((Math.random() * caracteres.length).toFixed());
        passWord += caracteres[indiceAleatorio];
    }
    return passWord;
}

//validando aleatorio
const validarPassW = (pass, arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (pass.includes(arreglo[i])) {
            return true;
        }
    }
    return false;
}

const main = (longitud) => {
    const mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnñopqrstuvwxyz';
    const simbolos = '?!@#$^&*%¿¡_-/{}[]';
    const numeros = '0123456789';
    do {
        pass = passWordAleatorio(longitud);
        //console.log('adentro');
        //console.log(pass);
        esValido = validarPassW(pass, mayusculas) && validarPassW(pass, minusculas) && validarPassW(pass, simbolos) && validarPassW(pass, numeros);
    } while (!esValido);
    return pass;
}


btnGenerarPass.addEventListener('click', () => {
    if (Number(longitud.value) % 1 !== 0) {
        alert('🚨Usted ingreso un numero decimal!!!\nIngrese un numero entero mayor o igual a : 6🚨');
        longitud.value = '';
    } else if (Number(longitud.value) < 6) {
        alert('🚨Usted ingreso un numero menor a 6!!!\nIngrese un numero entero mayor a o igual a : 6🚨');
        longitud.value = '';
    } else {
        const password = main(longitud.value);
        resultado.innerHTML = `<hr>
        <h3>Su contraseña se genero correctamente:</h3>
        <h2>${password}</h2>
        <button id="btn-reset">Generar Nueva Contraseña</button>
        `
        const btnReset = document.getElementById('btn-reset');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                resultado.innerHTML = '';
                longitud.value = '';
                longitud.focus();
            })
        }

    }

})

