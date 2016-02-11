'use strict';

describe('Controller: BillinghistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var BillinghistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BillinghistoryCtrl = $controller('BillinghistoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BillinghistoryCtrl.awesomeThings.length).toBe(3);
  });
});
