'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:EmailpreferencesCtrl
 * @description
 * # EmailpreferencesCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('EmailpreferencesCtrl', function ($scope, profileUpdateService, auth) {



    $scope.form ={}
    $scope.formTwo = {}

      //add events subscriptions to form
          $scope.fieldsTwo = []

          angular.forEach($scope.profile.subscribed_events, function (key, value) {
            console.log('event', key)


            var event = {
              type: 'checkbox',
              key: key.id,
              defaultValue: 'checked',
              templateOptions: {
                type: 'checkbox',
                label: key.title
              }
            };

            $scope.fieldsTwo.push(event);
            $scope.formTwo[key.id] = true;

          })



     $scope.fields = [
      {
        type: 'checkbox',
        key: 'newsletter',
        defaultValue:$scope.profile.newsletter,
        templateOptions:{
          type: 'checkbox',
          label: 'Gosports Monthly Newsletter',

        }
      },

      {
        type: 'checkbox',
        key: 'whats_new',
        defaultValue: $scope.profile.whats_new,
        templateOptions:{
          type: 'checkbox',
          label: 'Weekly "What\'s New" Announcements',

        }
      },
      {
        type: 'checkbox',
        key: 'event_updates',
        defaultValue: $scope.profile.event_updates,
        templateOptions:{
          type: 'checkbox',
          label: 'Live Event Updates',

        }
      },

     ]


      $scope.submitPreferences = function(){
        console.log($scope.form, $scope.formTwo)
        profileUpdateService.changeEmailPreferences($scope.form, auth.profile.user_id, $scope.formTwo).success(function(){

          $scope.$parent.profile.newsletter = $scope.form.newsletter;
        $scope.$parent.profile.whats_new = $scope.form.whats_new;
        $scope.$parent.profile.event_update = $scope.form.event_update;
        $scope.$close();
        })






      }

  });
