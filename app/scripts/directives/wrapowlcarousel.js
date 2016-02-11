'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:wrapOwlCarousel
 * @description
 * # wrapOwlCarousel
 */
angular.module('sportzflixApp')
  .directive('wrapOwlCarousel', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            $(element).owlCarousel(options);
        }
    };
  });
