'use strict';

// Declare app level module which depends on filters, and services
angular.module('openWeatherApp', [
  'ngRoute',
  'openWeatherApp.filters',
  'openWeatherApp.services',
  'openWeatherApp.directives',
  'openWeatherApp.controllers',
    'ngMaterial', 'ngMessages', 'material.svgAssetsCache',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'partials/forecast.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.when('/storm', {templateUrl: 'partials/rain.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
