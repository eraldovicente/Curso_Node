
require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

     console.log('Hola Mundo');

     let opt = '';

     do {
          
          // opt = await inquirerMenu();
          // console.log({ opt });

          const tareas = new Tareas();
          const tarea = new Tarea('Comprar comida');

          tareas._listado[tarea.id] = tarea;

          console.log(tareas);

          await pausa();
          
          // if ( opt !== '0' ) await pausa();

     } while( opt !== '0' );
}

main();