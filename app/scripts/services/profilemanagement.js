'use strict';

/**
 * @ngdoc service
 * @name sportzflixApp.profilemanagement
 * @description
 * # profilemanagement
 * Service in the sportzflixApp.
 */
angular.module('sportzflixApp')
  .service('profilemanagement', function ($http, API_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      this.getProfile = function(userapp_id){
        var data = {userapp_id: userapp_id}

        return $http.post(API_URL + 'customers/profile/', data)



      }
  });
