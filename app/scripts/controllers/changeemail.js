'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:ChangeemailCtrl
 * @description
 * # ChangeemailCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('ChangeemailCtrl', function ($scope, profileUpdateService,auth, $route) {

    //SET UP FORM AND FORM FIELDS
    $scope.form = {};
    $scope.fields = [
      {
        type: 'input',
        key: 'email',
        templateOptions:{
          type: 'email',
          label: 'New Email',
          required: true
        }
      }
    ]

    //GRAB THE PROFILE
      auth.getProfile().then(function(d){
        $scope.auth = d;
        console.log('emailauth', $scope.auth)
      })

    //SEND CHANGE EMAIL REQUEST
    $scope.changeEmail = function (){
      profileUpdateService.updateField('email', $scope.form.email, $scope.auth.user_id).success(function(){0
        $route.reload();
      })

          auth.getProfile().then(function(){
            $scope.$close($scope.form.email)
          })



    }


  });
