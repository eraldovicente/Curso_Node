

const http = require('http');

http.createServer( ( req, res ) => {

     // res.writeHead(200, { 'Content-Type': 'application/json' });
     res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
     res.writeHead(200, { 'Content-Type': 'application/csv' });

     res.write( 'id, nombre\n' );
     res.write( '1, Eraldo\n' );
     res.write( '2, Edna\n' );
     res.write( '3, Eraldo\n' );
     res.write( '4, Eduardo\n' );
     res.write( '5, Gabriel\n' );
     res.write( '6, Bábarba\n' );
     res.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080 );