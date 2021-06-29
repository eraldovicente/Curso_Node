const { comprobarJWT } = require('../helpers');


const socketController = async( socket ) => {

     // console.log('Cliente conectado', socket.id );
     const usuario = await comprobarJWT(socket.handshake.headers['x-token']); 
     if ( !usuario ) {
          return socket.disconnect();
     }

     console.log('Se conecto', usuario.nombre);
}

module.exports = {
     socketController
}