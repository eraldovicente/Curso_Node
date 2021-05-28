require('dotenv').config();

const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

     const busquedas = new Busquedas();
     let opt;

     do {

          opt = await inquirerMenu();
          
          switch( opt ) {

               case 1: 

                    // Mostrar mensaje
                    const lugar = await leerInput('Ciudad: ');
                    await busquedas.ciudad( lugar );

                    // Buscar los lugares

                    // Seleccionar el lugar

                    // Clima

                    // Mostrar resultados
                    console.log('\n Información de la ciudad\n'.green);
                    console.log('Ciudad:', );
                    console.log('Lat:', );
                    console.log('Long:', );
                    console.log('Temperatura:', );
                    console.log('Mínima:', );
                    console.log('Máxima:', );

               break;
          }

          if ( opt !== 0 ) await pausa();

     } while ( opt !== 0 )

}

main();