'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:CancelmembershipCtrl
 * @description
 * # CancelmembershipCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('CancelmembershipCtrl', function ($scope, profileUpdateService, auth) {
      $scope.cancellation = false
      $scope.cancelMembership = function(){
        $scope.cancel = profileUpdateService.cancelMembership(auth.profile.user_id).success(function(){
          $scope.cancellation = true;

        }).error(function(){

        })
      }
  });
