'use strict';

/**
 * @ngdoc function
 * @name sportzflixApp.controller:ModalplayerCtrl
 * @description
 * # ModalplayerCtrl
 * Controller of the sportzflixApp
 */
angular.module('sportzflixApp')
  .controller('ModalplayerCtrl', function ($scope, currentVideo) {
    $scope.currentVideo = currentVideo
  });
