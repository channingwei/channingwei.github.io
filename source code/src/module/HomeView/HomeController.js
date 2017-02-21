/*global angular:false */
/*global _:false */
/*global ckApp:false */
/*global UITaskView:false */

(function () {
   'use strict';

   ckApp.controller("HomeController", ['$scope', '$filter', '$state', '$compile', 'kuo', '$ionicScrollDelegate', 'HomeService', HomeController]);
   function HomeController($scope, $filter, $state, $compile, kuo, $ionicScrollDelegate, HomeService) {

      function init() {
         $scope.screenHeight = kuo.getScreenHeight();
      }

      init();
   }

})();
