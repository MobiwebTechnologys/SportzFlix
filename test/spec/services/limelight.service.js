'use strict';

describe('Service: limelight.service', function () {

  // load the service's module
  beforeEach(module('sportzflixApp'));

  // instantiate service
  var limelight.service;
  beforeEach(inject(function (_limelight.service_) {
    limelight.service = _limelight.service_;
  }));

  it('should do something', function () {
    expect(!!limelight.service).toBe(true);
  });

});
