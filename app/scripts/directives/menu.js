'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:menu
 * @description
 * # menu
 */



angular.module('sportzflixApp')

    .controller('MenuCtrl',
function ($scope,  auth, store, $location) {

  $scope.search = ''
console.log('menuauth', auth)
  $scope.auth = auth;

$scope.profile = auth.profile;
  console.log($scope.profile);


$scope.signout = function () {
  console.log('signing out')
  auth.signout();
  store.remove('token');
  store.remove('profile');


}

$scope.search = function(){
$location.path('/search/' + $scope.search)

}


})


  .directive('menu', function () {
    return {

      templateUrl: 'views/menu.html' ,
      restrict: 'EA',
      controllelr:'MenuCtrl'

    }
  });
