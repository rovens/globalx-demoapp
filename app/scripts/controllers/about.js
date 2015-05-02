'use strict';

/**
 * @ngdoc function
 * @name globalxDemoappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the globalxDemoappApp
 */
angular.module('globalxDemoappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
