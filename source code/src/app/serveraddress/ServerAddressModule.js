/*global angular:false */
/*global _:false */
/*global xrmApp:false */
xrmApp.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('app-serveraddress', {
                url: '/app/serveraddress',
                templateUrl: 'app/serveraddress/serverAddressView.html',
                controller: 'ServerAddressController'
            });
    }]);