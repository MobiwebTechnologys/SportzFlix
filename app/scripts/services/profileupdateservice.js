'use strict';

/**
 * @ngdoc service
 * @name sportzflixApp.profileUpdateService
 * @description
 * # profileUpdateService
 * Service in the sportzflixApp.
 */
angular.module('sportzflixApp')
  .service('profileUpdateService', function ($http, API_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.updateField = function(field, value, id){

      var data = {
        field: field,
        value: value,
        userapp_id: id
      }


      return $http.post(API_URL + 'customers/update_profile/', data)

    }

    this.changePassword = function(form, userapp_id, token){
      var data = {
        current_password: form.current_password,
        new_password: form.new_password,
        userapp_id: userapp_id,
        token: token
      }

      return $http.post(API_URL + 'customers/change_password/', data)


    }

    this.changeEmailPreferences = function(form, userapp_id, events){
      var data = {
        newsletter: form.newsletter,
        whats_new: form.whats_new,
        event_updates: form.event_updates,
        userapp_id: userapp_id,
        events: events

      }

      return $http.post(API_URL + 'customers/update_email_preferences/', data)
    }

    this.cancelMembership = function(userapp_id) {
      var data = {
        userapp_id: userapp_id
      }

      return $http.post(API_URL + 'customers/cancel_membership/', data);

    }

    this.getBillingHistory = function(userapp_id){

      var data = {
        userapp_id: userapp_id
      }

      return $http.post(API_URL + 'customers/get_billing_history/', data);

    }

    this.signUpForEventNotification = function(userapp_id, event){
      var data = {
        userapp_id: userapp_id,
        event: event
      }
      return $http.post(API_URL + 'customers/event_notification_signup/', data)
    }

    this.updateNameAndEmail = function(user_id, first_name, last_name, email){
      var data = {
        user_id:user_id,
        first_name:first_name,
        last_name:last_name,
        email: email
      }
      return $http.post(API_URL + 'customers/confirm_email_and_name/', data)
    }

    this.updateUserSports = function(user_id, sport_one, sport_two, sport_three)  {
      var data = {
        user_id: user_id,
        sport_one: sport_one,
        sport_two: sport_two,
        sport_three: sport_three
      }

      return $http.post(API_URL + 'customers/update_user_sports/', data)
    }


  });
