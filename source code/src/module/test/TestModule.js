/*global angular:false */
/*global _:false */
/*global ckApp:false */
ckApp.config([
   '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   'use strict';
   $stateProvider
   .state('test-testview', {
      url: '/test/testview',
         templateUrl: 'module/test/testView.html',
         controller: 'TestController'
      }
   );
   $urlRouterProvider.otherwise("/");
}]);
