const fs = require('fs');

console.clear();

const base = 3;
let salida = '';

console.log('=======================');
console.log(`     Tabla del: ${ base }`);
console.log('=======================');

for (let i = 0; i <= 10; i++) {

     salida += `${ base } X ${ i } = ${ base * i }\n`;
}

console.log(salida);

fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
     if (err) throw err;

     console.log(`tabla-${ base }.txt creado`);
})