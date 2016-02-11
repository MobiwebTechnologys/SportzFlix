'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:BrowsevideoCtrl
 * @description
 * # BrowsevideoCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('BrowsevideoCtrl', function (limelightService, $scope, $location, $interval, auth) {

        //make sure user has access granted in profile
     auth.getProfile().then(function(p){

            if(p.user_metadata == undefined){
                $location.path('/addpayment');
            }
            else if (p.user_metadata.access == undefined || p.user_metadata.access == false){
                $location.path('/addpayment');
            }
            else{

            }

        })


        $scope.index = 0;
        //a selection of channels to display in the header carousel
        $scope.headerChannels = [];

        //events loaded var
        $scope.eventLoaded = false;


        //grab the channel groups and channels from limelight1
        $scope.getTheChannels = limelightService.getChannels()
            $scope.getTheChannels.success(function(data){
            $scope.channels = data;


        })

        //grab the header carousel images
        limelightService.getCarousels().success(function(data){
            $scope.carousels = data;
        });

        //grab the events from the server
        limelightService.getLiveEvents().success(function(data){
            $scope.events = data;
            $scope.eventsLoaded = true;
        })


        /*
        Send user to channel page when they click on an item carousel
        * */
        $scope.goToChannelPage = function(channel){
            $location.path('/channel/'+ channel.channel_id);

        }


    //send person to the player episode page and passes the episode id.

        $scope.goToPlayer = function(item, channel){
           $location.path('/channel/'+ channel.id + '/' + item.id);
        }

    //navigate to the clicked on carousel item
    $scope.goToCarousel = function(cr){
        console.log('carouselldata', cr.link)
        $location.path(cr.link)
    }


  });
