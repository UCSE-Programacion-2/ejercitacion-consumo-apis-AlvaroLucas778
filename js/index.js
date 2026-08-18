// Archivo principal de JavaScript para la ejercitación de Consumo de APIs

/* -------------------------------- CONSIGNA 1 -------------------------------- */
// 1. Realizar una petición a la API de usuarios utilizando fetch().
//    URL: http://localhost:3000/api/user  (iniciar antes con npm start)
// 2. Al recibir la respuesta, convertirla a JSON con response.json().
// 3. Invocar renderizarDatosUsuario() pasándole el objeto JSON completo.

// 4. Desarrollar renderizarDatosUsuario(datos):
//    - Obtener el usuario desde datos.results[0].
//    - Seleccionar el contenedor con document.querySelector('.tarjeta').
//    - Insertar dentro de .tarjeta (con innerHTML o createElement) estos elementos:
//
//        <img>   → src = picture.large   (la foto circular del usuario)
//        <h2>    → title + first + last  (nombre completo, ej: "Mr John Doe")
//        <p>     → email                 (correo electrónico)
//
//    Estos elementos ya tienen estilos definidos en css/styles.css
//    (.tarjeta img, .tarjeta h2, .tarjeta p).

const API_URL = 'http://localhost:3000/api/user';

async function obtenerUsuario() {
  try {
    const response = await fetch(API_URL);
    const datos = await response.json();
    renderizarDatosUsuario(datos);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

function renderizarDatosUsuario(datos) {
  // 1. Obtenemos el usuario desde la propiedad results del objeto que devuelve la API
  const usuario = datos.results[0];

  // 2. Seleccionamos el contenedor HTML donde vamos a insertar los datos
  const tarjeta = document.querySelector('.tarjeta');

  // 3. Insertamos el HTML usando template strings (las comillas invertidas ``)
  // Utilizamos las propiedades exactas que nos pide la consigna
  tarjeta.innerHTML = `
    <img src="${usuario.picture.large}" alt="Foto de perfil de ${usuario.name.first}">
    <h2>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h2>
    <p>${usuario.email}</p>
  `;
}

/* -------------------------------- CONSIGNA 2 -------------------------------- */
// 1. Descomentar en index.html el contenedor .btnContainer con el botón #random.
// 2. Desarrollar la función cargarUsuario() o escuchar el evento clic en el botón #random.
// 3. Al hacer clic en el botón, se debe realizar un nuevo pedido a la API
//    y actualizar la tarjeta sin recargar la página.

function cargarUsuario() {
  // Escribe aquí tu código para realizar un nuevo pedido a la API y actualizar la tarjeta
}
