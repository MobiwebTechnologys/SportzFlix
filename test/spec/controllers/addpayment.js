'use strict';

describe('Controller: AddpaymentCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var AddpaymentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddpaymentCtrl = $controller('AddpaymentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddpaymentCtrl.awesomeThings.length).toBe(3);
  });
});
