const express = require('express');
const cors = require('cors');
const path = require('path');
const usersData = require('./data/users.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta home
app.get('/', (req, res) => {
  res.send('Servidor Express corriendo. Accede al usuario aleatorio en /api/user');
});

// Endpoint principal para obtener un usuario aleatorio
app.get('/api/user', (req, res) => {
  const usersList = Array.isArray(usersData) ? usersData : usersData.results || [];
  const randomIndex = Math.floor(Math.random() * usersList.length);
  const randomUser = usersList[randomIndex];

  console.log(
    `GET /api/user - Usuario aleatorio enviado: ${randomUser.name?.first} ${randomUser.name?.last}`,
  );

  res.json({
    results: [randomUser],
    info: {
      seed: usersData.info?.seed || 'random',
      results: 1,
      page: 1,
      version: '1.4',
    },
  });
});

// Endpoint alternativo /api/users
app.get('/api/users', (req, res) => {
  const usersList = Array.isArray(usersData) ? usersData : usersData.results || [];
  const randomIndex = Math.floor(Math.random() * usersList.length);
  const randomUser = usersList[randomIndex];

  res.json(randomUser);
});

// Servir la carpeta data como estática
app.use('/data', express.static(path.join(__dirname, 'data')));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Usuario aleatorio en: http://localhost:${PORT}/api/user`);
});
