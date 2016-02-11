'use strict';

/**
 * @ngdoc overview
 * @name sportzflixApp
 * @description
 * # sportzflixApp
 *
 * Main module of the application.
 */
angular
  .module('sportzflixApp', [

    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-owl-carousel',
    'ui.bootstrap',

    'angularPayments',
    'braintree-angular',
    'cgBusy',
    'angularMoment',
    'formly',
      'formlyBootstrap',
        'angular-flexslider',
        'angular-carousel',
        'ui.select',
        'angularMoment',
        'timer',
        'ezfb',
        'auth0',
        'cbuffer',
        'matchmedia-ng',
        'angular-storage',
        'angular-jwt',
        'ngMessages'


  ])
    .constant('API_URL', 'https://calm-falls-3900.herokuapp.com/')
    .constant('clientTokenPath', 'https://calm-falls-3900.herokuapp.com/' + 'braintree_token')
    .constant('SOCIAL_PLUGINS', [
      'like', 'share-button', 'send', 'post', 'video',
      'comments', 'page', 'follow'
    ])


    //underscore js constant
    .constant('_',
    window._
        )


    .config(function($windowProvider, $httpProvider) {
      $windowProvider.$get().Stripe.setPublishableKey('pk_test_b7DNvcW0ILbXaqffYQNo2DWU');
     // $httpProvider.defaults.useXDomain = true;
     // $httpProvider.defaults.withCredentials = true;
     // delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";


})

    .config(function (ezfbProvider) {
  ezfbProvider.setLocale('en_US');
})

   .config(function (ezfbProvider) {
      ezfbProvider.setInitParams({
        appId: '1641258842809269'
      })
    })




    .constant("limelightAccessKey", 'hEG/dm1MZMV1wOQTw0uMfhbQJyw=')
    .constant("limelightSecret", "X0jdkailbL62oFocu93ys2LiCv8=")



.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
})







  .config(function ($routeProvider, jwtInterceptorProvider, $httpProvider, authProvider) {
      $routeProvider

          .when('/', {
            redirectTo: '/browsevideo',
              requiresLogin: true

          })
          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about',
            requiresLogin:false

          })

          .when('/browsevideo', {
            templateUrl: 'views/browsevideo.html',
            controller: 'BrowsevideoCtrl',
            controllerAs: 'browsevideo',
            requiresLogin: true
          })


          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'LoginCtrl',
            login: true
          })
          .when('/signup', {templateUrl: 'views/signup.html', public: true})

          .when('/reset-password', {templateUrl: 'views/reset-password.html', public: true})


          .when('/set-password', {templateUrl: 'views/set-password.html', set_password: true})
          .when('/addpayment', {
            templateUrl: 'views/addpayment.html',
            controller: 'AddpaymentCtrl',
            controllerAs: 'addpayment',
            requireLogin: true
          })
          .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'profile',
            requiresLogin: true
    })
    .when('/channel/:channelId/:episodeId', {
      templateUrl: 'views/channel.html',
      controller: 'ChannelCtrl',
      controllerAs: 'channel',
      requireLogin: true
    })
    .when('/liveevent/:eventId', {
      templateUrl: 'views/liveevent.html',
      controller: 'LiveeventCtrl',
      controllerAs: 'liveevent',
      requiresLogin: true
    })
    .when('/search/:searchTerm', {
      templateUrl: 'views/search.html',
      controller: 'SearchCtrl',
      controllerAs: 'search'
    })
    .otherwise({
      redirectTo: '/',
      requiresLogin: true

    });

authProvider.init({
  domain: 'gosports.auth0.com',
  clientID: 'PJ0puLFzjMUXuKhipWOcGREsONuHB0F4',
  loginUrl: '/about',
  callbackUrl: location.href,


});

 authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
    profilePromise.then(function(profile) {
      store.set('profile', profile);
      store.set('token', idToken);
    });
    $location.path('/');
  });

  authProvider.on('loginFailure', function() {
    $location.path('/about');
  });

  authProvider.on('authenticated', function($location) {


  });

  authProvider.on('logout', function($location) {
    $location.path('/about');
  })

// We're annotating this function so that the `store` is injected correctly when this file is minified
jwtInterceptorProvider.tokenGetter = ['store', function (store) {
  // Return the saved token
  return store.get('token');
}]

$httpProvider.interceptors.push('jwtInterceptor')

})

.run(function($rootScope, auth, store, jwtHelper, $location) {
  // This events gets triggered on refresh or URL change
  $rootScope.$on('$locationChangeStart', function() {

    //exempt the about page from login redirection
    if ($location.$$path == '/about'){

    }

    else if ($location.$$path == '/signup'){

    }

    else {
        var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
        if(auth.isAuthenticated){

            auth.getProfile().then(function(){


            //check to see if user is current on payments and if not redirect them to add payment page
            if (auth.profile.user_metadata == undefined){
                console.log('shit was not defined')



                $location.path('/addpayment')
            }

            else if (auth.profile.user_metadata.access == true){
                console.log('access is true')
            }

            else  {
                console.log('access is false')
                $location.path('/addpayment')
            }


            })
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/login');
      }
    }

    }


  });
})
;


