'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:ChangepasswordCtrl
 * @description
 * # ChangepasswordCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('ChangepasswordCtrl', function ($scope, auth, profileUpdateService) {
    $scope.form = {};
    $scope.badPassword = false;
    $scope.fields = [
      {
        type: 'input',
        key: 'current_password',
        templateOptions:{
          type: 'password',
          label: 'current password',
          required: true
        }
      },
      {
        type: 'input',
        key: 'new_password',
        templateOptions: {
          type: 'password',
          label: 'new password',
          required: true
        }
      }

    ]

    $scope.changePassword = function(){
      console.log()
     profileUpdateService.changePassword($scope.form, auth.profile.user_id, auth.idToken).success(function(d){
       $scope.$close()
     }).error(function(){
       console.log('you fucked up your password')
       $scope.badPassword = true;
     })

    }



  });
