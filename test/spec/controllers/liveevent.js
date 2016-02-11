'use strict';

describe('Controller: LiveeventCtrl', function () {

  // load the controller's module
  beforeEach(module('sportzflixApp'));

  var LiveeventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LiveeventCtrl = $controller('LiveeventCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LiveeventCtrl.awesomeThings.length).toBe(3);
  });
});
