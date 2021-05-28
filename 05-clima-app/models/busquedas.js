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
     
               const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Ottawa.json?access_token=pk.eyJ1IjoiZXJhbGRvMSIsImEiOiJja3A4b2NiNTYwYWRyMm5teGtsZTI0dGxrIn0.zbIXrALKUR3hX8TrIDArzw&cachebuster=1622228455788&autocomplete=true&limit=8&language=es');
               console.log(resp.data);
     
     
               return []; // retornar los lugares

          } catch (error) {
               
               console.log(error);

          }

     }

}

module.exports = Busquedas;