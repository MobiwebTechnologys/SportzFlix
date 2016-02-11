'use strict';

describe('Directive: frontfooter', function () {

  // load the directive's module
  beforeEach(module('sportzflixApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<frontfooter></frontfooter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the frontfooter directive');
  }));
});
