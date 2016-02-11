'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:AddpaymentCtrl
 * @description
 * # AddpaymentCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('AddpaymentCtrl', function ($scope, $http, paymentmethodservice, $location, $route, auth, profileUpdateService) {

        $scope.profile = auth.profile;

    //used to log cc data before tokeniztion by stripe
  $scope.card = {};
  $scope.prePayData = {};
  $scope.validName = true;
  $scope.validUserSports = true;
  $scope.cardHasError = false;
  $scope.paymentSuccess = false;
  $scope.paypalSuccess = false;
  $scope.showPaypalError = false;

  //confirms there first_name, last_name and email and makes sure it's stored in auth.profile.user_metadata
 auth.getProfile().then(function(){

 //handle email user with nothing set
 if(auth.profile.email == undefined || auth.profile.user_metadata == undefined){
     $scope.validName =false;
 }

//handle fbook user
  else if (auth.profile.given_name != undefined){
        profileUpdateService.updateNameAndEmail(auth.profile.user_id, auth.profile.given_name, auth.profile.family_name, auth.profile.email)
       $scope.validName = true;
    }

//handle case where we already have the info(returning users)
else if(auth.profile.user_metadata.first_name != undefined){
    $scope.validName = true;
}
// anything else forces them to reenter their name and contact email
else{
         $scope.validName = false;
     }

 });


  $scope.navigateToVideo = function(){
        $location.path('/browsevideo')
  };

 $scope.handleStripe = function (code, result) {
    if (result.error) {
        $scope.cardHasError = true;
        window.alert('it failed! error: ' + result.error.message);
    } else {
        //call to serveryo
        console.log(result)

        $scope.chargeCard = paymentmethodservice.handleCreditCard(result.id,auth.profile.user_id).then(function(response){

            $scope.paymentSuccessData = response.data;
            console.log('paymentmade', $scope.paymentSuccessData);
            auth.getProfile().then(function(p){
                console.log('profile got', p)
                $location.path('/');

            })

        }, function(result){
                console.log(result.data)

            }


        )


    }
};


$scope.paypalOptions = {
               onPaymentMethodReceived: function(payload) {
                 console.log('Yay, payload with nonce:', payload);
                 $scope.callPaypal = paymentmethodservice.handlePayPal(payload.nonce, auth.profile.user_id, payload.details.email)

                 .then(function(response){

                     $scope.paymentSuccessData = response.data;
                     console.log($scope.paymentSuccessData);
                        console.log('pp name collection',$scope.PP_name.PP_first_name, $scope.PP_name.PP_last_name)
                        $scope.paypalSuccess = true;

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
