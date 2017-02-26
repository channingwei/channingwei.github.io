/*global angular:false */
/*global _:false */
/*global ckApp:false */
ckApp.config([
   '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   'use strict';
   $stateProvider
      .state('chapter-view', {
         url: '/chapter/:id',
         templateUrl: 'module/Chapter/ChapterView.html',
         controller: 'ChapterController'
      }
   );
   $urlRouterProvider.otherwise("/");
}]);
