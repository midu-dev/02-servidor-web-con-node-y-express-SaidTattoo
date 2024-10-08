[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/OQluGpcF)
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/OQluGpcF)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11508197&assignment_repo_type=AssignmentRepo)
# Ejercicios 2 - Node.js

Versión de Node.js requerida: 18.17.0 LTS

**¿Necesitas repasar?**

- Repositorio con código de ejemplo: https://github.com/midudev/curso-node-js
- Vídeo de la segunda clase: https://github.com/midudev/curso-node-js#-videos-con-las-clases

## Ejercicios

Antes de comentarte el ejercicio, ten en cuenta que vamos a necesitar crear una función que devuelva nuestros servidores. Esto es para facilitar el testing de los mismos. Por lo tanto, ambos ejercicios tendrán una función que exportamos llamada `startServer` que **debe devolver el servidor que hemos creado.**

1. Crea un servidor web que:

- Responda en el puerto 1234 o en el puerto que le pasemos como variable de entorno `PORT`.
- Al entrar en la ruta `/` devuelva un HTML con un título que devuelva `<h1>¡Hola mundo!</h1>`. (pista: recuerda usar el charset correcto)
- Al entrar a la ruta `/logo.webp` devuelve la imagen que hay en el directorio `assets/logo.webp`.
- Al entrar a la ruta `/404`, devuelve un HTML con un título que devuelva `<h1>404</h1>` y el código de estado 404.
- Al hacer `POST` a la ruta `/contacto`, se le puede pasar un objeto con `name`, `email` y `message`. Debe responder con un JSON con el objeto que se le ha pasado en el body y el status code `201`.

Importante:
- Todos son métodos `GET` a no ser que se indique lo contrario. Si la ruta no soporta el método, debe devolver un error 405.
- Si la ruta no existe, debe devolver un error 404.

2. Crea el mismo servidor usando Express.js, debe tener las mismas rutas y comportamiento que el servidor anterior.

- Usa los middlewares:
  - `express.json` para poder acceder al body de las peticiones `POST` sin necesidad de hacerlo manualmente.
  - `express.static` para servir la imagen del logo.

Pistas:

- `app.listen` devuelve un servidor HTTP de Node, por lo que puedes usarlo para devolverlo en la función `startServer`.
- `app.all` es un método que llegaría a todos los métodos HTTP de una ruta. Por ejemplo: `app.all('/', callback)` entraría para `GET`, `POST`, `PUT`, `DELETE`, etc. para la ruta `/`.
- Con `req.method`, igual que en el servidor de Node, puedes saber qué método está usando la request.


