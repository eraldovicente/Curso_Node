const inquirer = require('inquirer');
require('colors');

const preguntas = [
     {
          type: 'list',
          name: 'opcion',
          message: '?Qué desea hacer?',
          choices: [
               {
                    value: '1',
                    name: `${'1.'.brightRed} Crear tarea`
               },
               {
                    value: '2',
                    name: `${'2.'.brightRed} Listar tareas`
               },
               {
                    value: '3',
                    name: `${'3.'.brightRed} Listar tareas completadas`
               },
               {
                    value: '4',
                    name: `${'4.'.brightRed} Listar tareas pendientes`
               },
               {
                    value: '5',
                    name: `${'5.'.brightRed} Completar tarea(s)`
               },
               {
                    value: '6',
                    name: `${'6.'.brightRed} Borrar tarea`
               },
               {
                    value: '0',
                    name: `${'0.'.brightRed} Salir`
               }
          ]
     }
];

const inquirerMenu = async () => {

     console.clear();
     console.log('========================='.brightRed);
     console.log('  Seleccione una opción'.white);
     console.log('=========================\n'.brightRed);

     const { opcion } = await inquirer.prompt(preguntas);

     return opcion;
}

const pausa = async () => {

     const question = [
          {
               type: 'input',
               name: 'enter',
               message: `Pressione ${ 'enter'.green } para continuar`
          }
     ];

     console.log('\n');
     await inquirer.prompt(question);
}

const leerInput = async ( message ) => {

     const question = [
          {
               type: 'input',
               name: 'desc',
               message,
               validate( value ) {
                    if( value.length === 0 ) {
                          return 'Por favor ingrese un valor';
                    }
                    return true;
               }
          }
     ];

     const { desc } = await inquirer.prompt(question);
     return desc;
}

module.exports = {
     inquirerMenu,
     pausa,
     leerInput
}