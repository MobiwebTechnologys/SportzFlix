'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:frontfooter
 * @description
 * # frontfooter
 */
angular.module('sportzflixApp')
  .directive('frontfooter', function () {
    return {
      templateUrl: 'views/frontfooter.html',
      restrict: 'AE'
    };
  });
