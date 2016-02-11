'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:eventCard
 * @description
 * # eventCard
 */
angular.module('sportzflixApp')
  .directive('eventCard', function () {
    return {
      templateUrl: 'views/eventtitlecard.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          console.log('eventTitleCard')
        console.log('divs in event', element.find("div"))
        var overlay = element.find("div")[0]
        $(element).hover(
            function(){
            $(overlay).css('display', 'block')



        },
             function(){
           $(overlay).css('display', 'none')

        }

        );



      }
    };
  });
