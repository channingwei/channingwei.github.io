/*global angular:false */
/*global _:false */
/*global xrmApp:false */
xrmApp.config([
    '$stateProvider', function($stateProvider) {
        'use strict';
        $stateProvider
            .state('app-main', {
                url: '/app/main',
                templateUrl: 'app/main/mainView.html',
                controller: 'MainController'
            })
            .state('app-home', {
                url: '/app/home',
                templateUrl: 'app/main/homeView.html',
                controller: 'HomeController'
            })
            .state('app-application', {
                url: '/app/application',
                templateUrl: 'app/main/applicationView.html',
                controller: 'ApplicationController'
            })
            .state('app-workspace', {
                url: '/app/workspace',
                templateUrl: 'app/main/workspaceView.html',
                controller: 'WorkspaceController'
            })
            .state('raw-contact', {
                url: '/app/raw-open-contact',
                templateUrl: 'app/main/workspaceView.html',
                controller: 'WorkspaceController'
            });
    }]);