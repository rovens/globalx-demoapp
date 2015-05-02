'use strict';

describe('Controller: AnimalsCtrl', function () {

  // load the controller's module
  beforeEach(module('globalxDemoappApp'));

  var AnimalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimalsCtrl = $controller('AnimalsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should contain a set of animals', function (){

      expect(scope.animals).toContain({name: 'badger', eatsHumans: true});
      expect(scope.animals).toContain({name: 'goat'});
  });

  it('should contain a set of animals that eat humans', function(){
      expect(scope.evilAnimals).toContain({name: 'badger', eatsHumans: true});

  });
});
