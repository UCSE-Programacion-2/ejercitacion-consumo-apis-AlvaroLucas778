const API_URL = 'http://localhost:3000/api/user';

// 1. Movemos renderizarDatosUsuario arriba para que ESLint la lea antes de que se use
function renderizarDatosUsuario(datos) {
  const usuario = datos.results[0];
  const tarjeta = document.querySelector('.tarjeta');

  tarjeta.innerHTML = `
    <img src="${usuario.picture.large}" alt="Foto de perfil de ${usuario.name.first}">
    <h2>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h2>
    <p>${usuario.email}</p>
  `;
}

// 2. Declaramos obtenerUsuario (ahora ya conoce a renderizarDatosUsuario)
async function obtenerUsuario() {
  try {
    const response = await fetch(API_URL);
    const datos = await response.json();
    renderizarDatosUsuario(datos);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

// 3. Llamamos a la función para cargar el primer usuario al abrir la página.
// Esto soluciona el warning de "nunca se usó".
obtenerUsuario();

// 4. Desactivamos la regla solo para la siguiente línea, ya que esta función se usa en el HTML
// eslint-disable-next-line no-unused-vars
function cargarUsuario() {
  obtenerUsuario();
}
