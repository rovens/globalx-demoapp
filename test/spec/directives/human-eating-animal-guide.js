'use strict';

describe('Directive: humanEatingAnimalGuide', function () {

  // load the directive's module
  beforeEach(module('globalxDemoappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<human-eating-animal-guide></human-eating-animal-guide>');
    element = $compile(element)(scope);

  }));
});
