const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const base = 3;

crearArchivo( base )
     .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
     .catch( err => console.log(err) );

// fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//      if (err) throw err;

//      console.log(`tabla-${ base }.txt creado`);
// })


