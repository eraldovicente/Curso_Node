const axios = require('axios');

class Busquedas {

     historial = ['Tegucigalpa', 'Madrid', 'San josé'];

     constructor() {
          // TODO DB si existe
     }

     get paramsMapbox() {
          return {

               'access_token': process.env.MAPBOX_KEY,                         
               // 'cachebuster': 1622228455788,
               // 'autocomplete': true,
               'limit': 8,
               'language': 'es'
          }
     }

     async ciudad( lugar = '' ) {

          try {
               
               // petición http
               const instance = axios.create({
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                    params: this.paramsMapbox
               });

               const resp = await instance.get();
               console.log(resp.data);
     
     
               return []; // retornar los lugares

          } catch (error) {
               
               console.log(error);

          }

     }

}

module.exports = Busquedas;