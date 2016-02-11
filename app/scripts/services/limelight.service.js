'use strict';

/**
 * @ngdoc service
 * @name sportzflixApp.limelight.service
 * @description
 * # limelight.service
 * Factory in the sportzflixApp.
 */
angular.module('sportzflixApp')
  .service('limelightService', function ($http, API_URL) {
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
      return $http.get(API_URL + 'channels/' + episodeId + '/')
    }


  this.getEventData = function(eventId){
        return $http.get(API_URL + 'events/' + eventId + '/');
    }

  this.notifyUserOfEvent = function (event, userEmail) {
    var data = {
      event: event,
      email: userEmail

    }
    return $http.post(API_URL + 'events/notify_user_of_event/', data);
  }


  this.getLiveEvents = function(){
    return $http.get(API_URL + 'events/');
  }

    // Public API here
  });
