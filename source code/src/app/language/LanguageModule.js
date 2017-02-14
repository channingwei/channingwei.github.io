/*global angular:false */
/*global _:false */
/*global ckApp:false */
ckApp.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('app-language', {
                url: '/app/language',
                templateUrl: 'app/language/languageView.html',
                controller: 'LanguageController'
            });
    }]);