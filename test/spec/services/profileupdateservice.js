'use strict';

describe('Service: profileUpdateService', function () {

  // load the service's module
  beforeEach(module('sportzflixApp'));

  // instantiate service
  var profileUpdateService;
  beforeEach(inject(function (_profileUpdateService_) {
    profileUpdateService = _profileUpdateService_;
  }));

  it('should do something', function () {
    expect(!!profileUpdateService).toBe(true);
  });

});
