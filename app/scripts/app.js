'use strict';

/**
 * @ngdoc overview
 * @name globalxDemoappApp
 * @description
 * # globalxDemoappApp
 *
 * Main module of the application.
 */
angular
  .module('globalxDemoappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/animals', {
        templateUrl: 'views/animals.html',
        controller: 'AnimalsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
