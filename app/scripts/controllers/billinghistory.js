'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:BillinghistoryCtrl
 * @description
 * # BillinghistoryCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('BillinghistoryCtrl', function (profileUpdateService, auth, $scope) {
    profileUpdateService.getBillingHistory(auth.profile.user_id).success(function(data){
        $scope.billingHistory = data
      })
  });
