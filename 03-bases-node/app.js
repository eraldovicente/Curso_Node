const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base ] = arg3.split('=');
// console.log( base );

// const base = 3;

crearArchivo( base )
     .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
     .catch( err => console.log(err) );

// fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//      if (err) throw err;

//      console.log(`tabla-${ base }.txt creado`);
// })


