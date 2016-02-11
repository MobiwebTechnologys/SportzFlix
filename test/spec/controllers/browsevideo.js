'use strict';

describe('Controller: BrowsevideoCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var BrowsevideoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrowsevideoCtrl = $controller('BrowsevideoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BrowsevideoCtrl.awesomeThings.length).toBe(3);
  });
});
