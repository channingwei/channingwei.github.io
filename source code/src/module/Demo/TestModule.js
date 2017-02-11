/*global angular:false */
/*global _:false */
/*global xrmApp:false */
xrmApp.config([
   '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      'use strict';
      $stateProvider
      .state('wx-demo', {
         url: '/wx/demo',
         templateUrl: 'module/Demo/DemoListView.html',
         controller: 'DemoListController'
      })
      .state('wx-demodetail', {
         url: '/wx/demodetail',
         templateUrl: 'module/Demo/DemoDetailView.html',
         controller: 'DemoDetailController'
      });
   $urlRouterProvider.otherwise("/");
}]);
