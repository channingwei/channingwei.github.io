/*global angular:false */
/*global _:false */
/*global ckApp:false */
ckApp.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('ckApp', {
                url: '/',
                templateUrl: 'component/Components/blankView.html',
                controller: 'blankController'
            });

        $urlRouterProvider.otherwise("/");
    }
]);
