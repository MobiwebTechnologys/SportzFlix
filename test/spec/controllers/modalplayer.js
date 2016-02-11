'use strict';

describe('Controller: ModalplayerCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var ModalplayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalplayerCtrl = $controller('ModalplayerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModalplayerCtrl.awesomeThings.length).toBe(3);
  });
});
