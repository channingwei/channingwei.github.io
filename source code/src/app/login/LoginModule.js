/*global angular:false */
/*global _:false */
/*global ckApp:false */
ckApp.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('app-login', {
                url: '/app/login',
                templateUrl: 'app/login/loginView.html',
                controller: 'LoginController'
            });
    }]);