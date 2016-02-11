'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:subdescription
 * @description
 * # subdescription
 */
angular.module('sportzflixApp')
  .directive('subdescription', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the subdescription directive');
      }
    };
  });
