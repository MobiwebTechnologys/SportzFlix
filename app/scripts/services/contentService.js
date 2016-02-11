'use strict';

/**
 * @ngdoc service
 * @name sportzflixApp.limelight.service
 * @description
 * # limelight.service
 * Factory in the sportzflixApp.
 */
angular.module('sportzflixApp')
  .service('contentService', function ($http, API_URL) {
    // Service logic
    // ...


    var orgainizationId  = '74a5d4c0276b493c99d9ee50ae7436ba';
    var apiUrl =  'http://api.video.limelight.com/rest/organizations/' + orgainizationId + '/';
    var accessKey = 'hEG/dm1MZMV1wOQTw0uMfhbQJyw=';
    var secret = 'X0jdkailbL62oFocu93ys2LiCv8='

    this.getChannels = function(){
        return $http.get(API_URL + 'channels/');
    }

    this.getCarousels = function(){
        return $http.get(API_URL + 'carousels/');
    }

    this.getChannelData = function(episodeId){
      return $http.get(API_URL + 'channels/' + episodeId + '/');
    }

    this.getEventData = function(eventId){
        return $http.get(API_URL + 'events/' + episodeId + '/');
    }


    this.grabEpisodesInSeason =  function (myArray, season) {
      console.log('grabbing episodes in season', myArray, season)
      var episodes = []
      angular.forEach(myArray, function (key, value) {

        if (key.season.id == season.id) {
          episodes.push(key);
        }
      })
      return episodes
    }





    // Public API here
  });
