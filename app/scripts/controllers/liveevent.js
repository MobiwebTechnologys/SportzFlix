'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:LiveeventCtrl
 * @description
 * # LiveeventCtrl
 * Controller of the sportzflixApp
 */



angular.module('sportzflixApp')
  .controller('LiveeventCtrl', function ($scope, $routeParams, limelightService,moment, $sce, auth, profileUpdateService) {


      //var that is set to true one event data has been grabbed
      $scope.eventDataSuccess = false;
      $scope.beforeEvent = false;
      $scope.eventIframe =  ''

      //grab event ID from route params
      var eventId = $routeParams.eventId;

      //create a moment object from the data recieved via the ajax call
      var createMoment = function(date){
        return moment(date)
      }


      // check if now is before the event start date
      var compareNow = function(dateMoment){
        return moment().isBefore(dateMoment);
      }

      //set event picture window to event image
        var setEventBackgroundImage = function(event,email){

        }

      //grab event data from the server
      limelightService.getEventData(eventId).success(function(data){
        $scope.event = data;
        $scope.eventIframe = $sce.trustAsHtml($scope.event.media_url);
        $scope.eventDate = createMoment($scope.event.date);
        $scope.beforeEvent = compareNow($scope.eventDate)
        $scope.eventDataSuccess = true;
        $scope.countdownTime =  (moment().diff($scope.eventDate) * -1) / 1000;
          $scope.$broadcast('timer-set-countdown', $scope.countdownTime);

      });


      //notify the user by email the day of the event.
        $scope.notifyUser = function(event){

            profileUpdateService.signUpForEventNotification(auth.profile.user_id, event ).success(function(){
                alert('You will be notified 24 hours before the event begins.')

            })
        }








  });
