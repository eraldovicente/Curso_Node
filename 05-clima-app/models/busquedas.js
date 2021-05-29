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
               return resp.data.features.map( lugar => ({
                    id: lugar.id,
                    nombre: lugar.place_name,
                    lng: lugar.center[0],
                    lat: lugar.center[1]
               }));

          } catch (error) {
               
               console.log(error);

          }

     }

     async climaLugar( lat, log ) {

          try {
               // instance axios.create()
               const instance = axios.create({
                    baseURL: `api.openweathermap.org/data/2.5/weather`,
                    params: {
                         
                         'lat': 9.93333,
                         'lon': -84.08333,
                         'appid': process.env.OPENWEATHER_KEY,
                         'units': metric,
                         'lang': es
                    }
               });

               // resp.data
               const resp = await instance.get();
               console.log(resp);

               return {
                    desc: '',
                    min: '',
                    max: '',
                    temp: ''
               }

          } catch (error) {
               console.log(error);
          }

     }

}

module.exports = Busquedas;