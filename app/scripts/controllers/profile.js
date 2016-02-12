'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
    .controller('ProfileCtrl', function ($scope, profilemanagement, $uibModal, $window, auth) {

        $("body").css('background', 'none');
        $("body").css('background-color', '#212121');
        
        $scope.auth = auth;
        
        //grab the auth0 info and then use that to hit the profile endpoint on our api
        auth.getProfile().then(function (p) {

            profilemanagement.getProfile(p.user_id).success(function (d) {
                $scope.profile = d
                console.log('profile', $scope.profile)

            });
        })

        //update email modal stuff
        $scope.updateEmail = function () {

            var emailModalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/changeEmail.html',
                controller: 'ChangeemailCtrl',
                backdropClass: 'modal-background',
                resolve: {
                    user: function () {
                        return auth.profile;
                    }
                }


            })

            emailModalInstance.result.then(function (result) {
                auth.profile.email = result

            }, function () {

            });



        }

        // change password modal stuff
        $scope.changePassword = function () {
            /*
             var passwordModalInstance = $uibModal.open({
               animation: true,
               templateUrl: 'views/changePassword.html',
               controller: 'ChangepasswordCtrl',
               resolve: {
                 user: function () {
                   return auth.profile;
                 }
               }
    
    
             })
    
             passwordModalInstance.result.then(function (result) {
              auth.profile.email = result
              }, function () {
    
              });
              */
            auth.reset();
        }

        //update email preferences modal

        $scope.emailPreferences = function () {
            var emailPreferenceModalInstance = $uibModal.open({
                animation: true,
                scope: $scope,
                templateUrl: 'views/emailPreferences.html',
                controller: 'EmailpreferencesCtrl',
                resolve: {
                    profile: function () {
                        return $scope.profile;
                    }
                }
            })

            emailPreferenceModalInstance.result.then(function (result) {
                profilemanagement.getProfile(auth.profile.user_id).success(function (d) {
                });

                profilemanagement.getProfile(auth.profile.user_id).success(function (d) {
                    $scope.profile = d
                });
            }, function () {
            });
        }


        //update billing modal

        $scope.updateBilling = function () {

            var updateBillingModalInstance = $uibModal.open({
                animation: true,
                scope: $scope,
                templateUrl: 'views/updateBillingMethod.html',
                controller: 'UpdatebillingmethodCtrl',
                resolve: {
                    profile: function () {
                        return $scope.profile;
                    }
                }
            })

            updateBillingModalInstance.result.then(function (result) {
                profilemanagement.getProfile(auth.profile.user_id).success(function (d) {
                    $scope.profile = d
                });

            }, function () {

            });
        }


        //update billing modal

        $scope.cancelMembership = function () {

            var cancelMembershipModalInstance = $uibModal.open({
                animation: true,
                scope: $scope,
                templateUrl: 'views/cancelMembership.html',
                controller: 'CancelmembershipCtrl',
                resolve: {
                    profile: function () {
                        return $scope.profile;
                    }
                }

            })

            cancelMembershipModalInstance.result.then(function (result) {
                profilemanagement.getProfile(auth.profile.user_id).success(function (d) {
                    $scope.profile = d

                });
                $scope.profile.billing_method = 'no billing method/membership canceled';
            }, function () {
            });
        }


        $scope.billingHistory = function () {
            var billingHistoryModalInstance = $uibModal.open({
                animation: true,
                scope: $scope,
                templateUrl: 'views/billingHistory.html',
                controller: 'BillinghistoryCtrl',
                resolve: {
                    profile: function () {
                        return $scope.profile;
                    }
                }
            })
        }
    });
