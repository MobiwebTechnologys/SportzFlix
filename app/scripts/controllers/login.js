'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('LoginCtrl', ['$scope', '$http', 'auth', 'store', '$location',
function ($scope, $http, auth, store, $location) {

    auth.signin({}, function (profile, token) {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      $location.path('/');
    }, function () {
      // Error callback
    });

}]);
