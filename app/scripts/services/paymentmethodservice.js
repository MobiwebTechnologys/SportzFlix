'use strict';

/**
 * @ngdoc service
 * @name sportzflixApp.paymentmethodservice
 * @description
 * # paymentmethodservice
 * Service in the sportzflixApp.
 */
angular.module('sportzflixApp')
  .service('paymentmethodservice', function ($http, API_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.handleCreditCard = function(token, userapp_id){
      var data = {
        userapp_id: userapp_id,
        token: token,
        payment_method: 'CC'
      }
      return $http.post(API_URL + 'customers/add_payment_method/', data)
    }

    this.handlePayPal = function(nonce, userappId, hint){
      var data = {
        userapp_id: userappId,
        token: nonce,
        payment_method: 'PP',
        payment_hint: hint
      }
      return $http.post(API_URL + 'customers/add_payment_method/', data)

    }


  });
