'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:signup
 * @description
 * # signup
 */
angular.module('sportzflixApp')
  .directive('signup', function (auth) {
    return {
      templateUrl: 'views/signupform.html',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {


      }}
  });
