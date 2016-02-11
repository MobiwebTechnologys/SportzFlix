'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:NamecollectionformCtrl
 * @description
 * # NamecollectionformCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('NamecollectionformCtrl', function ($scope,profileUpdateService, auth) {
      console.log('controller is a go')
        this.prePayData = {}
      this.submit = function(isValid, data) {
    if(!isValid) {
      console.log('non valid form')
      return;
    }

    //submit the data to the server
          console.log('form-data', data, this.prePayData)


          this.updateCall = profileUpdateService.updateNameAndEmail(auth.profile.user_id, data.first_name, data.last_name, data.email)
          this.updateCall.success(function(){
              $scope.$parent.validName = true;
              $scope.$parent.validUserSports = false;
          })
  }
  });
