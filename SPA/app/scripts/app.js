'use strict';

/**
 * @ngdoc overview
 * @name spaApp
 * @description
 * # spaApp
 *
 * Main module of the application.
 */
angular
  .module('spaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/register',{
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/account',{
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/settings',{
        templateUrl: 'views/settings.html',
        controller: 'ChangeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
