'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:footer
 * @description
 * # footer
 */
angular.module('sportzflixApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
