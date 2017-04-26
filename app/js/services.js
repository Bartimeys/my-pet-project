'use strict';

/* Services */

angular.module('openWeatherApp.services', ['ngResource'])

  //
  // Simple value service (kept from angular-1.5.5-seed dist)
  //
  .value('version', '0.1.6')


  //
  // Define a standard list of "example locations"
  //
  .value('exampleLocations',['Radovichi','Kiev','Volovets','Sipoo','Chernivtsi','New York','Lviv','Zaporizhia'])
  //
  //
  //
  .value('stormLocations',['Kiev','Radovichi','Volovets','London','Minsk','Lutsk','Los-Angeles'])

  .factory('openWeatherMap', function($resource) {

    // API key is currently unused (work either with or without key)
    var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

    return $resource(apiBaseUrl + ':path/:subPath?q=:location',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }
      }
    )
  });
