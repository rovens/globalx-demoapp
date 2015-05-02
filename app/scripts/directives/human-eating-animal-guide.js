'use strict';

/**
 * @ngdoc directive
 * @name globalxDemoappApp.directive:humanEatingAnimalGuide
 * @description
 * # humanEatingAnimalGuide
 */
angular.module('globalxDemoappApp')
  .directive('humanEatingAnimalGuide', function () {
    return {
      templateUrl: 'views/humanEatingAnimalGuide.html',
      scope: {animals: '='},
      restrict: 'E'

    };
  });
