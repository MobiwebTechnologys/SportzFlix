'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:UpdatebillingmethodCtrl
 * @description
 * # UpdatebillingmethodCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('UpdatebillingmethodCtrl', function ($scope, $http, paymentmethodservice, auth, $location, $route) {


  /*INIT SHOW HIDE SCOPE VARIABLE*/
  $scope.card = {}
  $scope.cardHasError = false
  $scope.paymentSuccess = false;
  $scope.paypalSuccess = false;
  $scope.showPaypalError = false;
  console.log($scope.profile)


    /*FIND THE APPROPRIATE BILLING HINT*/
  if ($scope.profile.billing_method == "PayPal"){
    $scope.currentBillingMethod = 'PayPal account ' + $scope.profile.billing_hint;

  }

  if ($scope.profile.billing_method == "Credit Card"){
    $scope.currentBillingMethod = 'Credit Card ending in ' + $scope.profile.billing_hint;

  }

  /*HANDLE STRIPE PAYMENT*/
 $scope.handleStripe = function (code, result) {
    if (result.error) {
        $scope.cardHasError = true;
        window.alert('it failed! error: ' + result.error.message);
    } else {
        //call to serveryo

        $scope.chargeCard = paymentmethodservice.handleCreditCard(result.id, auth.profile.user_id).then(function(response){

            $scope.paymentSuccessData = response.data;

            auth.getProfile().then(function(){
               $location.path('/profile');

            })

        }, function(result){
                console.log(result.data)

            }
        )
    }
};

/*HANDLE PAYPAL PAYMENT*/
$scope.paypalOptions = {
               onPaymentMethodReceived: function(payload) {
                 console.log('Yay, payload with nonce:', payload);
                 $scope.callPaypal = paymentmethodservice.handlePayPal(payload.nonce, auth.profile.user_id, payload.details.email)

                 .then(function(response){

                     $scope.paymentSuccessData = response.data;
                     console.log($scope.paymentSuccessData);
                    auth.getProfile().then(function(){
                        $location.path('/profile');
                    })
                 } , function(response){
                     if(response.status == 400){
                         $scope.errorMessage = response.data;
                         $scope.showPaypalError = true;

                     }
                 }

                 )
               }
             };

  });
