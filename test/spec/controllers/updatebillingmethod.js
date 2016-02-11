'use strict';

describe('Controller: UpdatebillingmethodCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var UpdatebillingmethodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdatebillingmethodCtrl = $controller('UpdatebillingmethodCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UpdatebillingmethodCtrl.awesomeThings.length).toBe(3);
  });
});
