'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:SportprefformCtrl
 * @description
 * # SportprefformCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('SportprefformCtrl', function ($scope, $http, auth, profileUpdateService) {
      this.sportPrefData = {};
      this.submit = function(isValid, data) {
    if(!isValid) {
      console.log('non valid form')
      return;
    }

    //submit the data to the server
          console.log('form-data', data, this.sportPrefData)


          this.updateCall = profileUpdateService.updateUserSports(auth.profile.user_id, data.one, data.two, data.three)
          this.updateCall.success(function(){
              $scope.$parent.validUserSports = true;
          })
  }
  });
