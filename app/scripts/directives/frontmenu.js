'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:frontmenu
 * @description
 * # frontmenu
 */


angular.module('sportzflixApp')

   .controller('FrontMenuCtrl',
function ($scope,  auth, store, $location) {


  $scope.auth = auth;


  $scope.signin = auth.signin;
  $scope.signup = auth.signup;

})


  .directive('frontmenu', function () {
    return {
      templateUrl: 'views/frontmenu.html',
      restrict: 'EA',
      controller:'FrontMenuCtrl'

    }
  });
