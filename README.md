[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/QDxH6XNt)

# Ejercitación: Consumo de APIs – Asincronismo y Renderizado

## 📋 Objetivo

En esta ejercitación vas a practicar el **consumo de APIs desde JavaScript** utilizando `fetch()` (o `async/await`) y la **renderización dinámica de datos en el DOM**.

Partirás de una estructura donde recibirás datos de un usuario aleatorio (desde un servidor Express local o desde una API pública) y tu tarea será procesar la respuesta e insertar en la tarjeta los datos del usuario: foto de perfil, nombre completo y correo electrónico.

---

## 📌 Tabla: issues y qué entrega cierra cada uno

En tu repositorio de corrección tendrás **issues de GitHub** generados automáticamente. Cada bloque de esta guía termina con el **mensaje de commit exacto** que debes usar para cerrar el issue correspondiente al subir a la rama `main`.

| Issue (típico) | Qué debe quedar hecho                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| **#1**         | Vincular `css/styles.css` con `<link>` y `js/index.js` con `<script>` en `index.html`.                           |
| **#2**         | Ejercicio 1: realizar la petición a la API de usuarios usando `fetch()` o `async/await`.                         |
| **#3**         | Ejercicio 1 (cont.): renderizar la foto, el nombre completo y el email dentro del `div.tarjeta`.                 |
| **#4**         | Ejercicio 2 (extra): descomentar el botón `#random` e implementar el evento clic para recargar un nuevo usuario. |
| **#5**         | Revisión docente: resultado visual correcto y comportamiento dinámico.                                           |

---

## 🚀 Guía por issue (orden sugerido de trabajo)

Sigue este orden: resuelve cada parte, haz **un commit** con el mensaje indicado (título + cuerpo tal cual) y sube a `main`. Así cerrarás el issue automáticamente si usas `Closes #n` como en los ejemplos.

### Vincular CSS y JS al HTML (issue **#1**)

Antes de escribir JavaScript, necesitas **vincular la hoja de estilos y el script** al archivo `index.html`:

1. **CSS**: Dentro de la etiqueta `<head>`, agrega un `<link>` que vincule el archivo `css/styles.css`.
2. **JavaScript**: Antes del cierre de `</body>`, agrega un `<script>` que vincule el archivo `js/index.js`.

> 💡 **Recordá**: el script debe ir al final del `<body>` (o usar `type="module"`) para que el DOM esté disponible.

**Commit exacto para cerrar el issue:**

```text
feat(html): vincular css y script js al html

Closes #1
```

### Realizar la petición a la API con fetch (issue **#2**)

Debes realizar una petición HTTP a la API de usuarios para obtener los datos. Podés usar el servidor Express local incluido en el proyecto (`http://localhost:3000/api/user`).

**Tu tarea:** En `js/index.js`, realiza la llamada con `fetch()`, convierte la respuesta a JSON con `response.json()` e invoca la función `renderizarDatosUsuario(datos)`.

> 🔍 **Pista**: Podés usar `.then(response => response.json())` o una función `async/await`.

**Commit exacto para cerrar el issue:**

```text
feat(js): consumir api de usuarios con fetch

Closes #2
```

### Renderizar los datos del usuario en la tarjeta (issue **#3**)

Una vez obtenidos los datos, debes mostrarlos en la pantalla.

**Tu tarea:** Completa la función `renderizarDatosUsuario(datos)` para seleccionar el contenedor `div.tarjeta` e insertar:

- La foto del usuario (`picture.large` o `picture.medium`).
- El nombre completo (`title`, `first`, `last`).
- El correo electrónico (`email`).

> 🔍 **Pista**: Recordá que la API devuelve los datos dentro de un objeto con una propiedad `results` (un arreglo). Por ejemplo: `datos.results[0]`.

**Commit exacto para cerrar el issue:**

```text
feat(js): renderizar foto nombre e email en el dom

Closes #3
```

### Implementar botón Pedir random (issue **#4**)

En `index.html`, el botón para solicitar un nuevo usuario está comentado.

**Tu tarea:**

1. Descomenta el bloque `<div class="btnContainer">` con el botón `<button id="random">Pedir random</button>`.
2. Desarrolla la función `cargarUsuario()` en `js/index.js` (o escucha el evento `click` del botón) para que al presionar el botón se realice una nueva petición a la API y se actualice la tarjeta sin recargar la página.

**Commit exacto para cerrar el issue:**

```text
feat(js): agregar evento al boton random para actualizar usuario

Closes #4
```

### Revisión docente (issue **#5**)

Este issue comprueba criterios visuales y de fluidez que los tests automáticos no cubren. Cerralo cuando la entrega esté lista para la corrección humana final.

**Commit exacto para cerrar el issue:**

```text
chore: entrega lista para revision docente

Closes #5
```

---

## 📚 Conceptos y métodos que vas a necesitar

| Método / Concepto                  | Descripción                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------- |
| `fetch(url)`                       | Realiza una petición asíncrona a la URL especificada y retorna una Promesa. |
| `response.json()`                  | Convierte el cuerpo de la respuesta HTTP en un objeto JavaScript.           |
| `document.querySelector(selector)` | Selecciona el primer elemento del DOM que coincide con el selector CSS.     |
| `elemento.innerHTML`               | Modifica o reemplaza la estructura HTML interna de un elemento.             |
| `addEventListener('click', fn)`    | Escucha el evento de clic en un elemento interactivo.                       |

---

## ⚠️ Requisitos Obligatorios para la Aprobación

Para que tu ejercicio sea considerado completo y pueda ser aprobado, **DEBES** cumplir con los siguientes requisitos:

1. ✅ **Vincular archivos**: `css/styles.css` enlazado con `<link>` y `js/index.js` enlazado con `<script>`.
2. ✅ **Petición a la API**: Realizar correctamente el llamado con `fetch` o `async/await`.
3. ✅ **Renderizado**: Insertar foto de perfil, nombre completo y correo electrónico dentro de `.tarjeta`.
4. ✅ **Botón interactivo**: Al hacer clic en "Pedir random", se deben cargar y mostrar datos de un nuevo usuario.
5. ✅ **Código limpio**: Manejar las promesas o estructuras `async/await` de forma ordenada.

---

## 🧪 ¿Cómo ejecuto y pruebo el proyecto?

### 1. Iniciar el Servidor API Local

Para usar la API local incluida en el proyecto, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm start
```

El servidor Express estará escuchando en `http://localhost:3000/api/user`.

### 2. Probar en el Navegador

Abre `index.html` en tu navegador (idealmente con la extensión **Live Server** en VS Code).

---

## 🛠️ Herramientas de editor (ESLint / Prettier / VS Code)

Este proyecto incluye configuración de calidad de código:

- **ESLint** (Airbnb base): valida tu JavaScript.
- **Stylelint**: valida tu CSS.
- **Prettier**: formatea automáticamente tu código al guardar.

### Scripts disponibles

```bash
npm install          # Instalar dependencias (solo la primera vez)
npm start            # Iniciar el servidor Express local
npm run lint         # Revisar JavaScript y CSS
npm run lint:fix     # Corregir errores automáticamente
npm run format       # Formatear todo el código
npm run format:check # Verificar el formato sin cambiar archivos
```

---

## 📚 Recursos Adicionales

### MDN Web Docs

- [Fetch API - MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [Promesas en JS - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [Async / Await - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

### LenguajeJS.com

- [Fetch en JS - LenguajeJS](https://lenguajejs.com/javascript/async/fetch/)

---

## 💡 Consejos

1. **Inicia el servidor local**: Recuerda ejecutar `npm start` antes de probar tus peticiones a `http://localhost:3000/api/user`.
2. **Usa la Consola de DevTools**: Imprime con `console.log(datos)` la respuesta de la API para entender su estructura de propiedades antes de renderizarla.
3. **Un commit por issue**: Sigue el orden de la guía y haz un commit por cada issue para mantener una historia limpia y cerrar las tareas automáticas en GitHub Classroom.

---

**¡Éxito con tu ejercicio!** 🚀
