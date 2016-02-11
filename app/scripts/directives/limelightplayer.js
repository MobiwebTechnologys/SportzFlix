'use strict';

/**
 * @ngdoc directive
 * @name sportzflixApp.directive:limelightplayer
 * @description
 * # limelightplayer
 */




angular.module('sportzflixApp')
  .directive('limelightplayer', function ($timeout, $q) {


        return {
            template: '',
            restrict: 'E',
            scope: {
                media: '@'
            },

            link: function (scope, elem, attrs) {
                    var player = '<object type="application/x-shockwave-flash" id="limelight_player_406354" name="limelight_player_406354"  class="LimelightEmbeddedPlayerFlash" width="85%" height="600px" data="http://assets.delvenetworks.com/player/loader.swf"> <param name="movie" value="http://assets.delvenetworks.com/player/loader.swf"/> <param name="wmode" value="window"/> <param name="allowScriptAccess" value="always"/>'
                    player += '<param name="allowFullScreen" value="true"/>'
                    player += '<param name="flashVars" value="playerForm=fc40dbd8074e41dcb70d5f47bbf85da1&amp;mediaId='
                    player += (scope.media + '"/> </object>')
                    elem.append(player);
                    LimelightPlayerUtil.initEmbed('limelight_player_406354');
            }
        }
    }
   );



