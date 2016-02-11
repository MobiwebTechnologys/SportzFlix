'use strict';

describe('Controller: ChangeemailCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var ChangeemailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangeemailCtrl = $controller('ChangeemailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChangeemailCtrl.awesomeThings.length).toBe(3);
  });
});
