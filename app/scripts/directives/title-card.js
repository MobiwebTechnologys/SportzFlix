'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:titleCard
 * @description
 * # titleCard
 */
angular.module('sportzflixApp')
  .directive('titleCard', function ($animate) {
    return {
      templateUrl: 'views/titlecard.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var extraContent = element.find("div")[2]
        var overlay = element.find("div")[0]
        var thumbnail = element.find('img')[1]

        var counter = 1
        /*
        * var go = setInterval(function(){ setThumb(counter) }, 3000);

        function setThumb(){
          if(counter == 2){
            thumbnail.src = scope.item.thumbs[counter];
            counter = 0

          }
          else{
            thumbnail.src = scope.item.thumbs[counter];
            counter = counter + 1;

          }

        }

        * */




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
