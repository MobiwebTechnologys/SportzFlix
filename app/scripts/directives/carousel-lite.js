'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:carouselLite
 * @description
 * # carouselLite
 */
/*BEGIN PLUGIN LOGIC*/

 angular.module('sportzflixApp').filter('capitalize', function() {
  return function(token) {
      return token.charAt(0).toUpperCase() + token.slice(1);
   }
})


    var ctrl = function ($scope, CBuffer, $location, matchmedia) {

        //variable used to toggle the left side of the array. Is incremented and decrements with the toggle left
        //or right buttons are clicked.
        var startingSlide = 0;

        if (matchmedia.is('(min-width: 600px)')) {
            $scope.numberOfSlides = 2;
        }

        if (matchmedia.is('(min-width: 800px)')) {
            $scope.numberOfSlides = 3;
        }

        if (matchmedia.is('(min-width: 800px)')) {
            $scope.numberOfSlides = 5;
        }

        if (matchmedia.is('(min-width: 1300px)')) {
            $scope.numberOfSlides = 7 ;
        }

        //watch for data change while the $http call resolves
                    //create a new slider array with the length of the items array
                    console.log('items in the directive',$scope.items)
                    $scope.sliderArray = CBuffer($scope.items.length);
                    //push the items to the circular buffer

                    $scope.items.sort(function (a, b) {
                                  if (a.order_by> b.order_by) {
                                    return 1;
                                  }
                                  if (a.order_by < b.order_by) {
                                    return -1;
                                  }
                                  // a must be equal to b
                                  return 0;
                                });

                    angular.forEach($scope.items, function(key, val){

                        $scope.sliderArray.push(key)
                        });

                    $scope.displayedItems = $scope.sliderArray.toArray().slice(0 ,($scope.numberOfSlides - 1));


        $scope.$watch('items', function(newValue, oldValue) {
                if (newValue)
                    //watch for data change while the $http call resolves
                    //create a new slider array with the length of the items array
                    $scope.sliderArray = CBuffer($scope.items.length);
                    //push the items to the circular buffer

                    $scope.items.sort(function (a, b) {
                                  if (a.order_by> b.order_by) {
                                    return 1;
                                  }
                                  if (a.order_by < b.order_by) {
                                    return -1;
                                  }
                                  // a must be equal to b
                                  return 0;
                                });

                    angular.forEach($scope.items, function(key, val){

                        $scope.sliderArray.push(key)
                        });

                    $scope.displayedItems = $scope.sliderArray.toArray().slice(0 ,($scope.numberOfSlides - 1));
        }, true);



        /*
        $scope.$watch('channel', function(newValue, oldValue) {
                if (newValue){
                    $scope.channel = newValue;
                }

        }, true);
        */





        $scope.toggleLeft = function () {

            $scope.sliderArray.rotateRight();
            $scope.displayedItems = $scope.sliderArray.toArray().slice(0,($scope.numberOfSlides - 1));
            console.log('slider to array' ,$scope.sliderArray.toArray())
        }

        $scope.toggleRight = function () {
            $scope.sliderArray.rotateLeft()
             $scope.displayedItems = $scope.sliderArray.toArray().slice(0,($scope.numberOfSlides - 1));
        }

        $scope.goToPlayer = function (episode) {
             $scope.currentEpisode = episode;
        $location.path("/channel/" + $scope.channel.id + '/' + $scope.currentEpisode.id)
        }

        //navigate to the clicked on event
     $scope.goToEvent = function(item){
        $location.path('/liveevent/' + item.id)
    }
    }

    var overlayBox = function(){
        return {
            template: '<img ng-src="{{item.lead_thumbnail}}" err-src="{{item.static_img}}" class="img-responsive"><div class="extra-overlay"><div class="extra-play-button"><span class="glyphicon glyphicon-play-circle" ></div></div>',
            restrict: 'E',
            link: function (scope, element, attrs) {
                    var overlay = element.find("div")[0];
                    var box = element.find("div")[1];

                    $(element).hover(
					function(){
					$(overlay).css('display', 'block');
        	},
           function(){
           $(overlay).css('display', 'none')
			});
           }
        }
    }

angular.module('sportzflixApp')
        .directive('overlayBox', overlayBox);


    var directive = function (CBuffer) {


            return {
                templateUrl: 'views/carousel-lite.html',
                restrict: 'E',
                scope: {
                    items: '=items',
                    // numberOfSlides: '=numberOfSlides',
                    channel:'=channel',
                    showDescription: '=showDescription',
                    event: '=event'

                },
                controller: ctrl,

                link: function (scope, element, attrs) {



                }
            }
        };

        angular.module('sportzflixApp')
        .directive('carouselLite', directive);






