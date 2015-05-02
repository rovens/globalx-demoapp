'use strict';

/**
 * @ngdoc function
 * @name globalxDemoappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the globalxDemoappApp
 */
angular.module('globalxDemoappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
