/*global angular:false */
/*global _:false */
/*global xrmApp:false */
xrmApp.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('xrmApp', {
                url: '/',
                templateUrl: 'component/Components/blankView.html',
                controller: 'blankController'
            });

        $urlRouterProvider.otherwise("/");
    }
]);
