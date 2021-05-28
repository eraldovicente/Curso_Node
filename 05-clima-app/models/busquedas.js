const axios = require('axios');

class Busquedas {

     historial = ['Tegucigalpa', 'Madrid', 'San josé'];

     constructor() {
          // TODO DB si existe
     }

     async ciudad( lugar = '' ) {

          try {
               
               // petición http
               // console.log('ciudad', lugar);
     
               const resp = await axios.get('https://reqres.in/api/users?page=2');
               console.log(resp.data);
     
     
               return []; // retornar los lugares

          } catch (error) {
               
               console.log(error);

          }

     }

}

module.exports = Busquedas;