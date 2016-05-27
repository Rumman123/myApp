'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */

var myApp = angular.module('myApp',['ui.router', 'rcForm']);

myApp.config(function($stateProvider,$urlRouterProvider){

    $stateProvider
        .state('main',{
            url: '/main',
            controller: 'MainCtrl',
            controllerAs: 'main',
            templateUrl: '../views/main.html'
        })
        .state('content',{
            url: '/add-content',
            controller: 'ContentCtrl',
            controllerAs: 'content',
            templateUrl: '../views/add-content.html'
        });

    $urlRouterProvider.otherwise('/main');
})
