'use strict';

describe('Service: profilemanagement', function () {

  // load the service's module
  beforeEach(module('sportzflixApp'));

  // instantiate service
  var profilemanagement;
  beforeEach(inject(function (_profilemanagement_) {
    profilemanagement = _profilemanagement_;
  }));

  it('should do something', function () {
    expect(!!profilemanagement).toBe(true);
  });

});
