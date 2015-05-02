'use strict';

/**
 * @ngdoc function
 * @name globalxDemoappApp.controller:AnimalsCtrl
 * @description
 * # AnimalsCtrl
 * Controller of the globalxDemoappApp
 */
angular.module('globalxDemoappApp')
  .controller('AnimalsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.animals = [
        {name: 'badger', eatsHumans: true},
        {name: 'goat', eatsHumans: false}
    ];

    $scope.evilAnimals = Enumerable.from($scope.animals).where('$.eatsHumans == true').toArray();
  });
