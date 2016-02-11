'use strict';

describe('Directive: ngMorphingModal', function () {

  // load the directive's module
  beforeEach(module('sportzflixApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-morphing-modal></ng-morphing-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngMorphingModal directive');
  }));
});
