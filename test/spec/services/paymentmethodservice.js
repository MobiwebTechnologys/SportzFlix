'use strict';

describe('Service: paymentmethodservice', function () {

  // load the service's module
  beforeEach(module('sportzflixApp'));

  // instantiate service
  var paymentmethodservice;
  beforeEach(inject(function (_paymentmethodservice_) {
    paymentmethodservice = _paymentmethodservice_;
  }));

  it('should do something', function () {
    expect(!!paymentmethodservice).toBe(true);
  });

});
