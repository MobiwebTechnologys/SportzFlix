'use strict';

describe('Controller: CancelmembershipCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var CancelmembershipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CancelmembershipCtrl = $controller('CancelmembershipCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CancelmembershipCtrl.awesomeThings.length).toBe(3);
  });
});
