// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-08-24 using
// generator-karma 0.9.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-busy/dist/angular-busy.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/api-check/dist/api-check.js',
      'bower_components/angular-formly/dist/formly.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js',
      'bower_components/moment/moment.js',
      'bower_components/angular-moment/angular-moment.js',
      'bower_components/angular-payments/lib/angular-payments.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/braintree-angular/dist/braintree-angular.js',
      'bower_components/velocity/velocity.js',
      'bower_components/ng-morphing-modal/build/js/ngMorphingModal.js',
      'bower_components/flexslider/jquery.flexslider.js',
      'bower_components/angular-flexslider/angular-flexslider.js',
      'bower_components/slick-carousel/slick/slick.min.js',
      'bower_components/angular-slick/dist/slick.js',
      'bower_components/angular-carousel/dist/angular-carousel.js',
      'bower_components/ui-select/dist/select.js',
      'bower_components/underscore/underscore.js',
      'bower_components/momentjs/moment.js',
      'bower_components/humanize-duration/humanize-duration.js',
      'bower_components/angular-timer/dist/angular-timer.js',
      'bower_components/angular-easyfb/build/angular-easyfb.js',
      'bower_components/angular-slick-carousel/dist/angular-slick.js',
      'bower_components/angular-cbuffer/angular-cbuffer.js',
      'bower_components/matchmedia/matchMedia.js',
      'bower_components/matchmedia-ng/matchmedia-ng.js',
      'bower_components/auth0-lock/build/auth0-lock.js',
      'bower_components/auth0.js/build/auth0.js',
      'bower_components/auth0-angular/build/auth0-angular.js',
      'bower_components/a0-angular-storage/dist/angular-storage.js',
      'bower_components/angular-jwt/dist/angular-jwt.js',
      'bower_components/angular-messages/angular-messages.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
