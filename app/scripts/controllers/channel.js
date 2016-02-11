'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:ChannelCtrl
 * @description
 * # ChannelCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
    .controller('ChannelCtrl', function ($routeParams, limelightService, $scope, _, $filter, $window, $compile, $location) {


        //current episode and season vars
        $scope.currentSeason;
        $scope.currentEpisode;
        $scope.episodesLoaded = false;
        $scope.rerenderPlayer = false;



        //var used in rerenderingEpisodes on the carousel
        $scope.rerenderPlayer = false;

        // retrieve the episode ID from the url with route params
        var episodeId = $routeParams.episodeId;
        var channelId = $routeParams.channelId;

        //grab current episode from url var and assign appropriate season
        var grabEpisode = function (myArray, episodeNumber) {
            var obj = _.find(myArray, function (obj) {
                return obj.id == episodeNumber
            })
            return obj
        }
        //function to chunk data into two columns for cell phones
        function chunk(arr, size) {
            var newArr = [];
            for (var i = 0; i < arr.length; i += size) {
                newArr.push(arr.slice(i, i + size));
            }
            return newArr;
        }
        //filter through the episodes and grab only the one in the current season
        $scope.grabEpisodesInSeason = function (myArray, season) {
            console.log('grabbing episodes in season', myArray, season)
            var episodes = []
            angular.forEach(myArray, function (key, value) {

                if (key.season.id == season.id) {
                    episodes.push(key);
                }
            })
            $scope.episodesInCurrentSeason = episodes;
          console.log('episodes in season', $scope.episodesInCurrentSeason)

            $scope.chunkedEpisodesInCurrentSeason = chunk(episodes, 2);
           $scope.episodesLoaded = false;
            $scope.episodesLoaded = true;
        }

        // fetch the channel and episode information from the server and set it to a scope variable
        $scope.grabData = limelightService.getChannelData(channelId);

        $scope.grabData.success(function (data) {

            $scope.channel = data;
            console.log('currentSeason' , data);
            console.log($scope.channel);
            $scope.currentEpisode = grabEpisode($scope.channel.episodes, episodeId);
            $scope.currentSeason = $scope.currentEpisode.season;
            $scope.grabEpisodesInSeason($scope.channel.episodes, $scope.currentSeason);
            $scope.rerenderPlayer = true;

            $scope.episodesLoaded = true;
        })


        //overwrite the go to channel page to play a video
        $scope.goToPlayer = function (episode, channel) {

            $scope.currentEpisode = episode;
            $location.path("/channel/" + $scope.channel.id + '/' + $scope.currentEpisode.id);
        }
    });
