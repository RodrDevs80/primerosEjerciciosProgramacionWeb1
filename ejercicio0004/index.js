/** Ejercicio 4: Información de Usuarios
Crea una lista de objetos tipo JSON que representen a varios usuarios (nombre, edad, email). 
Escribe una función que reciba esta lista y devuelva una lista de emails de los usuarios mayores de 
edad. Muestra el resultado en un elemento HTML.
const usuarios = [ { nombre: "Juan", edad: 25, email: "juan@example.com" }, { nombre: "María", 
edad: 17, email: "maria@example.com" }, { nombre: "Pedro", edad: 30, email: 
"pedro@example.com" } ];*/
const resultado = document.getElementById("resultado");
const btnFiltrar = document.getElementById("btn-filtrar");
const btnTodos = document.getElementById("btn-todos");
const btnSalir = document.getElementById("btn-salir");
const EDAD = 18;
//JSON
const usuarios = [
    {
        nombre: "Juan",
        edad: 16,
        email: "juan@example.com",
    },
    {
        nombre: "María",
        edad: 17,
        email: "maria@example.com",
    },
    {
        nombre: "Pedro",
        edad: 30,
        email: "pedro@example.com",
    },
    {
        nombre: "Ana",
        edad: 9,
        email: "ana@example.com",
    },
    {
        nombre: "Luis",
        edad: 17,
        email: "luis@example.com",
    },
    {
        nombre: "Sandra",
        edad: 17,
        email: "sandra@example.com",
    },
    {
        nombre: "Carlos",
        edad: 10,
        email: "carlos@example.com",
    },
    {
        nombre: "Isabel",
        edad: 40,
        email: "isabel@example.com",
    },
    {
        nombre: "David",
        edad: 16,
        email: "david@example.com",
    },
    {
        nombre: "Laura",
        edad: 32,
        email: "laura@example.com",
    },
    {
        nombre: "Alejandro",
        edad: 12,
        email: "alejandro@example.com",
    },
    {
        nombre: "Cristina",
        edad: 18,
        email: "cristina@example.com",
    },
    {
        nombre: "Francisco",
        edad: 11,
        email: "francisco@example.com",
    },
    {
        nombre: "Marta",
        edad: 15,
        email: "marta@example.com",
    },
];

const mostrarTodos = () => {
    let contador = 0;
    usuarios.forEach((usuario) => {
        return (resultado.innerHTML += `
     <table class="table" id="tabla-resultados">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">${contador++}</th>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.edad}</td>
            </tr>
        </tbody>
    </table>
    `);
    });
};

const filtrarMayoresDeEdad = () => {
    let contador = 0;
    const usuariosFiltrados = usuarios.filter(usuario => usuario.edad >= EDAD);
    usuariosFiltrados.forEach((usuario) => {
        return (resultado.innerHTML += `
     <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Edad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">${contador++}</th>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.edad}</td>
            </tr>
        </tbody>
    </table>
    `);
    });
}

const salir = () => {
    resultado.innerHTML = `<img src="./img/saludo.svg" alt="" width="25%" class="mx-auto d-block">`;
    btnSalir.setAttribute('disabled', 'true');
}

btnFiltrar.addEventListener('click', () => {
    resultado.innerHTML = '';
    filtrarMayoresDeEdad();
    btnSalir.removeAttribute("disabled");
})

btnTodos.addEventListener('click', () => {
    resultado.innerHTML = '';
    mostrarTodos();
    btnSalir.removeAttribute("disabled");
})

btnSalir.addEventListener('click', () => {
    salir();
})