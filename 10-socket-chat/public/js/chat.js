const url = ( window.location.hostname.includes('localhost') )
                         ? 'http://localhost:8080/api/auth/'
                         : 'https://restserver-curso-node-fher.herokuapp.com/api/auth/';

let usuario = null;
let socket  = null;

// Referencias HTML
const txtUid     = document.querySelector('#ulUsuarios');
const txtMensaje = document.querySelector('#ulUsuarios');
const ulUsuarios = document.querySelector('#ulUsuarios');
const ulMensajes = document.querySelector('#ulUsuarios');
const btnSalir   = document.querySelector('#ulUsuarios');


// Validar el token del localstorage
const validarJWT = async() => {

     const token = localStorage.getItem('token') || '';

     if ( token.length <= 10 ) {
          window.length = 'index.html';
          throw new Error('No hay token en el servidor');
     }

     const resp = await fetch( url, {
          headers: { 'x-token': token }
     });

     const { usuario: userDB, token: tokenDB } = await resp.json();
     localStorage.setItem('token', tokenDB );
     usuario = userDB;
     document.title = usuario.nombre;

     await conectarSocket();
}

const conectarSocket = async() => {

     socket = io({
          'extraHeaders': {
               'x-token': localStorage.getItem('token')
          }
     });

     socket.on('connect', () => {
          console.log('Sockets online');
     });

     socket.on('disconnect', () => {
          console.log('Sockets offline');
     });

     socket.on('recibir-mensajes', () => {
          // TODO:
     });

     socket.on('usuarios-activos', (payload) => {
          console.log(payload);
     });

     socket.on('mensaje-privado', () => {
          // TODO:
     });

}

const main = async() => {

     // validar JWT
     await validarJWT();
}

main();

// const socket = io();