const empleados = [
     {
          id: 1,
          nombre: 'Eraldo'
     },
     {
          id: 2,
          nombre: 'Bárbara'
     },
     {
          id: 3,
          nombre: 'Gabriel'
     }
];

const salarios = [
     {
          id: 1,
          salario: 1000
     },
     {
          id: 2,
          salario: 1500
     }
];

const getEmpleado = ( id, callback ) => {
     
     return new Promise(( resolve, reject ) => {
          
          const empleado = empleados.find( e => e.id === id )?.nombre;

          ( empleado ) 
               ? resolve( empleado )
               : reject(`No existe empleado con id ${ id }`)
     });
}

const getSalario = () => {

     return new Promise(( resolve, reject ) => {
          
          const salario = salarios.find( s => s.id === id )?.salario;

          ( salario ) 
               ? resolve( salario )
               : reject(`No existe salario con id ${ id }`)
     });
}

const id = 1;

// getEmpleado(id)
//      .then( empleado => console.log( empleado ) )
//      .catch( err => console.log(err) );

// getSalario(id)
//      .then( salario => console.log( salario ) )
//      .catch( err => console.log(err) );


/** Manejar promesas em cadeia se ver pior que manejar callbacks */

getEmpleado(id)
     .then( empleado => {

          getSalario( id )
               .then( salario => {

                    console.log('El empleado: ', empleado, 'tiene un salario de: ', salario );
               })
               .catch( err => console.log(err))
     })
     .catch( err => console.log(err))