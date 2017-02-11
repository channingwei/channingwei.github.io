/*global angular:false */
/*global _:false */
/*global xrmApp:false */
xrmApp.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('app-language', {
                url: '/app/language',
                templateUrl: 'app/language/languageView.html',
                controller: 'LanguageController'
            });
    }]);